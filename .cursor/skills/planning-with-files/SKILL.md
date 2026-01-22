---
name: planning-with-files
version: "2.6.0"
description: Implements Manus-style file-based planning for complex tasks. Creates plans in docs/plans/<plan-name>/. Use when starting complex multi-step tasks, research projects, or any task requiring >5 tool calls. Now with native Cursor hooks support.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - WebFetch
  - WebSearch
---

## Hooks (Cursor Native)

This skill uses Cursor's native hooks system via `.cursor/hooks.json`.

| Hook | Event | Purpose |
|------|-------|---------|
| show-plan-context.sh | beforeShellExecution | Display task_plan.md context |
| after-file-edit.sh | afterFileEdit | Remind to update planning files |
| check-complete.sh | stop | Verify all phases complete |

See [docs/cursor.md](../../../docs/cursor.md) for installation instructions.

# Planning with Files

Work like Manus: Use persistent markdown files as your "working memory on disk."

## FIRST: Check for Previous Session (v2.2.0)

**Before starting work**, check for unsynced context from a previous session:

```bash
# Linux/macOS (auto-detects python3 or python)
$(command -v python3 || command -v python) ${CLAUDE_PLUGIN_ROOT}/scripts/session-catchup.py "$(pwd)"
```

```powershell
# Windows PowerShell
python "$env:USERPROFILE\.cursor\skills\planning-with-files\scripts\session-catchup.py" (Get-Location)
```

If catchup report shows unsynced context:
1. Run `git diff --stat` to see actual code changes
2. Read current planning files
3. Update planning files based on catchup + git diff
4. Then proceed with task

## Important: Where Files Go

Plans are organized in `docs/plans/<plan-name>/` directories:

```
your-project/
├── docs/
│   └── plans/
│       ├── .active-plan          # Contains name of current plan
│       ├── auth-implementation/
│       │   ├── task_plan.md
│       │   ├── findings.md
│       │   └── progress.md
│       └── api-refactor/
│           ├── task_plan.md
│           ├── findings.md
│           └── progress.md
└── ...
```

| Location | What Goes There |
|----------|-----------------|
| `docs/plans/<plan-name>/` | Your planning files (task_plan.md, findings.md, progress.md) |
| `docs/plans/.active-plan` | Marker file with current plan name (for hooks) |

## Selecting or Creating a Plan

**When user specifies a plan name** (e.g., "use the auth-implementation plan"):
1. Write the plan name to `docs/plans/.active-plan`
2. If `docs/plans/<plan-name>/` exists, read its files and continue
3. If it doesn't exist, create the directory and initialize files

**When starting a new task** without a specified plan:
1. Generate a descriptive plan name from the task (e.g., `fix-login-bug`, `add-dark-mode`)
2. Create `docs/plans/<plan-name>/` directory
3. Write the plan name to `docs/plans/.active-plan`
4. Initialize the three planning files

**Example:**
```bash
# User says: "Create a plan for implementing user authentication"
mkdir -p docs/plans/user-authentication
echo "user-authentication" > docs/plans/.active-plan
# Then create task_plan.md, findings.md, progress.md in that directory
```

## Quick Start

Before ANY complex task:

1. **Select or create a plan** — Set `docs/plans/.active-plan` and create directory if needed
2. **Create `task_plan.md`** — Use [templates/task_plan.md](templates/task_plan.md) as reference
3. **Create `findings.md`** — Use [templates/findings.md](templates/findings.md) as reference
4. **Create `progress.md`** — Use [templates/progress.md](templates/progress.md) as reference
5. **Re-read plan before decisions** — Refreshes goals in attention window
6. **Update after each phase** — Mark complete, log errors

> **Note:** Always set `.active-plan` so hooks know which plan to check.

## The Core Pattern

```
Context Window = RAM (volatile, limited)
Filesystem = Disk (persistent, unlimited)

→ Anything important gets written to disk.
```

## File Purposes

| File | Purpose | When to Update |
|------|---------|----------------|
| `task_plan.md` | Phases, progress, decisions | After each phase |
| `findings.md` | Research, discoveries | After ANY discovery |
| `progress.md` | Session log, test results | Throughout session |

## Critical Rules

### 1. Create Plan First
Never start a complex task without `task_plan.md`. Non-negotiable.

### 2. The 2-Action Rule
> "After every 2 view/browser/search operations, IMMEDIATELY save key findings to text files."

This prevents visual/multimodal information from being lost.

### 3. Read Before Decide
Before major decisions, read the plan file. This keeps goals in your attention window.

### 4. Update After Act
After completing any phase:
- Mark phase status: `in_progress` → `complete`
- Log any errors encountered
- Note files created/modified

### 5. Log ALL Errors
Every error goes in the plan file. This builds knowledge and prevents repetition.

```markdown
## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| FileNotFoundError | 1 | Created default config |
| API timeout | 2 | Added retry logic |
```

### 6. Never Repeat Failures
```
if action_failed:
    next_action != same_action
```
Track what you tried. Mutate the approach.

## The 3-Strike Error Protocol

```
ATTEMPT 1: Diagnose & Fix
  → Read error carefully
  → Identify root cause
  → Apply targeted fix

ATTEMPT 2: Alternative Approach
  → Same error? Try different method
  → Different tool? Different library?
  → NEVER repeat exact same failing action

ATTEMPT 3: Broader Rethink
  → Question assumptions
  → Search for solutions
  → Consider updating the plan

AFTER 3 FAILURES: Escalate to User
  → Explain what you tried
  → Share the specific error
  → Ask for guidance
```

## Read vs Write Decision Matrix

| Situation | Action | Reason |
|-----------|--------|--------|
| Just wrote a file | DON'T read | Content still in context |
| Viewed image/PDF | Write findings NOW | Multimodal → text before lost |
| Browser returned data | Write to file | Screenshots don't persist |
| Starting new phase | Read plan/findings | Re-orient if context stale |
| Error occurred | Read relevant file | Need current state to fix |
| Resuming after gap | Read all planning files | Recover state |

## The 5-Question Reboot Test

If you can answer these, your context management is solid:

| Question | Answer Source |
|----------|---------------|
| Where am I? | Current phase in task_plan.md |
| Where am I going? | Remaining phases |
| What's the goal? | Goal statement in plan |
| What have I learned? | findings.md |
| What have I done? | progress.md |

## When to Use This Pattern

**Use for:**
- Multi-step tasks (3+ steps)
- Research tasks
- Building/creating projects
- Tasks spanning many tool calls
- Anything requiring organization

**Skip for:**
- Simple questions
- Single-file edits
- Quick lookups

## Templates

Copy these templates to start:

- [templates/task_plan.md](templates/task_plan.md) — Phase tracking
- [templates/findings.md](templates/findings.md) — Research storage
- [templates/progress.md](templates/progress.md) — Session logging

## Scripts

Helper scripts for automation:

- `scripts/init-session.sh` — Initialize all planning files
- `scripts/check-complete.sh` — Verify all phases complete
- `scripts/session-catchup.py` — Recover context from previous session (v2.2.0)

## Advanced Topics

- **Manus Principles:** See [reference.md](reference.md)
- **Real Examples:** See [examples.md](examples.md)

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| Use TodoWrite for persistence | Create task_plan.md file |
| State goals once and forget | Re-read plan before decisions |
| Hide errors and retry silently | Log errors to plan file |
| Stuff everything in context | Store large content in files |
| Start executing immediately | Create plan file FIRST |
| Repeat failed actions | Track attempts, mutate approach |
| Create files in project root | Use `docs/plans/<plan-name>/` |
| Forget to set .active-plan | Always update marker when switching plans |

#!/bin/bash
# planning-with-files: Check if all phases are complete before stopping
# Cursor Hook: stop
#
# Reads active plan from docs/plans/.active-plan marker file
# Verifies all phases in that plan's task_plan.md are marked complete.
# Returns "deny" if incomplete phases remain.

PLANS_DIR="docs/plans"
MARKER_FILE="$PLANS_DIR/.active-plan"

# Read JSON input from stdin
read -r input 2>/dev/null || true

# If no marker file, allow stop (no planning session active)
if [ ! -f "$MARKER_FILE" ]; then
    printf '{"decision": "allow"}\n'
    exit 0
fi

# Read the active plan name
PLAN_NAME=$(cat "$MARKER_FILE" 2>/dev/null | tr -d '[:space:]')
if [ -z "$PLAN_NAME" ]; then
    printf '{"decision": "allow"}\n'
    exit 0
fi

PLAN_FILE="$PLANS_DIR/$PLAN_NAME/task_plan.md"

# If plan file doesn't exist, allow stop
if [ ! -f "$PLAN_FILE" ]; then
    printf '{"decision": "allow", "message": "[planning-with-files] Active plan %s has no task_plan.md."}\n' "$PLAN_NAME"
    exit 0
fi

# Count phases by status
TOTAL=$(grep -c "### Phase" "$PLAN_FILE" 2>/dev/null || echo "0")
COMPLETE=$(grep -cF "**Status:** complete" "$PLAN_FILE" 2>/dev/null || echo "0")
IN_PROGRESS=$(grep -cF "**Status:** in_progress" "$PLAN_FILE" 2>/dev/null || echo "0")
PENDING=$(grep -cF "**Status:** pending" "$PLAN_FILE" 2>/dev/null || echo "0")

# Default to 0 if empty
: "${TOTAL:=0}"
: "${COMPLETE:=0}"
: "${IN_PROGRESS:=0}"
: "${PENDING:=0}"

# Check completion
if [ "$COMPLETE" -eq "$TOTAL" ] && [ "$TOTAL" -gt 0 ]; then
    MESSAGE="[planning-with-files] Plan '$PLAN_NAME': All $TOTAL phases complete. Good to stop."
    printf '{"decision": "allow", "message": "%s"}\n' "$MESSAGE"
else
    # Build status message
    MESSAGE="[planning-with-files] Plan '$PLAN_NAME' not complete! Status: $COMPLETE/$TOTAL phases done"
    if [ "$IN_PROGRESS" -gt 0 ]; then
        MESSAGE="$MESSAGE, $IN_PROGRESS in progress"
    fi
    if [ "$PENDING" -gt 0 ]; then
        MESSAGE="$MESSAGE, $PENDING pending"
    fi
    MESSAGE="$MESSAGE. Complete all phases before stopping."

    printf '{"decision": "deny", "message": "%s"}\n' "$MESSAGE"
fi

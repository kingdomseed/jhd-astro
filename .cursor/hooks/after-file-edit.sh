#!/bin/bash
# planning-with-files: Remind to update task_plan.md after file edits
# Cursor Hook: afterFileEdit
#
# Outputs a reminder message after any file edit.
# Skips reminder if the edited file is a planning file.

PLANS_DIR="docs/plans"
MARKER_FILE="$PLANS_DIR/.active-plan"

# Read JSON input from stdin
read -r input 2>/dev/null || true

# Try to extract the file path from the JSON input
FILE_PATH=""
if command -v jq &> /dev/null; then
    FILE_PATH=$(echo "$input" | jq -r '.filePath // .file // .path // empty' 2>/dev/null)
fi

# Skip reminder if editing planning files
case "$FILE_PATH" in
    *task_plan.md|*findings.md|*progress.md|*.active-plan)
        printf '{"decision": "allow"}\n'
        exit 0
        ;;
esac

# Check if there's an active plan
if [ -f "$MARKER_FILE" ]; then
    PLAN_NAME=$(cat "$MARKER_FILE" 2>/dev/null | tr -d '[:space:]')
    if [ -n "$PLAN_NAME" ]; then
        MESSAGE="[planning-with-files] File updated. If this completes a phase, update docs/plans/$PLAN_NAME/task_plan.md status."
        printf '{"decision": "allow", "message": "%s"}\n' "$MESSAGE"
        exit 0
    fi
fi

printf '{"decision": "allow"}\n'

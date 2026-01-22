#!/bin/bash
# planning-with-files: Show task plan context before operations
# Cursor Hook: beforeShellExecution
#
# Reads the active plan from docs/plans/.active-plan marker file
# and displays the first 30 lines of that plan's task_plan.md

PLANS_DIR="docs/plans"
MARKER_FILE="$PLANS_DIR/.active-plan"

# Read JSON input from stdin (Cursor provides context this way)
read -r input 2>/dev/null || true

# Check if marker file exists
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

# Build the message
if [ -f "$PLAN_FILE" ]; then
    # Get first 30 lines of task_plan.md
    PLAN_CONTENT=$(head -30 "$PLAN_FILE" 2>/dev/null)

    if [ -n "$PLAN_CONTENT" ]; then
        # Escape the content for JSON (handle newlines, quotes, backslashes)
        # Use awk for portable newline handling (works on both macOS and Linux)
        ESCAPED_CONTENT=$(echo "$PLAN_CONTENT" | \
            sed 's/\\/\\\\/g' | \
            sed 's/"/\\"/g' | \
            awk 'BEGIN {ORS="\\n"} {print}')

        MESSAGE="[planning-with-files] Active plan: $PLAN_NAME\\n$ESCAPED_CONTENT"
        printf '{"decision": "allow", "message": "%s"}\n' "$MESSAGE"
    else
        printf '{"decision": "allow", "message": "[planning-with-files] Plan %s exists but task_plan.md is empty."}\n' "$PLAN_NAME"
    fi
else
    printf '{"decision": "allow", "message": "[planning-with-files] Active plan set to %s but task_plan.md not found."}\n' "$PLAN_NAME"
fi

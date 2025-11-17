# TASK-006: Implement countdown timer (20 minutes)

**Priority:** High  
**Status:** Pending  
**Category:** Frontend  
**Estimated Hours:** 2

## Description
Create a countdown timer that starts at 20 minutes and prevents quiz submission after time expires.

## Acceptance Criteria
- [ ] Timer counts down from 20 minutes
- [ ] Timer displays remaining time clearly
- [ ] Submission is prevented after time expires
- [ ] User is notified when time is up

## Details
This task involves implementing the quiz timer:
1. Create timer component that displays MM:SS format
2. Start timer when quiz begins
3. Update timer display every second
4. Prevent form submission after time expires
5. Show warning when time is running low (e.g., last 5 minutes)
6. Display "Time's up!" message when timer reaches 0
7. Optionally auto-submit quiz when time expires

## Dependencies
- TASK-001: Set up project structure and dependencies
- TASK-005: Build quiz page UI with question display

## Related Tasks
- TASK-010: Implement quiz submission functionality
- TASK-015: Testing and QA

# TASK-010: Implement quiz submission functionality

**Priority:** High  
**Status:** Pending  
**Category:** Frontend  
**Estimated Hours:** 3

## Description
Create submit button and logic to send quiz data (user info, answers, score) to backend/Google Sheets.

## Acceptance Criteria
- [ ] Submit button is functional
- [ ] Quiz data is collected correctly
- [ ] Data is sent to backend
- [ ] User receives confirmation

## Details
This task involves implementing the quiz submission process:
1. Create submit button on quiz page
2. Collect all user information (name, phone, agent name)
3. Collect all quiz answers (30 questions)
4. Calculate total score using scoring logic
5. Format data for transmission to backend
6. Send POST request to backend API endpoint
7. Handle success/error responses
8. Display confirmation message to user
9. Prevent duplicate submissions

## Dependencies
- TASK-001: Set up project structure and dependencies
- TASK-005: Build quiz page UI with question display
- TASK-007: Implement score calculation logic
- TASK-008: Set up Google Sheets integration

## Related Tasks
- TASK-011: Create results page with score summary
- TASK-012: Implement data persistence to Google Sheets

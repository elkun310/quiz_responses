# TASK-003: Create quiz question database

**Priority:** High  
**Status:** Pending  
**Category:** Backend  
**Estimated Hours:** 3

## Description
Set up master question set with 51 MCQs and 9 essay questions. Each question should have an ID, text, type, and score value.

## Acceptance Criteria
- [ ] 51 MCQs are defined with correct answers
- [ ] 9 essay questions are defined
- [ ] Each question has score value assigned
- [ ] Questions are stored in accessible format

## Details
This task involves creating the question database that will be used for the quiz:
1. Define 51 multiple-choice questions with 4 options each and correct answer
2. Define 9 essay questions
3. Assign scoring: MCQs = 1 point, Essays = 5 points
4. Store in JSON or database format for easy access
5. Ensure questions are properly indexed and retrievable

## Dependencies
- TASK-001: Set up project structure and dependencies

## Related Tasks
- TASK-004: Implement question randomization logic
- TASK-007: Implement score calculation logic

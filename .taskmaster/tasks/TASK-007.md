# TASK-007: Implement score calculation logic

**Priority:** High  
**Status:** Pending  
**Category:** Backend  
**Estimated Hours:** 2

## Description
Create logic to calculate total score based on user answers. MCQs = 1 point each, Essay questions = 5 points each.

## Acceptance Criteria
- [ ] MCQ answers are scored at 1 point each
- [ ] Essay answers are scored at 5 points each
- [ ] Total score is calculated correctly
- [ ] Maximum score is 38 points

## Details
This task involves implementing the scoring system:
1. Create scoring function that evaluates MCQ answers against correct answers
2. Award 1 point for each correct MCQ
3. Award 5 points for each correct essay answer (or implement essay grading logic)
4. Calculate total score (max 38 points: 28 MCQs × 1 + 2 Essays × 5)
5. Handle edge cases (unanswered questions, invalid answers)
6. Return score breakdown if needed

## Dependencies
- TASK-001: Set up project structure and dependencies
- TASK-003: Create quiz question database

## Related Tasks
- TASK-011: Create results page with score summary
- TASK-012: Implement data persistence to Google Sheets

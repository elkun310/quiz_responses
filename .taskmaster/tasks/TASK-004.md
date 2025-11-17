# TASK-004: Implement question randomization logic

**Priority:** High  
**Status:** Pending  
**Category:** Frontend  
**Estimated Hours:** 3

## Description
Create logic to randomly select 28 MCQs and always include 2 essay questions at the end for each user.

## Acceptance Criteria
- [ ] 28 MCQs are randomly selected per user
- [ ] 2 essay questions are always at the end
- [ ] Total of 30 questions per quiz
- [ ] Randomization is truly random

## Details
This task involves implementing the core randomization logic:
1. Create a function to randomly select 28 MCQs from the 51 available
2. Always append 2 essay questions at the end
3. Ensure no duplicate questions are selected
4. Maintain question order (MCQs first, essays last)
5. Test randomization for fairness and distribution

## Dependencies
- TASK-001: Set up project structure and dependencies
- TASK-003: Create quiz question database

## Related Tasks
- TASK-005: Build quiz page UI with question display
- TASK-015: Testing and QA

# Testing and QA Guide - TASK-015

Comprehensive testing guide for the Random Quiz Questions Web App.

## Test Execution Checklist

### 1. Functional Testing

#### Landing Page
- [ ] Page loads without errors
- [ ] Form displays all three fields (Name, Phone, Agent Name)
- [ ] Form validation works:
  - [ ] Name field requires at least 2 characters
  - [ ] Phone field validates phone format
  - [ ] Agent Name field requires at least 2 characters
- [ ] Error messages display for invalid inputs
- [ ] Start Quiz button is enabled only when form is valid
- [ ] Clicking Start Quiz transitions to quiz page

#### Quiz Page
- [ ] Quiz page loads after form submission
- [ ] Timer starts at 20:00 and counts down
- [ ] All 30 questions load (28 MCQs + 2 essays)
- [ ] Questions are randomized (different on each attempt)
- [ ] Question counter displays correctly (e.g., "Question 1 of 30")
- [ ] MCQ options are selectable via radio buttons
- [ ] Essay questions have text input fields
- [ ] Previous button is disabled on first question
- [ ] Next button works to navigate forward
- [ ] Previous button works to navigate backward
- [ ] Answers are saved when navigating between questions
- [ ] Last question shows "Submit Quiz" button instead of "Next"

#### Timer Functionality
- [ ] Timer counts down accurately
- [ ] Timer displays in MM:SS format
- [ ] Timer turns orange when < 10 minutes remain
- [ ] Timer turns red when < 5 minutes remain
- [ ] Quiz auto-submits when timer reaches 00:00
- [ ] Submission is prevented after time expires

#### Results Page
- [ ] Results page displays after submission
- [ ] Total score is displayed prominently
- [ ] Score is out of 38 points
- [ ] Performance message displays based on score:
  - [ ] >= 80%: "Excellent! You did great!"
  - [ ] >= 60%: "Good job! Keep practicing!"
  - [ ] >= 40%: "Nice try! Review the material and try again."
  - [ ] < 40%: "Keep learning! You'll do better next time."
- [ ] Retake Quiz button is functional
- [ ] Clicking Retake Quiz returns to landing page

### 2. Score Calculation Testing

#### MCQ Scoring
- [ ] Correct MCQ answer = 1 point
- [ ] Incorrect MCQ answer = 0 points
- [ ] Unanswered MCQ = 0 points

#### Essay Scoring
- [ ] Answered essay = 5 points
- [ ] Unanswered essay = 0 points

#### Total Score Calculation
- [ ] Test with all correct answers: Should be 38 points
- [ ] Test with all incorrect answers: Should be 0 points
- [ ] Test with mixed answers: Score should be accurate
- [ ] Test with unanswered questions: Score should be accurate

### 3. Data Persistence Testing

#### Google Sheets Integration
- [ ] Quiz data is sent to backend after submission
- [ ] Data appears in Google Sheet within 30 seconds
- [ ] All required columns are populated:
  - [ ] Timestamp
  - [ ] Name
  - [ ] Phone
  - [ ] Agent Name
  - [ ] Q1-Q30 Answers
  - [ ] Total Score

#### Data Accuracy
- [ ] User information is saved correctly
- [ ] All 30 answers are saved
- [ ] Score is calculated and saved correctly
- [ ] Timestamp is accurate

### 4. Security Testing

#### Answer Hiding
- [ ] Correct answers are not visible in results page
- [ ] Individual user answers are not displayed
- [ ] Only total score is shown
- [ ] Correct answers are not in HTML source
- [ ] Correct answers are not in browser console
- [ ] Correct answers are not in network requests

#### Data Validation
- [ ] Invalid form data is rejected
- [ ] Empty answers are handled correctly
- [ ] Special characters in answers are handled
- [ ] Very long answers are handled

### 5. Responsiveness Testing

#### Mobile (< 480px)
- [ ] All content fits without horizontal scrolling
- [ ] Form fields are touch-friendly (min 44px)
- [ ] Buttons are easily tappable
- [ ] Text is readable without zooming
- [ ] Quiz interface is usable
- [ ] Timer is visible
- [ ] Navigation buttons work

#### Tablet (480px - 768px)
- [ ] Layout adjusts appropriately
- [ ] Form fields are properly sized
- [ ] Quiz interface is usable
- [ ] All elements are accessible

#### Desktop (> 768px)
- [ ] Full layout is displayed
- [ ] All elements are properly aligned
- [ ] No excessive whitespace
- [ ] Interface is professional

### 6. Browser Compatibility Testing

#### Chrome
- [ ] Landing page displays correctly
- [ ] Quiz page works
- [ ] Timer functions properly
- [ ] Results page displays correctly
- [ ] Data is submitted to backend

#### Firefox
- [ ] Landing page displays correctly
- [ ] Quiz page works
- [ ] Timer functions properly
- [ ] Results page displays correctly
- [ ] Data is submitted to backend

#### Safari
- [ ] Landing page displays correctly
- [ ] Quiz page works
- [ ] Timer functions properly
- [ ] Results page displays correctly
- [ ] Data is submitted to backend

#### Edge
- [ ] Landing page displays correctly
- [ ] Quiz page works
- [ ] Timer functions properly
- [ ] Results page displays correctly
- [ ] Data is submitted to backend

### 7. Edge Cases Testing

#### Form Validation
- [ ] Test with spaces only in name field
- [ ] Test with very long name (> 100 characters)
- [ ] Test with special characters in name
- [ ] Test with invalid phone format
- [ ] Test with very long phone number
- [ ] Test with non-numeric phone characters

#### Quiz Behavior
- [ ] Test rapid clicking of Next button
- [ ] Test rapid clicking of Previous button
- [ ] Test leaving quiz page and returning
- [ ] Test with browser back button
- [ ] Test with browser refresh during quiz
- [ ] Test with multiple quiz attempts

#### Timer Edge Cases
- [ ] Test at 00:01 (1 second remaining)
- [ ] Test at 00:00 (time expired)
- [ ] Test rapid timer updates

### 8. Performance Testing

#### Load Time
- [ ] Landing page loads in < 2 seconds
- [ ] Quiz page loads in < 2 seconds
- [ ] Results page loads in < 1 second

#### Responsiveness
- [ ] Form submission is immediate
- [ ] Quiz navigation is smooth
- [ ] Timer updates smoothly (no jank)
- [ ] No lag when typing in essay fields

#### Memory Usage
- [ ] App doesn't consume excessive memory
- [ ] No memory leaks on repeated quiz attempts
- [ ] Browser doesn't slow down over time

### 9. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key navigates through form fields
- [ ] Tab key navigates through quiz options
- [ ] Enter key submits form
- [ ] Space key selects radio buttons
- [ ] All buttons are keyboard accessible

#### Screen Reader Testing
- [ ] Form labels are announced
- [ ] Question text is announced
- [ ] Options are announced
- [ ] Timer is announced
- [ ] Error messages are announced

#### Color Contrast
- [ ] Text has sufficient contrast with background
- [ ] Timer colors are distinguishable
- [ ] Error messages are visible

### 10. Integration Testing

#### End-to-End Flow
- [ ] User can complete full quiz workflow:
  1. [ ] Fill landing form
  2. [ ] Answer all 30 questions
  3. [ ] Submit quiz
  4. [ ] View results
  5. [ ] Data appears in Google Sheet

#### Multiple Users
- [ ] Multiple users can take quiz simultaneously
- [ ] Each user gets different randomized questions
- [ ] Each user's data is saved separately

## Test Data

### Test User 1
- Name: John Smith
- Phone: 555-123-4567
- Agent: Agent Smith

### Test User 2
- Name: Jane Doe
- Phone: (555) 987-6543
- Agent: Agent Doe

### Test User 3
- Name: Bob Johnson
- Phone: +1 555 555 5555
- Agent: Agent Johnson

## Defect Reporting Template

**Title**: [Brief description]
**Severity**: Critical / High / Medium / Low
**Steps to Reproduce**:
1. 
2. 
3. 

**Expected Result**: 
**Actual Result**: 
**Environment**: Browser, OS, Device
**Screenshots**: [If applicable]

## Sign-Off Checklist

- [ ] All functional tests passed
- [ ] All score calculations verified
- [ ] Data persistence confirmed
- [ ] Security measures verified
- [ ] Responsive design tested
- [ ] Browser compatibility confirmed
- [ ] Edge cases handled
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Integration tests passed
- [ ] No critical defects
- [ ] No high-priority defects
- [ ] Documentation complete

## Test Results Summary

| Category | Status | Notes |
|----------|--------|-------|
| Functional | ☐ Pass | |
| Scoring | ☐ Pass | |
| Data Persistence | ☐ Pass | |
| Security | ☐ Pass | |
| Responsiveness | ☐ Pass | |
| Browser Compatibility | ☐ Pass | |
| Edge Cases | ☐ Pass | |
| Performance | ☐ Pass | |
| Accessibility | ☐ Pass | |
| Integration | ☐ Pass | |

## Notes

- All tests should be performed in a clean browser session
- Clear browser cache before testing
- Test on actual devices when possible
- Document any issues found
- Verify fixes before marking as complete

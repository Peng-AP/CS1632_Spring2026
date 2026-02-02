# CS 1632 Software Quality Assurance
# Exercise 1

**Name:** Aaron Peng

---

## 1. Introduction

### a. One Base Case

**IDENTIFIER:** TEST-NORMAL-WEIGHT

This is a base case because it tests the most common, expected usage scenario of the application. A user enters a valid cat name ("Fluffy") and a weight value (10) that falls squarely in the middle of the "normal weight" range (5-25). This represents typical, non-boundary input that exercises the main functionality without testing any edge conditions.

### b. One Edge Case

**IDENTIFIER:** TEST-WEIGHT-BOUNDARY-5

This is an edge case because it tests the boundary between the "underweight" and "normal weight" categories. The weight value of 5 is the exact lower boundary of the normal weight range. According to the requirements, weight 4 or less is underweight, while 5-25 is normal weight. Testing this boundary value ensures the application correctly handles the transition point between equivalence classes.

### c. One Corner Case

**IDENTIFIER:** TEST-NAME-MAX-LENGTH

This is a corner case because it tests two boundary conditions simultaneously: (1) the maximum allowed name length of exactly 10 characters, and (2) a weight at the upper boundary of normal (25). Corner cases test multiple edge conditions at once, making them valuable for uncovering defects that only manifest when multiple boundary conditions coincide.

---

## 2. Traceability Matrix

| Test Case | FUN-PROMPT-NAME | FUN-PROMPT-WEIGHT | FUN-DISPLAY-VERDICT | FUN-INVALID-NAME | FUN-INVALID-WEIGHT |
|-----------|:---------------:|:-----------------:|:-------------------:|:----------------:|:------------------:|
| TEST-NORMAL-WEIGHT | X | X | X | | |
| TEST-UNDERWEIGHT | X | X | X | | |
| TEST-OVERWEIGHT | X | X | X | | |
| TEST-WEIGHT-BOUNDARY-4 | X | X | X | | |
| TEST-WEIGHT-BOUNDARY-5 | X | X | X | | |
| TEST-WEIGHT-BOUNDARY-25 | X | X | X | | |
| TEST-WEIGHT-BOUNDARY-26 | X | X | X | | |
| TEST-NAME-MAX-LENGTH | X | X | X | | |
| TEST-NAME-TOO-LONG | X | | | X | |
| TEST-NAME-WITH-NUMBERS | X | | | X | |
| TEST-INVALID-WEIGHT-STRING | X | X | | | X |

---

## 3. Test Cases

---

**IDENTIFIER:** TEST-NORMAL-WEIGHT
**TEST CASE:** Test that a cat with a normal weight (middle of range) displays "normal weight" verdict
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Fluffy" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "10" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Fluffy is normal weight."
- The system shuts down.

---

**IDENTIFIER:** TEST-UNDERWEIGHT
**TEST CASE:** Test that a cat with weight 3 (below 4) displays "underweight" verdict
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "3" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Tom is underweight."
- The system shuts down.

---

**IDENTIFIER:** TEST-OVERWEIGHT
**TEST CASE:** Test that a cat with weight 30 (above 25) displays "overweight" verdict
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Garfield" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "30" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Garfield is overweight."
- The system shuts down.

---

**IDENTIFIER:** TEST-WEIGHT-BOUNDARY-4
**TEST CASE:** Test that weight of exactly 4 displays "underweight" verdict (upper boundary of underweight)
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "4" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Tom is underweight."
- The system shuts down.

---

**IDENTIFIER:** TEST-WEIGHT-BOUNDARY-5
**TEST CASE:** Test that weight of exactly 5 displays "normal weight" verdict (lower boundary of normal)
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "5" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Tom is normal weight."
- The system shuts down.

---

**IDENTIFIER:** TEST-WEIGHT-BOUNDARY-25
**TEST CASE:** Test that weight of exactly 25 displays "normal weight" verdict (upper boundary of normal)
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "25" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Tom is normal weight."
- The system shuts down.

---

**IDENTIFIER:** TEST-WEIGHT-BOUNDARY-26
**TEST CASE:** Test that weight of exactly 26 displays "overweight" verdict (lower boundary of overweight)
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "26" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Tom is overweight."
- The system shuts down.

---

**IDENTIFIER:** TEST-NAME-MAX-LENGTH
**TEST CASE:** Test that a name with exactly 10 alphabetic characters is accepted (corner case)
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Abcdefghij" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "25" and press Enter.

**POSTCONDITIONS:**
- The system displays: "Abcdefghij is normal weight."
- The system shuts down.

---

**IDENTIFIER:** TEST-NAME-TOO-LONG
**TEST CASE:** Test that a name with 11 characters is rejected as too long
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Abcdefghijk" and press Enter.

**POSTCONDITIONS:**
- The system displays a message asking the user to try again with a shorter name.
- The system shuts down without prompting for weight.

---

**IDENTIFIER:** TEST-NAME-WITH-NUMBERS
**TEST CASE:** Test that a name containing non-alphabetic characters (numbers) is rejected
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Cat123" and press Enter.

**POSTCONDITIONS:**
- The system displays a message asking the user to try again with a shorter name.
- The system shuts down without prompting for weight.

---

**IDENTIFIER:** TEST-INVALID-WEIGHT-STRING
**TEST CASE:** Test that a non-integer weight value is rejected with a user-friendly message
**PRECONDITIONS:**
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

**EXECUTION STEPS:**
1. Run the command: `java -jar CatScale.jar`
2. When prompted "Enter the name of your cat:", type "Tom" and press Enter.
3. When prompted "Enter the weight of your cat in pounds (lb):", type "abc" and press Enter.

**POSTCONDITIONS:**
- The system displays a message asking the user to try again with a valid weight.
- The system shuts down gracefully (no crash or exception).

---

## 4. Link to GitHub Issues

[Paste your GitHub classroom repository issues URL here]

Example: `https://github.com/wonsunahn/cs1632-exercise1-yourusername/issues?q=is%3Aissue+is%3Aclosed`

---

## Defect Reports for GitHub Issues

Below are three defects to report. Copy each into a GitHub issue.

---

### DEFECT 1

**Title:** 10-character cat name incorrectly rejected as too long

**Body:**
```
IDENTIFIER: BUG-NAME-LENGTH-BOUNDARY

SUMMARY: A cat name with exactly 10 characters is incorrectly rejected as too long.

DESCRIPTION: According to requirement FUN-INVALID-NAME, names of length "less or equal to 10"
consisting of alphabets should be accepted. However, when entering a 10-character name
(e.g., "Abcdefghij"), the system incorrectly rejects it with the message "Your cat's name is
too long." This is an off-by-one error at the boundary.

REPRODUCTION STEPS:
Preconditions:
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

Steps:
1. Run the command: java -jar CatScale.jar
2. When prompted for cat name, enter: Abcdefghij
3. Press Enter.

EXPECTED BEHAVIOR: The system should accept the 10-character name and prompt for the cat's weight.

OBSERVED BEHAVIOR: The system displays "Your cat's name is too long. Rename your cat and try again."
and shuts down without prompting for weight.
```

---

### DEFECT 2

**Title:** Cat name containing numbers is incorrectly accepted

**Body:**
```
IDENTIFIER: BUG-NAME-NUMERIC-CHARACTERS

SUMMARY: A cat name containing numeric characters is incorrectly accepted as valid.

DESCRIPTION: According to requirement FUN-INVALID-NAME, the system should reject names that do not
"consist of lower-case or upper-case alphabets." However, when entering a name containing numbers
(e.g., "Cat123"), the system incorrectly accepts it and proceeds to prompt for weight.

REPRODUCTION STEPS:
Preconditions:
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

Steps:
1. Run the command: java -jar CatScale.jar
2. When prompted for cat name, enter: Cat123
3. Press Enter.
4. When prompted for weight, enter: 10
5. Press Enter.

EXPECTED BEHAVIOR: The system should reject the name "Cat123" because it contains non-alphabetic
characters (numbers) and display a message asking the user to try again.

OBSERVED BEHAVIOR: The system accepts "Cat123" as a valid name, prompts for weight, and displays
"Cat123 is normal weight."
```

---

### DEFECT 3

**Title:** Invalid weight input causes application crash instead of user-friendly error

**Body:**
```
IDENTIFIER: BUG-WEIGHT-CRASH

SUMMARY: Entering a non-integer weight causes the application to crash with an exception.

DESCRIPTION: According to requirement FUN-INVALID-WEIGHT, when a non-integer weight is provided,
"the system shall ask the user to try again with a valid weight and shut down." However, when
entering a non-integer value (e.g., "abc" or "10.5"), the system crashes with a
java.util.InputMismatchException instead of displaying a user-friendly error message.

REPRODUCTION STEPS:
Preconditions:
- "java -version" shows java version "11.0.21" or compatible.
- CatScale.jar file is in the current directory.

Steps:
1. Run the command: java -jar CatScale.jar
2. When prompted for cat name, enter: Tom
3. Press Enter.
4. When prompted for weight, enter: abc
5. Press Enter.

EXPECTED BEHAVIOR: The system should display a message asking the user to try again with a valid
weight and shut down gracefully.

OBSERVED BEHAVIOR: The system crashes with the following exception:
Exception in thread "main" java.util.InputMismatchException
    at java.base/java.util.Scanner.throwFor(Scanner.java:947)
    at java.base/java.util.Scanner.next(Scanner.java:1602)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2267)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2221)
    at edu.pitt.cs.CatScale.main(CatScale.java:49)
```

---

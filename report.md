# Software Quality Assessment Report

## Project: Number to Roman Numerals Converter
### Author: Javier Alfranca Supervia

### Date: February 25, 2025

## 1. Functionality
**Definition**: The degree to which the software performs the required functions.

- The software correctly converts numbers between 1 and 9999 into Roman numerals.
- It includes input validation to ensure the number is within the specified range.
- The user interface provides buttons to convert the number and clear the input field.
- The application outputs the Roman numeral in a visually distinct format.
- Functionality is straightforward and meets the basic requirements for a number-to-Roman numeral converter.

**Assessment**:
- **Strengths**: The conversion logic is accurate and performs well. The user interface is intuitive and easy to use.
- **Weaknesses**: Limited to numbers between 1 and 9999; could be expanded for larger numbers or other numeral systems.

## 2. Reliability
**Definition**: The ability of the software to perform its required functions under stated conditions for a specified period of time.

- The conversion function handles valid input correctly and provides appropriate feedback for invalid input.
- The clear button reliably resets the input field and output display.
- The software does not exhibit any crashes or errors during normal operation.

**Assessment**:
- **Strengths**: Robust handling of input validation ensures that the software does not fail unexpectedly.
- **Weaknesses**: No extensive error handling for edge cases or unexpected input beyond the specified range.

## 3. Usability
**Definition**: The degree to which the software can be used easily and effectively by the intended users.

- The user interface is clean and minimalistic, making it easy to understand and use.
- Buttons are clearly labeled and have hover effects to enhance user experience.
- The result is displayed prominently, and the Roman numeral format is visually distinct.

**Assessment**:
- **Strengths**: User-friendly design with responsive buttons and clear input validation messages.
- **Weaknesses**: Could benefit from additional user guidance or tooltips for first-time users.

## 4. Maintainability
**Definition**: The ease with which the software can be modified to correct faults, improve performance, or adapt to a changed environment.

- The code is separated into HTML, CSS, and JavaScript, following best practices for web development.
- The JavaScript functions are well-defined and focused on specific tasks.
- CSS is organized and uses class selectors for styling, making it easy to update or modify styles.

**Assessment**:
- **Strengths**: Code separation and clear function definitions enhance readability and maintainability.
- **Weaknesses**: Lack of comments or documentation within the code to explain logic or design choices. Could benefit from more modular code structure for scalability.

## 5. Design Description
**Design Elements**: This section provides an overview of the design elements used in the application, including color distribution, background, and layout.

- **Background**: The background color is set to a light gray (`#f4f4f4`), which provides a clean and neutral backdrop for the content. Additionally, a background image is used with an opacity of 0.3 to create a subtle visual effect without distracting from the main content.
- **Colors**: 
  - Primary button color: Blue (`#007BFF`) with a hover effect to a darker blue (`#0056b3`).
  - Clear button color: Red (`#FF6F61`) with a hover effect to a darker red (`#FF3B30`).
  - Container background: Light blue (`rgba(225, 237, 239, 0.9)`) with a slight transparency to blend with the background image.
  - Footer text color: Medium gray (`#555`).
- **Layout**: The layout is centered both vertically and horizontally, ensuring that the content is the focal point. The container has padding, a box shadow, and rounded corners to create a card-like appearance that stands out against the background.
- **Typography**: 
  - The primary font is Arial, sans-serif for general readability.
  - Roman numeral output uses 'Times New Roman', Times, serif for a classic look.

## Conclusion
The Number to Roman Numerals Converter is a functional and reliable tool with a user-friendly interface. It meets the basic requirements and performs well within its specified range. Improvements can be made in the areas of input range expansion, error handling, user guidance, and code documentation to further enhance the software's quality. The design elements contribute to a visually appealing and intuitive user experience.
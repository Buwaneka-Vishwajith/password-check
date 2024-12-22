# Password Strength Meter with Floating Bubbles

This is a visually engaging Password Strength Meter implemented using React. The application dynamically updates the password strength and displays floating bubbles with colors corresponding to the password's strength level.

## Features

- **Password Strength Meter**: Checks for the following criteria:
  - At least 8 characters
  - Contains at least one number
  - Contains at least one special character
- **Dynamic Feedback**:
  - Progress bar changes color and length based on password strength.
  - Labels updated with appropriate colors to indicate which criteria are met.
- **Floating Bubbles**:
  - Decorative animated bubbles with colors indicating password strength (red, yellow, green).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/password-strength-meter-bubbles.git
   ```
2. Navigate to the project directory:
   ```bash
   cd password-strength-meter-bubbles
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## File Structure

```plaintext
src/
|-- assets/
|   |-- green.png
|   |-- red.png
|   |-- yellow.png
|-- components/
|   |-- Form.js  # Password strength meter component
|-- App.js
|-- index.js
```

## Code Overview

- **Password Strength Evaluation**:
  - The password's strength is determined by checking its length, presence of numbers, and special characters.
- **Dynamic Bubbles**:
  - Bubbles are randomly generated and animated with different sizes, colors, and durations based on password strength.
- **Styles**:
  - CSS animations are used to float the bubbles upwards, giving a dynamic and interactive experience.

## Customization

1. **Assets**: Replace the `green.png`, `red.png`, and `yellow.png` with your own images for bubbles.
2. **Styles**: Update colors and animations in the `@keyframes floatUp` and other class definitions.

## Technologies Used

- React
- JavaScript
- CSS for animations

## Contribution

Feel free to fork the repository, open issues, or submit pull requests.

---

Happy coding! 🎉

# Cursor Tailer Animation

A JavaScript library that adds a stylish trailing effect to the cursor on your webpage. The animation creates a dynamic and visually appealing cursor trail using a series of colored circles.

## Options

- **`numCircles`** (Number): Number of circles in the trail.
- **`colors`** (Array of Strings): Array of color codes to create a gradient effect. If only one color is provided, all circles will be that color.
- **`fadingTime`** (Number): Time in milliseconds for the circles to fade out after the cursor stops moving.
- **`movementFactor`** (Number): Determines how much the circles move towards the cursor. A higher value makes the circles follow the cursor more closely.
- **`cursorOffset`** (Object): Offset from the cursor position in pixels. Example: `{ x: 20, y: 20 }`.
- **`circleHeight`** (String): Height of the circles. Example: `'20px'`.
- **`circleWidth`** (String): Width of the circles. Example: `'20px'`.
- **`circleBorderRadius`** (String): Border radius of the circles. Example: `'50%'` for round circles.
- **`speedThreshold`** (Number): Minimum cursor speed required for the circles to appear. Adjust this to control when the animation starts.

## Installation

Include the library in your HTML file by adding the following script tag:

```html
<script src="https://megalosvigneswaran.github.io/CursorTailerAnimation/CursorTailerAnimation.js"></script>
```

## Usage

### Default Initialization

To initialize the `CursorTailerAnimation` with default parameters, use the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursor Tailer Animation</title>
  <script src="https://megalosvigneswaran.github.io/CursorTailerAnimation/CursorTailerAnimation.js"></script>
</head>
<body>
  <script>
    // Initialize the CursorTailerAnimation with default parameters
    new CursorTailerAnimation();
  </script>
</body>
</html>
```

### Custom Initialization

You can customize the parameters by passing an options object to the `CursorTailerAnimation` constructor. Here are a few examples:

#### Example 2: Single Color

To create a trail with a single color (black), use the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursor Tailer Animation</title>
  <script src="https://megalosvigneswaran.github.io/CursorTailerAnimation/CursorTailerAnimation.js"></script>
</head>
<body>
  <script>
    // Initialize the CursorTailerAnimation with a single color (black)
    new CursorTailerAnimation({
      numCircles: 40, // Number of circles
      colors: ["#000000"], // Single color (black)
      fadingTime: 200, // Time (in ms) for the circles to fade out
      movementFactor: 0.15, // Movement factor for trailing effect
      cursorOffset: { x: 15, y: 15 }, // Offset from the cursor position
      circleHeight: '30px', // Height of the circles
      circleWidth: '30px', // Width of the circles
      circleBorderRadius: '50%', // Border radius of the circles
      speedThreshold: 0.05 // Cursor speed threshold for animating circles
    });
  </script>
</body>
</html>
```

#### Example 2: Two Colors

To create a trail with a gradient effect between two colors, use the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursor Tailer Animation</title>
  <script src="https://megalosvigneswaran.github.io/CursorTailerAnimation/CursorTailerAnimation.js"></script>
</head>
<body>
  <script>
    // Initialize the CursorTailerAnimation with two colors
    new CursorTailerAnimation({
      numCircles: 30, // Number of circles
      colors: ["#ff0000", "#0000ff"], // Gradient between red and blue
      fadingTime: 250, // Time (in ms) for the circles to fade out
      movementFactor: 0.2, // Movement factor for trailing effect
      cursorOffset: { x: 20, y: 20 }, // Offset from the cursor position
      circleHeight: '25px', // Height of the circles
      circleWidth: '25px', // Width of the circles
      circleBorderRadius: '50%', // Border radius of the circles
      speedThreshold: 0.1 // Cursor speed threshold for animating circles
    });
  </script>
</body>
</html>
```

#### Example 3: Multi-Color Gradient

To create a trail with a vibrant multi-color gradient effect, use the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursor Tailer Animation</title>
  <script src="https://megalosvigneswaran.github.io/CursorTailerAnimation/CursorTailerAnimation.js"></script>
</head>
<body>
  <script>
    // Initialize the CursorTailerAnimation with a vibrant multi-color gradient
    new CursorTailerAnimation({
      numCircles: 50, // Number of circles
      colors: [
        "#ff7e5f", "#feb47b", "#ff9a8b", "#f4c5c5", "#f7a4a4", 
        "#ff6f61", "#d9a7c7", "#ff9a9e", "#e2b0ff", "#d0e6f9", 
        "#7ee8fa", "#80ff72", "#2cd8d9", "#3a7bd5", "#00d2d3", 
        "#00aaff", "#00f9d2", "#4a00e0", "#8e2de2", "#d22d7f"
      ], // Vibrant multi-color gradient
      fadingTime: 300, // Time (in ms) for the circles to fade out
      movementFactor: 0.3, // Movement factor for trailing effect
      cursorOffset: { x: 30, y: 30 }, // Offset from the cursor position
      circleHeight: '20px', // Height of the circles
      circleWidth: '20px', // Width of the circles
      circleBorderRadius: '50%', // Border radius of the circles
      speedThreshold: 0.2 // Cursor speed threshold for animating circles
    });
  </script>
</body>
</html>
```

## Additional Information

### Customization

The `CursorTailerAnimation` library offers flexibility in customizing the cursor trail to fit your website's design and functionality needs. By adjusting the parameters, you can create various effects, from subtle single-color trails to vibrant multi-color gradients. Experiment with different settings to achieve the desired look and performance.

### Performance Considerations

- **Number of Circles**: Increasing the number of circles may impact performance, especially on lower-end devices. Adjust the `numCircles` parameter based on the desired visual effect and the performance capabilities of your target audience’s devices.
- **Fading Time**: A shorter `fadingTime` results in faster fading of the circles, which can create a more dynamic effect. However, be cautious of setting it too low, as it may cause abrupt transitions.
- **Movement Factor**: The `movementFactor` controls how closely the circles follow the cursor. Adjust this value to find the right balance between smooth trailing and performance.

### Compatibility

The library is compatible with modern web browsers. Ensure that your HTML document includes the necessary `meta` tags for responsive design and that the library script is correctly linked.

Feel free to contribute to the library or raise issues on the [GitHub repository](https://github.com/MegalosVigneswaran/CursorTailerAnimation). Happy coding!

---

This README provides a detailed overview of how to use the `CursorTailerAnimation` library, including examples with different color schemes, and additional context on customization and performance considerations.

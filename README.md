# OpenCV-Web-Canvas

A simple web-based project that demonstrates the integration of OpenCV.js (a JavaScript adaptation of OpenCV) with modern web technologies to apply real-time image processing effects on webcam input. The project allows users to apply grayscale, blur, and border effects, mix an image with the webcam feed, and capture snapshots dynamically through a user-friendly interface.

## Features

- **Webcam Integration**: Displays a live webcam feed at the center of the webpage.
- **Image Processing Effects**:
  - Convert the webcam input to grayscale.
  - Apply a blur effect to the webcam input.
  - Add a border effect to the webcam input.
  - Mix a static image with the live webcam feed.
- **Interactive Buttons**: Use buttons to switch between different effects.
- **Snapshot Feature**: Capture and download a snapshot of the live webcam feed with the applied effect.

## Technologies Used

- **OpenCV.js**: For real-time image processing.
- **HTML/CSS**: To create the web interface.
- **JavaScript**: For logic and interaction handling.

## Getting Started

### Prerequisites

- A modern web browser with webcam permissions enabled.

### Installation

1. Clone this repository:
   
2. Open the `index.html` file in your browser(Better through VS Code).

## How to Use

1. Open the project in a web browser.
2. Allow the webpage to access your webcam.
3. Use the buttons to apply effects:
   - **Original** : The original webcam feed
   - **Grayscale**: Converts the webcam feed to grayscale.
   - **Blur**: Applies a blur effect.
   - **Border**: Adds a border to the webcam feed.
   - **Mix Image**: Overlays a static image with the live feed.
5. Click the **Capture Snapshot** button to save the current frame as an image file.

## Project Structure

```
openCV-Web-Canvas/
├── index.html      # Main HTML file
├── style.css      # Styling for the webpage
├── main.js       # Main JavaScript file for logic
├── opencv.js       # OpenCV.js library
└── images & templates         # Directory for images and other assets
```


## Future Improvements

- Add more image processing effects.
- Include an option to upload custom images for mixing.
- Enhance UI/UX for better user interaction.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Contributions are welcome! Feel free to fork the repository and submit a pull request.


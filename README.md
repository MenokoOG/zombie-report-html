# Zombie Report & Tracker

Demo: https://menokoog.github.io/zombie-report-html/

Welcome to the **Zombie Report & Tracker** project! This is an interactive web application designed to teach the basics of HTML, CSS, and JavaScript, with a creative twist — reporting zombie sightings to the CDC!

## Project Overview

This project provides an engaging platform for learning web development fundamentals by allowing users to report zombie sightings and track outbreak metrics. The project also uses Chart.js to display dynamic data on zombie growth over time.

## Features

- **Zombie Reporting Form**: Users can report a zombie sighting by filling in the location and description of the zombie.
- **Zombie Metrics Dashboard**: Track the total number of zombies, infection rates, and outbreak levels.
- **Dynamic Zombie Growth Chart**: The zombie outbreak is displayed graphically using Chart.js.
- **LocalStorage Integration**: Save zombie reports locally in the browser and edit or delete reports as needed.
- **Random Data Generation**: Dynamically generates zombie growth, infection rates, and sighting locations.
  
## Technologies Used

- **HTML5**: Structuring the content of the web pages.
- **CSS3**: Styling the pages, including layout and design features.
- **JavaScript**: Adding interactivity and managing local storage.
- **Chart.js**: Visualizing zombie growth data in real-time.

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/MenokoOG/zombie-report-html.git

   


   ```
2. Navigate into the project directory:
   ```bash
   cd zombie-report-html

   rm -rf .git
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

## Usage

1. Open the `index.html` file in your browser to launch the application.
2. Use the form to report zombie sightings by filling in the location and a description of the zombie.
3. View the zombie outbreak metrics on the right side of the page.
4. See the "Zombie Growth Over Time" chart that displays the increase in zombies month by month.
5. Your reports will be saved and displayed below the form. You can also edit or delete the reports.

## Files

### `index.html`
The main structure of the Zombie Report & Tracker app, including the form for submitting reports and the metrics dashboard.

### `tracker.html`
A simple page that displays only the zombie outbreak metrics and the zombie growth chart.

### `script.js`
Handles the logic for the zombie report form, including saving, editing, and deleting reports using `localStorage`.

### `tracker.js`
Generates random zombie outbreak data and updates the metrics and chart using Chart.js.

### `style.css`
Contains all the CSS styles for the layout, design, and interactivity of the application. Includes a dark theme with vibrant colors for a zombie apocalypse feel.

## Dependencies

- **Chart.js**: A powerful and simple charting library used to create the zombie growth chart.
  ```bash
  npm install chart.js
  ```

## Contributing

Contributions are welcome! Feel free to fork this project, open an issue, or submit a pull request.

## Author

**Lawrence "Menoko OG - Original Geek" Jefferson**
Web and Software Developer

## License

This project is licensed under the ISC License.
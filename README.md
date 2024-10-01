# File Uploader using Multer

This project is a simple file uploader using Node.js, Express, and Multer. It allows users to upload files, with a focus on images, and stores them on the server. The frontend is built using HTML, CSS, and JavaScript with responsive and user-friendly features.

## Features

- Upload files via an HTML form.
- Uses Multer for handling file uploads in Node.js.
- Responsive UI with feedback on file selection and upload status.
- Separate `CSS` for styling and `JavaScript` for form handling.
- File validation and form submission feedback.

## Project Structure


## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/file-uploader.git
    ```

2. Navigate to the project directory:

    ```bash
    cd file-uploader
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Open a browser and go to:

    ```
    http://localhost:3000
    ```

## Usage

1. On the homepage, click the "Choose File" button to select a file.
2. Once a file is selected, its name will be displayed.
3. Click "Upload" to upload the file to the server.
4. After submission, a message will confirm whether the upload was successful.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for handling routes and requests.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **HTML/CSS/JavaScript**: Frontend technologies for building the user interface.
- **EJS**: Embedded JavaScript templates for rendering dynamic views.

## Setup for Development

- To modify the CSS, edit the `styles.css` file in the `public/css/` folder.
- To add or modify JavaScript behavior, update the `script.js` file in `public/js/`.
- The server logic is located in `app.js`, which sets up the file upload route and handles storage using Multer.

## .gitignore

Make sure the `node_modules` folder and any environment-specific files are not pushed to your Git repository by using the provided `.gitignore` file.


// script.js
const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
const uploadForm = document.getElementById('uploadForm');
const messageDiv = document.getElementById('message');

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = 'No file chosen';
    }
});

uploadForm.addEventListener('submit', function(event) {
    if (fileInput.files.length === 0) {
        event.preventDefault();
        messageDiv.textContent = "Please choose a file before uploading.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Uploading...";
        messageDiv.style.color = "green";
    }
});

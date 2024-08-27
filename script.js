// JavaScript for webcam functionality

// Selecting necessary elements
const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let stream; // Variable to store the stream object

// Function to start the camera
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

// Function to stop the camera
function stopCamera() {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
    }
}

// Event listeners for buttons
startButton.addEventListener('click', startCamera);
stopButton.addEventListener('click', stopCamera);

// JavaScript for form submission

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form data
    var formData = new FormData(this);

    // Create an object to store form data
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    // You can use formDataObj to perform further actions like sending data to a server or displaying a thank you message
    console.log(formDataObj);

    // Clear form fields after submission
    this.reset();
});

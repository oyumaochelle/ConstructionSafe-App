document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.getElementById('weather-info');
    const timeInfo = document.getElementById('time-info');

    //function that updates time
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        timeInfo.textContent = `Current Time: ${formattedTime}`;
    }

    // Update time immediately
    updateTime();

    // Set interval to update time every second
    setInterval(updateTime, 1000);
    const weatherApiKey = 'f86e4dfbadfb37e9c2121bbefa5ea026';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi,ke&appid=${weatherApiKey}&units=metric`;

    // Fetch weather data
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
                <p>Temperature: ${temperature}°C, ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data.</p>';
        });
});

// Function to add participant
function addParticipant() {
    const participantNameInput = document.getElementById('participantName');
    const participantDepartmentSelect = document.getElementById('participantDepartment');

    const participantName = participantNameInput.value.trim();
    const participantDepartment = participantDepartmentSelect.value;

    if (participantName !== "" && participantDepartment !== "") {
        const participantList = document.getElementById('participantList');
        const listItem = document.createElement('li');
        listItem.textContent = `${participantName} - ${participantDepartment}`;
        participantList.appendChild(listItem);

        // Clear input fields after adding participant
        participantNameInput.value = "";
        participantDepartmentSelect.value = "";
    }
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    addParticipant();
}

// Attach event listener to the form
const participantForm = document.getElementById('participant-form');
participantForm.addEventListener('submit', handleFormSubmission);

// submit function 
function submitFeedback() {
    const participantNameInput = document.getElementById('participantNameFeedback');
    const feedbackTextInput = document.getElementById('feedbackText');

    const participantIdentifier = participantNameInput.value.trim();
    const feedbackText = feedbackTextInput.value.trim();

    if (participantIdentifier !== "" && feedbackText !== "") {
        // You can handle the feedback data as needed (e.g., send it to a server)
        console.log(`Feedback from ${participantIdentifier}: ${feedbackText}`);

        // Clear input fields after submitting feedback
        participantNameInput.value = "";
        feedbackTextInput.value = "";
    }
}
//event listeners for the topics
document.getElementById('title').addEventListener('click', function(){
    var content = document.getElementById('content');
    if (content.style.display ==="none"){
        content.style.display = 'block';
    }else {
        content.style.display ='none';
    }
})
document.getElementById('title2').addEventListener('click', function(){
    var content = document.getElementById('content2');
    if (content.style.display ==='none'){
        content.style.diplay ='block';
    } else {
        content.style.display = 'none';
    }
})

// Attach event listener to the feedback form
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    submitFeedback();
});


    

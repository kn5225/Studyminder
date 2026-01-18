let initialColor = '';
        let navigationDisplayed = false;
        let lastQuestionTime = 0;
        let timerInterval;
        let totalSeconds = 0;
        let buttonPressed = false;

function changeBackground(nextSection) {
        const currentSection = document.querySelector('.age-selection:not(.hidden)') || document.querySelector('.gender-selection:not(.hidden)');
        initialColor = getRandomColor();
        currentSection.classList.add('hidden');
        const nextSectionElement = document.querySelector(`.${nextSection}`);
        nextSectionElement.classList.remove('hidden');
        document.body.style.backgroundColor = initialColor;
        lastQuestionTime = Date.now();
        }

function showNavigation() {
        if (!navigationDisplayed) {
            const currentTime = Date.now();
            if (currentTime - lastQuestionTime >= 6000) {
                const navigation = document.createElement('div');
                navigation.classList.add('navigation');
                navigation.innerHTML = `
                    <p>Please select an option:</p>
                    <button onclick="showTimer()">Timer</button>
                    <button onclick="showMentalHealth()">Mental Health</button>
                    <button onclick="showContact()">Contact</button>
                    <button onclick="showHome()">Home</button>
                    `;
                document.body.insertBefore(navigation, document.body.firstChild);
                navigationDisplayed = true;
                document.getElementById('heading').style.display = 'none';
                document.getElementById('ageSelection').style.display = 'none';
                document.getElementById('genderSelection').style.display = 'none';
                document.getElementById('nationalitySelection').style.display = 'none';
                document.getElementById('ageResult').style.display = 'none';
                document.getElementById('genderResult').style.display = 'none';
                document.getElementById('nationalityResult').style.display = 'none';
                }
            }
        }
function showResults() {
        document.querySelector('.nationality-selection').classList.add('hidden');
        document.getElementById('results').style.display = 'block';
        const nationality = document.getElementById('nationalityInput').value;
        document.getElementById('nationalityResult').innerText += ' ' + nationality;
        changeColor('nationalityResult');
        setTimeout(showNavigation, 6000);
        }
 
function changeColor(elementId) {
        const randomColor = getRandomColor();
        const element = document.getElementById(elementId);
        element.style.color = randomColor;
        }

function updateTimer() {
        const timerDisplay = document.getElementById('timerDisplay');
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        totalSeconds++;
          }

function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('stopButton').style.display = 'inline-block';
        document.getElementById('resetButton').style.display = 'inline-block';
        }

function stopTimer() {
        clearInterval(timerInterval);
        document.getElementById('continueButton').style.display = 'inline-block';
        document.getElementById('stopButton').style.display = 'none';
        }

function continueTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('continueButton').style.display = 'none';
        document.getElementById('stopButton').style.display = 'inline-block';
        }

function resetTimer() {
        clearInterval(timerInterval);
        totalSeconds = 0;
        const timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.innerText = '0:00';
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('stopButton').style.display = 'none';
        document.getElementById('resetButton').style.display = 'none';
        document.getElementById('continueButton').style.display = 'none';
        }

function showTimer() {
        const homeContent = document.getElementById('homeText');
        const mentalHealthContent = document.getElementById('mentalHealthText');
        if (homeContent) {
            homeContent.remove();
            }
        if (mentalHealthContent) {
            mentalHealthContent.remove();
            }
        document.getElementById('ageResult').style.display = 'none';
        document.getElementById('genderResult').style.display = 'none';
        document.getElementById('nationalityResult').style.display = 'none';
        document.getElementById('timerDisplay').style.display = 'block';
        document.getElementById('timerButtons').style.display = 'flex';
        }

function showMentalHealth() {
	    document.getElementById('timerButtons').style.display = 'none';
	    document.getElementById('timerDisplay').style.display = 'none';
        const contentElement = document.getElementById('homeText');
        if (contentElement) {
            contentElement.remove();
            }
        const mentalHealthText = `Mental health is an essential aspect of overall well-being. It influences how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Taking care of our mental health is just as important as taking care of our physical health. 

        Our website aims to provide resources and guidance for maintaining good mental health, including tips for managing stress, coping with challenges, and seeking professional help when needed.`;

        if (!document.getElementById('mentalHealthText')) {
            const newContentElement = document.createElement('div');
            newContentElement.style.fontSize = '20px';
            newContentElement.style.margin = '20px';
            newContentElement.id = 'mentalHealthText';
            newContentElement.textContent = mentalHealthText;
            document.body.appendChild(newContentElement);
            }
         }


function showContact() {
	    document.getElementById('timerButtons').style.display = 'none';
	    document.getElementById('timerDisplay').style.display = 'none';
              // Need to define behavior for Contact option
        }

function showHome() {
	    document.getElementById('timerButtons').style.display = 'none';
	    document.getElementById('timerDisplay').style.display = 'none';
        const contentElement = document.getElementById('mentalHealthText');
        if (contentElement) {
            contentElement.remove();
            }

        const homeText = `Fitness and education are both very important aspects of life. It’s even more important for young adults and students who are still learning how to manage their time effectively so that both aspects are being approached. 

        Our website makes sure that all items necessary for the growth of a person both mentally and physically are allotted the time that they need. With too little time to play sports or fewer breaks from playing sports, we students usually get frustrated, and that hinders our ability to work to our maximum efficiency.`;

        if (!document.getElementById('homeText')) {
            const newContentElement = document.createElement('div');
            newContentElement.style.fontSize = '20px';
            newContentElement.style.margin = '20px';
            newContentElement.id = 'homeText';
            newContentElement.textContent = homeText;
            document.body.appendChild(newContentElement);
            }
        }


function selectAge(age) {
        changeBackground('gender-selection');
        document.getElementById('ageResult').innerText += ' ' + age;
        changeColor('ageResult');
        }

function selectGender(gender) {
        changeBackground('nationality-selection');
        document.getElementById('genderResult').innerText += ' ' + gender;
        changeColor('genderResult');
        }

function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
        return color;
        }

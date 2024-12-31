var cday;
var cdate;
var time;

const getSnowflakeCount = () => {
	let width = window.screen.width;

	if (width < 768) return 1000;
	if (width < 1024) return 1500;

	return 2000;
};

const letItSnow = () => {

	setInterval(updateDatetime, 1000);

	cday = document.querySelector('h1');
	cdate = document.querySelector('h2');
	time = document.querySelector('h3');

	const snowflakeArea = document.querySelector(".snowflake-area");

	for (let i = 0; i < getSnowflakeCount(); i++) {
		const snowflake = document.createElement("div");
		snowflake.classList.add("snowflake");

		const randomSize = Math.random() * 6 + 3;
		const randomDuration = Math.random() * 13 + 9;
		const randomXPosition = Math.random() * 100;
		const randomDelay = Math.random() * 15;
		const randomOpacity = Math.random() * 0.2 + 0.4;
        const randomSway = (Math.random()-0.5) * 90;

		snowflake.style.left = `${randomXPosition}%`;
		snowflake.style.animationDuration = `${randomDuration}s`;
		snowflake.style.width = `${randomSize}px`;
		snowflake.style.animationDelay = `${randomDelay}s`;
		snowflake.style.opacity = `${randomOpacity}`;
        snowflake.style.setProperty('--sway-amplitude', `${randomSway}px`);

		snowflakeArea.appendChild(snowflake);
	}
};

document.addEventListener("DOMContentLoaded", letItSnow);



function updateDatetime(){
	var date = new Date();
	cday.innerHTML = day(date.getDay()-1);
	cdate.innerHTML = `${date.getDate()} ${month(date.getMonth())}, ${date.getFullYear()}`;
	time.innerHTML = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function day(d){
	if (d == -1) {
		return "Sunday"
	}
	if (d == 0) {
		return "Monday"
	}
	if (d == 1) {
		return "Tuesday"
	}
	if (d == 2) {
		return "Wednesday"
	}
	if (d == 3) {
		return "Thursday"
	}
	if (d == 4) {
		return "Friday"
	}
	if (d == 5) {
		return "Saturday"
	}
}
function month(m){
	if (m == 0) {
		return "January"
	}
	if (m == 1) {
		return "February"
	}
	if (m == 2) {
		return "March"
	}
	if (m == 3) {
		return "April"
	}
	if (m == 4) {
		return "May"
	}
	if (m == 5) {
		return "June"
	}
	if (m == 6) {
		return "July"
	}
	if (m == 7) {
		return "August"
	}
	if (m == 8) {
		return "September"
	}
	if (m == 9) {
		return "October"
	}
	if (m == 10) {
		return "November"
	}
	if (m == 11) {
		return "December"
	}
}



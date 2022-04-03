let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

let hourHands = document.querySelectorAll('[class^="hh"]');
Array.from(hourHands).map((e, i) => {
	angle = "rotate(" + i * 30 + "deg)";
	e.style.transform = angle;
});

let minuteHands = document.querySelectorAll('[class^="mh"]');
Array.from(minuteHands).map((e, i) => {
	angle = "rotate(" + i * 6 + "deg)";
	i
		? i % 5
			? (e.style.transform = angle)
			: (e.style.display = "none")
		: (e.style.display = "none");
});

let clockHands = document.querySelectorAll('.clock-hands>hr');
Array.from(clockHands).map((e, i) => {
	e.style.backgroundColor='black'
	e.style.borderRadius= '5rem'	
});


const clockHandsMover = ()=> {
	let now = new Date();
	let hour = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();
	let leadText = "rotate(";
	let hourText = "deg) translateX( calc(5 * var(--smallest_side)))";
	let minuteText = "deg) translateX( calc(7.5 * var(--smallest_side)))";
	let secondText = "deg) translateX( calc(9 * var(--smallest_side)))";
	secondHand.style.transform = leadText + 6 * second + secondText;
	second? minuteHand.style.transform = leadText + 6 * (minute + second/60) + minuteText:minuteHand.style.transform = leadText + 6 * minute + minuteText;
	minute? hourHand.style.transform = leadText + 30 * (hour + minute/60) + hourText :hourHand.style.transform = leadText + 30 * hour + hourText;
}

clockHandsMover()
setInterval(() => {
	clockHandsMover()
}, 500);

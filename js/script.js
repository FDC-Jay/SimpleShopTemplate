const button = document.getElementById("toggle-button");
const body = document.body;

button.onclick = () => {
	body.classList.toggle("dark");
	body.classList.toggle("light");

	if (button.innerText == "light") {
		button.innerText = "dark";
	} else {
		button.innerText = "light";
	}
};

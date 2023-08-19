const signupPage = document.getElementById("signup-page");
const successMessage = document.getElementById("success-message");

const emailForm = document.getElementById("form-email");
const emailInput = document.getElementById("input-email");
const emailSubmit = document.getElementById("submit-email");
const emailLabel = document.getElementById("label-email");

function validateEmail(email) {
	return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

//*Events Listeners
emailInput.addEventListener("focusout", () => {
	if (validateEmail(emailInput.value) == false) {
		emailLabel.setAttribute("valid-email", "false");
	}
});

emailInput.addEventListener("input", () => {
	emailLabel.removeAttribute("valid-email");
	if (validateEmail(emailInput.value)) {
		emailLabel.setAttribute("valid-email", "true");
	}
});

emailForm.addEventListener("submit", () => {
	if (validateEmail(emailInput.value)) {
		signupPage.style.display = "none";
		successMessage.style.display = "flex";

		successMessage.getElementsByTagName(
			"p"
		)[0].innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>.
        Please open it and click the button inside to confirm your
        subscription.`;
	} else {
		emailLabel.setAttribute("valid-email", "false");
	}
});

const signupPage = document.getElementById("signup-page");
const successMessage = document.getElementById("success-message");

const emailForm = document.getElementById("form-email");
const emailInput = document.getElementById("input-email");
const emailSubmit = document.getElementById("submit-email");
const emailLabel = document.getElementById("label-email");

function validateEmail(email) {
	return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function restoreEmailInput() {
	emailInput.style.backgroundColor = "transparent";
	emailInput.style.borderColor = "hsla(231, 7%, 60%, 0.353)";

	if (emailLabel.children.length == 2) {
		emailLabel.lastChild.remove();
	}
}

function invalidEmailInput() {
	emailInput.style.backgroundColor = "hsla(4, 100%, 67%,20%)";
	emailInput.style.borderColor = "hsla(4, 100%, 67%,50%)";

	if (emailLabel.children.length == 1) {
		let span = document.createElement("span");
		span.innerHTML = "Valid email required";
		emailLabel.appendChild(span);
	}
}

//*Events Listeners
emailInput.addEventListener("focusout", () => {
	if (validateEmail(emailInput.value)) {
		restoreEmailInput();
	} else {
		invalidEmailInput();
	}
});

emailInput.addEventListener("focusin", () => {
	restoreEmailInput();
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
		invalidEmailInput();
	}
});

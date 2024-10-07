const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
let isPalindrome;

function checkForPalindrome(input) {
	// save original input for later
	const originalInput = input;

	// handle empty input
	if (input === "") {
		alert("Please input a value");
		return;
	}

	// Remove the previous result
	resultDiv.replaceChildren();

	// remove all non-alphanumeric characters and make lowercase
	const lowerCaseStr = input.replace(/[^0-9a-z]/gi, "").toLowerCase();

	// check if input is a palindrome
	// isPalindrome = lowerCaseStr === lowerCaseStr.split("").reverse().join("");
	// using the spread operator instead
	isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join("");

	// create result message
	let resultMsg = `<strong>${originalInput}</strong> ${
		isPalindrome ? "is" : "is not"
	} a palindrome`;

	// create result p and assign class name and message
	const pTag = document.createElement("p");
	pTag.className = "user-input";
	pTag.innerHTML = resultMsg;

	// attach p to result div and show div
	resultDiv.appendChild(pTag);
	resultDiv.classList.remove("hidden");
}

checkPalindromeBtn.addEventListener("click", () => {
	checkForPalindrome(userInput.value);
	userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		checkForPalindrome(userInput.value);
		userInput.value = "";
	}
});

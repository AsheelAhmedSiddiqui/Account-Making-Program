//for new users
let newUser = document.getElementById("newusername");
let newEmail = document.getElementById("email");
let newPassword = document.getElementById("newpassword");
// let submitBtn = document.getElementById("create_account");
let counter = 0;

function newAcc() {
	localStorage.setItem(`user`, newUser.value);
	localStorage.setItem(`email`, newEmail.value);
	localStorage.setItem(`password`, newPassword.value);
	alert("Account created successfully");
	window.open = "index.html";
}
// for exisit users
let loginUser = document.getElementById("username");
let loginPass = document.getElementById("password");
let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
	// let getUser = localStorage.getItem("user");
	// let getPassword = localStorage.getItem("password");
	// if (loginUser.value == getUser && loginPass == getPassword) {
	//   window.open = "dashboard.html";
	// } else {
	//   alert("wrong");
	// }

	if (
		loginUser.value == localStorage.getItem("user") &&
		loginPass.value == localStorage.getItem("password")
	) {
		console.log("asheel");
		window.location.href = "dashboard.html";
	} else {
		console.log("no");
	}
	// console.log(getUser);
	// console.log(getPassword);
});

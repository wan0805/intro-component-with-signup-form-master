const form = document.querySelector('.form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#button');



form.addEventListener('submit', (event)=>{
	event.preventDefault();

	checkInputs();
})

function checkInputs(){
	const firstNameValue = firstName.value
	const lastNameValue = lastName.value
	const emailValue = email.value
	const passwordValue = password.value
	var validaEmail = /\S+@\S+\.\S+/
	if(firstNameValue === ""){
		inputError(firstName,"First Name Cannot empty!!");
	}
	else if(firstNameValue.length < 1 || firstNameValue.length <3){
		inputError(firstName,"First Name Invalid!!");
	}
	else{
		inputSucess(firstName);
	}
	if(lastNameValue === ""){
		inputError(lastName,"Last Name Cannot be empty!!");
	}
	else if(lastNameValue.length < 1 || lastNameValue.length <3){
		inputError(lastName,"Last Name Invalid!!");
	}
	else{
		inputSucess(lastName);
	}
	if(validaEmail.test(emailValue)){
		inputSucess(email);
	}
	else{
		inputError(email,"email look like this is not an email!!");
	}
	if(passwordValue === ''){
		inputError(password,"Password Cannot be empty!!");
	}
	else if (passwordValue.length <= 1 || passwordValue.length < 6){
		inputError(password,"Password must be longer than 6 digits");
	}
	else{
		inputSucess(password);
	}
}
function inputError(input,message){
	var formControl = input.parentElement;
	formControl.className = "form__control error";
	const mensagem = formControl.querySelector('.msg');
	mensagem.textContent= message;
}
function inputSucess(input){
	var formControl = input.parentElement;
	formControl.className = "form__control sucess";
}


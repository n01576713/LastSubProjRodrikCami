function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}

function stopAudio() {
  var audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
}

function toggleInfo() {
    var info = document.getElementsByTagName("dd");
    for (var i = 0; i < info.length; i++) {
      if (info[i].style.display === "block") {
        info[i].style.display = "none";
      } else {
        info[i].style.display = "block";
      }
    }
}

function validateTxt() {

  var firstName = document.getElementById("first_name");
  var lastName = document.getElementById("last_name");
  var email = document.getElementById("email");
 
  var fnameError = document.getElementById("fname_error");
  var lnameError = document.getElementById("lname_error");
  var emailError = document.getElementById("emailG_error");
    
  isValue = false;

if (firstName.value == "") {
  fnameError.innerText = "Please enter your first name";
  isValue = true;
} else {
  fnameError.innerText = "";
}

if (lastName.value == "") {
  lnameError.innerText = "Please enter your last name";
  isValue = true;
} else {
  lnameError.innerText = "";
}

if (email.value == "") {
  emailError.innerText = "Please enter a Email";
  isValue = true;
} else {
  emailError.innerText = "";
}
}

function saveInfo(){
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("first_name", firstName);
  localStorage.setItem("last_name", lastName);
  localStorage.setItem("email", email);
}

function RetreiveInfo(){
  document.getElementById("first_name").value = localStorage.getItem("first_name");
  document.getElementById("last_name").value = localStorage.getItem("last_name");
  document.getElementById("email").value = localStorage.getItem("email");
}
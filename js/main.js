
// Get the modal
var PWMrequestForm = document.getElementById("PWMRequestForm");

// Get the button that opens the modal
var btnMakePWMRequest = document.getElementById("btnMakePWMRequest");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnMakePWMRequest.onclick = function() {
  PWMrequestForm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  PWMrequestForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == this.PWMrequestForm) {
    this.PWMrequestForm.style.display = "none";
  }
}


$(document).ready(function () {
  $('#nav-placeholder').load("navbar.html", function (response, status) {
      if (status === 'error') {
        alert("Failed to load navbar.html");
      } 
    });
});

    
$(document).ready(function () {
  $('#PWM-request-form').load("requestFormPWM.html", function (response, status) {
      if (status === 'error') {
        alert("Failed to load navbar.html");
      } 
    });
});

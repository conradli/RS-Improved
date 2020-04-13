// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBA8TWfMj49M_B1_fjdxaFOBJ4Et5zr5Y",
  authDomain: "rideshare-fd0e2.firebaseapp.com",
  databaseURL: "https://rideshare-fd0e2.firebaseio.com",
  projectId: "rideshare-fd0e2",
  storageBucket: "rideshare-fd0e2.appspot.com",
  messagingSenderId: "647353302472",
  appId: "1:647353302472:web:412d154497a7ad30af14fd",
  measurementId: "G-0XBSXP8RCT"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Firebase reference
// var database = firebase.database();

function submitClick() {
    var nameText = document.getElementById("nameText").value;
    var fromBowdoin = document.getElementById("fromBowdoin").checked;
    var fromPWM = document.getElementById("fromPWM").checked;
    var fromOther = document.getElementById("fromOther").value;
    var fromLocation = "NONE";

    var toBowdoin = document.getElementById("toBowdoin").checked;
    var toPWM = document.getElementById("toPWM").checked;
    var toOther = document.getElementById("toOther").value;
    var toLocation = "NONE";

    var datepicker = document.getElementById("datepicker").value;
    var time = document.getElementById("time").value;
    var passengers = document.getElementById("numOfPassengers").value;
    var price = document.getElementById("price").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var addInfo = document.getElementById("addInfo").value;

    if (fromBowdoin) {
      fromLocation = document.getElementById("fromA").textContent;
    } else if (fromPWM) {
      fromLocation = document.getElementById("fromB").textContent;
    } else {
      fromLocation = fromOther;
    }

    if (toBowdoin) {
      toLocation = document.getElementById("toA").textContent;
    } else if (toPWM) {
      toLocation = document.getElementById("toB").textContent;
    } else {
      toLocation = toOther;
    }

    // database.ref().child("Text").set(nameText);

    console.log(nameText);
    console.log(datepicker);
    console.log(time);
    console.log(passengers);
    console.log(price);
    console.log(email);
    console.log(phone);
    console.log(addInfo);
    console.log(fromLocation);
    console.log(toLocation);
}

if (document.getElementById("PWMRequestForm")) {
  // Get the modal
  var PWMrequestForm = document.getElementById("PWMRequestForm");

  // Get the button that opens the modal
  var btnMakePWMRequest = document.getElementById("btnMakePWMRequest");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btnMakePWMRequest.onclick = function () {
    PWMrequestForm.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    PWMrequestForm.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == this.PWMrequestForm) {
      this.PWMrequestForm.style.display = "none";
    }
  }

};



$(document).ready(function () {
  $('#nav-placeholder').load("navbar.html", function (response, status) {
    if (status === 'error') {
      alert("Failed to load navbar.html");
    }
  });
});


$(document).ready(function () {
  $('#request-form').load("requestForm.html", function (response, status) {
    if (status === 'error') {
      alert("Failed to load requestForm.html");
    }
  });
});

$(document).ready(function () {
  $('#offer-form').load("offerForm.html", function (response, status) {
    if (status === 'error') {
      alert("Failed to load offerForm.html");
    }
  });
});
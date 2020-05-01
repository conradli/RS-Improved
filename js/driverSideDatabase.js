function submitRequest() {
  document.getElementById("submitRequest").addEventListener("click", submitClick());
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyADSjdEpk_uqov6VIW7Jlc2MDbXHz2A_vw",
  authDomain: "rideshare-i.firebaseapp.com",
  databaseURL: "https://rideshare-i.firebaseio.com",
  projectId: "rideshare-i",
  storageBucket: "rideshare-i.appspot.com",
  messagingSenderId: "690241269787",
  appId: "1:690241269787:web:b508fbdd58ace9bd4948be",
  measurementId: "G-T7LMZR6E82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase reference
var database = firebase.database();


var elmtTable = document.getElementById('tableOffersAll');
var tableRows = elmtTable.getElementsByTagName('tr');
var rowCount = tableRows.length;
for (var x = rowCount - 1; x > 0; x--) {
  tableRows[x].innerHTML = '';
}


var elmtTable = document.getElementById('tableOffersPWM');
var tableRows = elmtTable.getElementsByTagName('tr');
var rowCount = tableRows.length;
for (var x = rowCount - 1; x > 0; x--) {
  tableRows[x].innerHTML = '';
}


// Form validation code will come here.
function validate() {
  var nameText = document.getElementById("nameText");
  var fromBowdoin = document.getElementById("fromBowdoin");
  var fromPWM = document.getElementById("fromPWM");
  var fromOther = document.getElementById("fromOther");

  var toBowdoin = document.getElementById("toBowdoin");
  var toPWM = document.getElementById("toPWM");
  var toOther = document.getElementById("toOther");

  //var datepicker = document.getElementById("datepicker");
  var time = document.getElementById("time");
  var passengers = document.getElementById("numOfPassengers");
  var price = document.getElementById("price");
  var email = document.getElementById("email");

  var invalid = 0;
  if (nameText.value == "") {
    nameText.style.borderColor = "red";
    invalid+=1;
  } else {
    nameText.style.borderColor = "rgb(206, 212, 218)";
  }

  if (!fromBowdoin.checked && !fromPWM.checked && fromOther.value == "") {
    fromOther.style.borderColor = "red";
    invalid+=1;
  } else {
    fromOther.style.borderColor = "rgb(206, 212, 218)";
  }

  if (!toBowdoin.checked && !toPWM.checked && toOther.value == "") {
    toOther.style.borderColor = "red";
    invalid+=1;
  } else {
    toOther.style.borderColor = "rgb(206, 212, 218)";
  }

  /*
  if (datepicker.innerText.length == 0 ) {
    datepicker.style.borderColor = "red";
    invalid+=1;
  } else {
    datepicker.style.borderColor = "rgb(206, 212, 218)";
  }
  */

  if (time.value.length == 0) {
    time.style.borderColor = "red";
    invalid+=1;
  } else {
    time.style.borderColor = "rgb(206, 212, 218)";
  }

  if (passengers.value == 0) {
    passengers.style.borderColor = "red";
    invalid+=1;
  } else {
    passengers.style.borderColor = "rgb(206, 212, 218)";
  }

  if (price.value.length == 0) {
    price.style.borderColor = "red";
    invalid+=1;
  } else {
    price.style.borderColor = "rgb(206, 212, 218)";
  }

  if (email.value.length == 0) {
    email.style.borderColor = "red";
    invalid+=1;
  } else {
    email.style.borderColor = "rgb(206, 212, 218)";
  }
  return (invalid == 0);
}


var ref = database.ref('Offers');
ref.on('value', getData, errData);

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
    fromLocation = "Bowdoin";
  } else if (fromPWM) {
    fromLocation = "PWM";
  } else {
    fromLocation = fromOther;
  }

  if (toBowdoin) {
    toLocation = "Bowdoin";
  } else if (toPWM) {
    toLocation = "PWM";
  } else {
    toLocation = toOther;
  }

  if (validate()) {
    $('#submitOffer').attr("data-dismiss", "modal");
    uploadData(nameText, fromLocation, toLocation, datepicker, time, passengers, price, email, phone, addInfo);

    var ids = ["nameText", "fromBowdoin", "fromPWM", "fromOther", "toBowdoin", "toPWM",
      "toOther", "datepicker", "time", "numOfPassengers", "price", "email", "phone", "addInfo"];
      
    reset(ids);
  } else {
    alert("Please answer the required questions.");
    console.log(nameText, fromLocation, toLocation, "inner text: " + datepicker, time, passengers, price, email, phone, addInfo);
  }




}


function reset(elementId) {
  for (element of elementId) {
    var resetElement = document.getElementById(element);
    if (resetElement.type == "text" || resetElement.type == "time" || resetElement.type == "email" || resetElement.type == "tel") {
      resetElement.value = "";
    } else if (resetElement.type == "radio") {
      resetElement.checked = false;
    } else if (resetElement == "numOfPassengers") {
      resetElement.value = "0";
    } else if (resetElement == "addInfo") {
      resetElement.value = "";
    }
    resetElement.style.borderColor = "none";

  }
}

function uploadData(name, from, dest, date, time, seats, price, email, phone, additional) {
  database.ref('Offers').push({
    'Name': name,
    'From': from,
    'Destination': dest,
    'Date': date,
    'Time': time,
    'Seats': seats,
    'Price': '$' + price,
    'Email': email,
    'Phone': phone,
    'Additional': additional
  })
}


function getData(data) {
  var elmtTable = document.getElementById('tableOffersAll');
  var tableRows = elmtTable.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x = rowCount - 1; x > 0; x--) {
    tableRows[x].innerHTML = '';
  }

  var elmtTable = document.getElementById('tableOffersPWM');
  var tableRows = elmtTable.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x = rowCount - 1; x > 0; x--) {
    tableRows[x].innerHTML = '';
  }

  var offers = data.val();
  var keys = Object.keys(offers);


  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    var dateText = offers[k].Date;
    var fromText = offers[k].From;
    var destText = offers[k].Destination;
    var nameText = offers[k].Name;
    var priceText = offers[k].Price;
    var seatsText = offers[k].Seats;

    createCell(dateText, fromText, destText, nameText, priceText, seatsText);
  }
}

function errData(err) {
  console.log('ERROR!');
  console.log(err);
}


function createCell(dateInput, fromInput, destInput, nameInput, priceInput, seatsInput) {


  var newBody = document.createElement("tbody");
  var newRow = document.createElement("tr");


  var date = document.createElement("th");
  var from = document.createElement("td");
  var dest = document.createElement("td");
  var name = document.createElement("td");
  var price = document.createElement("td");
  var seats = document.createElement("td");

  date.innerHTML = dateInput;
  from.innerHTML = fromInput;
  dest.innerHTML = destInput;
  name.innerHTML = nameInput;
  price.innerHTML = priceInput;
  seats.innerHTML = seatsInput;

  newRow.append(date);
  newRow.append(from);
  newRow.append(dest);
  newRow.append(name);
  newRow.append(price);
  newRow.append(seats);

  newBody.append(newRow);

  if (dest.innerHTML == "PWM") {
    var tablePWM = document.getElementById("tableOffersPWM");
    tablePWM.append(newBody);
  } else {
    var tableAll = document.getElementById("tableOffersAll");
    tableAll.append(newBody);
  }


};

function removeFromRadio() {
  var fromBowdoin = document.getElementById("fromBowdoin");
  var fromPWM = document.getElementById("fromPWM");

  fromBowdoin.checked = false;
  fromPWM.checked = false;

}

function removeFromInput() {
  var fromOther = document.getElementById("fromOther");
  fromOther.value = "";
}

function removeToRadio() {
  var toBowdoin = document.getElementById("toBowdoin");
  var toPWM = document.getElementById("toPWM");
  toBowdoin.checked = false;
  toPWM.checked = false;
}

function removeToInput() {
  var fromOther = document.getElementById("toOther");
  fromOther.value = "";
}
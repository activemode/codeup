"use strict";


var respondName = "";
var alertResponse = "";
var nextQuestion = "";

    function whoAreYou(respondName, alertResponse, nextQuestion) {

        while (respondName === "") {
            respondName = prompt("what is your name ?");
            console.log("asking for a name...");
        }

        alertResponse = ("The name you gave is: " + respondName);
        console.log("Name given is " + respondName + "...");

        nextQuestion = confirm("dD you like pizza " + respondName+ " ?");

        if (nextQuestion) {
            alertResponse = alert('So we both like Pizza then ' + respondName + ' !');
        } else {
            alertResponse = alert("Very disappointing " + respondName + ", I'm not sure what to say...");
        }
    }

    whoAreYou(respondName,alertResponse),nextQuestion;

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

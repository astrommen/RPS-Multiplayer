$(document).ready(function() {

    //Initializing firebase config
    var firebaseConfig = {
        apiKey: "AIzaSyASKw--Fcp-BPlJCexAKTkucxfYcKYe8zg",
        authDomain: "student-project-749f4.firebaseapp.com",
        databaseURL: "https://student-project-749f4.firebaseio.com",
        projectId: "student-project-749f4",
        storageBucket: "student-project-749f4.appspot.com",
        messagingSenderId: "757173511560",
        appId: "1:757173511560:web:70e8d536d60ac0a7d1463d"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initializing var to ref the database
    var database = firebase.database();

    // All of our connections will be stored in this directory.
    var connectionsRef = database.ref("/connections");

    // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
    var connectedRef = database.ref(".info/connected");

    // When the client's connection state changes...
    connectedRef.on("value", function(snap) {

        // If they are connected..
        if (snap.val()) {
    
        // Add user to the connections list.
        var con = connectionsRef.push(true);
        
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
        
        }
    });
    
    // Initial Values
    var player1 = "Waiting on Player 1...";
    var player2 = "Waiting on Player 2...";
    $("span").text("0");
    var name = "No one here..."
    var comment = "";

    // Initializing var to grab display val
    var user1 = $("#user1-display");
    var user2 = $("#user2-display");
    //setting input val to default vals
    user1.text(player1);
    user2.text(player2);
    console.log(user1.text());//ftp only
    
    // Initializing Game
    $(document).on("click", "#start", function(){

        //grabbing input val from userName
        var Name = $("#userName").val();

        //if both users have default val
        if (user1.text() === player1 && user2.text() === player2){
            
            //then change user1 to name
            user1.text(Name); 

          // if user1 does not have default  
        } else if (user1.text() !== player1 && user2.text() === player2){

            //then change user2 to name
            user2.text(Name);

        } else {
            alert("Game is full, please try again later!");
        }
    });

    //Game Play
    if ((user1.text() !== player1) && (user2.text() !== player2)) {
        var userChoice = ["Rock", "Paper", "Scissors"];
        console.log(userChoice);

        userChoice.forEach(element => {
            console.log(element);
            var choiceBtns = $("<button>");
            console.log(choiceBtns);
            choiceBtns.attr("value", [element]);
            $("#user1-display").append(choiceBtns);

        });
    }
});
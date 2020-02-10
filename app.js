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

    // Initial Values
    var playerName = " ";
    var playerComment = " ";
	$("span").text("0");

    // All of our connections will be stored in this directory.
    var connectionsRef = database.ref("/connections");

    // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
    var connectedRef = database.ref(".info/connected");
    
    // when user clicks the start, function will run
	$("#start").on("click", function(event) {
		event.preventDefault();
		
        // var will grab value from top input box
		playerName = $("#userName").val().trim();
	
		// When the client's connection state changes...
		connectedRef.on("value", function(snap) {

			// If they are connected..
			if (snap.val()) {

			// Add user to the connections list.
			var con = connectionsRef.push({
				//pushes new key/value pair for EACH connection
                user: playerName,
			});

			// Remove user from the connection list when they disconnect.
			con.onDisconnect().remove();

			}
		});
    });	// grabbing the snapshot value of connectionsRef
    	connectionsRef.on("value", function(snapshot){
		// initializing local var to # of children aka how many users are on website
		var qty = snapshot.numChildren();
		console.log(qty); //for FTP only
		
		// listening for added users and taking a snapshot
		connectionsRef.on("child_added", function(childSnapshot) {
			// initializing local var for each user
			var sv = childSnapshot.val();
			console.log(sv.user);//it works!!

			// if else statement to print each user to approp box
			if(qty === 1){ // if user is 1st, print to box one
				$("#user1-display").text(sv.user);
			}else if (qty === 2){ // if user is 2nd, print to box two
				$("#user2-display").text(sv.user);
			}else if (qty >=3){ // any user afterwards has to wait
				alert("Game is full");
			}
		});
	});	
});	


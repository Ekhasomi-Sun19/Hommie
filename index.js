  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDULwINIsIuDsXSJr53wVYJ6Bb5p0t6UDI",
    authDomain: "login-with-firebase-data-4f304.firebaseapp.com",
    projectId: "login-with-firebase-data-4f304",
    storageBucket: "login-with-firebase-data-4f304.appspot.com",
    messagingSenderId: "60902039340",
    appId: "1:60902039340:web:48936271b2b9078cbc1689"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value 
    password = document.getElementById('password').value 
    full_name = document.getElementById('full_name').value 
    favourite_song = document.getElementById('favourite_song').value 
    milk_before_cereal = document.getElementById('milk_before_cereal').value 

    // validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        //Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false){
        alert('One or More Extra Fields is Outta Line!!!')
        return
    }

    //Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser

        // Add this user to firebase Database
        var database_ref = database.ref()

        //Create User data
        var user_data = {
            email : email,
            full_name : full_name,
            favourite_song : favourite_song,
            milk_before_cereal : milk_before_cereal,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)


        alert('User Created!!')

    })
    .catch(function(error) {
        // Firebase will use this to alert of it's errors
        var error_code = error.code 
        var error_message = error.message 

        alert(error_message)
    })
    
  }

  function login () {
    // Get all our inpute= fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    //Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        //Declare user variable
        var user = auth.currentUser

        // Add this user to firebase Database
        var database_ref = database.ref()

        //Create User data
        var user_data = {
            last_login : Date.now()
        }
        //Push to firebase Database
        database_ref.child('users/' + user.uid).update(user_data)

        //Done
        alert('User logged In!!')

    })
    .catch(function(error){
        //Firebase will use this to alert of it's errors
        var error_code = error.code
        var error_message = error.message

        alert(error_message)

    })
  }



  // Validate Function
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true ) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
  }

  function validate_password(password) {
    // Firebase only accepts length greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
  }

  function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
  }

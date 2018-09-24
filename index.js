//
// $(document).ready(function () {
//   var rootRef = firebase.database().ref().child("users_ios")
//     rootRef.on("child_added", snap => {
//       var email = snap.child("email").val();
//       var provider = snap.child("provider").val();
//         console.log(email+" "+provider);
//       $("table_body").append("<tr><td>Name</td><td>Email</td></tr>");
//     })
// });
//
//
// var mainText = document.getElementById("mainText");
// var mainButton = document.getElementById("mainButton");
//
// var firebaseHeadingRef= firebase.database().ref().child("heading");
//
// firebaseHeadingRef.on('value', function(snapshot){
//   console.log(snapshot.val);
//   document.getElementById("fireHeading").innerText = snapshot.val();
// })
//
// function submitClick(){
//   var firebaseRef = firebase.database().ref();
//
//   var messaseText = mainText.value;
//   window.alert(messaseText);
//   firebaseHeadingRef.set(messaseText);
//
// }


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var dialog = document.querySelector('#loginDialog');
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.close();
        $(".login-cover").hide();
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        $(".login-cover").show();
       var dialog = document.querySelector('#loginDialog');
       if (!dialog.showModal) {
         dialogPolyfill.registerDialog(dialog);
       }
       dialog.showModal()

    }
});

$("#loginBtn").click(
    function () {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email != "" && password!= ""){
          $("#loadingProgress").show();
          $("#loginBtn").hide();
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                $("#loginError").show().text(error.message);
                $("#loadingProgress").hide();
                $("#loginBtn").show();
                // if(error)
            });
        }
    }

$("#logoutBtn").click(
    function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            alert(error.message)
        });
    }
)



)


//////REDIRECT TO HOME//////
$('#home').click(function() {
    window.location.href = "welcome.html";
    return false;
  }); 
 

  ////////logout//////////
  // logout function ///////////////////
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
});




// sign out //////////////
$(document).ready(function() {
    // show a dialog box when clicking on a link
    $("#logout").on('click', function(e) {
        e.preventDefault();
        $.Zebra_Dialog('<strong>Do you want to Logout?</strong>', {
            'type':     'question',
            'buttons':  [
                            {caption: 'Yes', callback: function() { 
                              firebase.auth().signOut();
                              console.log("logged out")
                            }},
                            {caption: 'No', callback: function() { }},
                            {caption: 'Cancel', callback: function() { }}
                        ]
        });
    });
  });
  

// save data

$('#data').click(function() {
  window.location.href = "data.html";
  return false;
});


// logout function ///////////////////
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
});

/////////////////////////////////////////////////////
// saving data to our database....




var studentFormDB = firebase.database().ref("add-std");

document.getElementById("add-std").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("inputStudentName");
  var branch = getElementVal("branch");
  var year = getElementVal("year");

  saveMessages(name, branch, year);


  document.getElementById("add-std").reset();
}

const saveMessages = (name, branch, year) => {
  var newStudentForm = studentFormDB.push();

  newStudentForm.set({
    name: name,
    branch: branch,
    year: year,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

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



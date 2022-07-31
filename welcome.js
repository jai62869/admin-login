

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
})

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





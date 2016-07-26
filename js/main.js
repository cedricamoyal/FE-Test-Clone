console.log("Cedric");

var myFunction = function () {
  console.log("A radio button was clicked");
  if(document.getElementById('other').checked) {
    document.getElementById('otherText').required = true;
  } else {
    document.getElementById('otherText').required = false;
  }

};

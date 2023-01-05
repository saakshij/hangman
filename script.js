var submit = document.querySelector("#submit");
var tex = document.querySelector("#textInput");

function store(){
  value = tex.value;
  console.log(value);
  tex.value = "";
  let placeholder = tex.placeholder;
  if (placeholder === "Enter a word"){
    let letter = value.split("");
    addD();
  }
}

var dash = document.getElementById("dashes");
function addD() {
 
  let letter = value.split("");
  console.log(letter);
  console.log(value.length);
  let length = value.length;
  let dashes = "_ ".repeat(length);
  let arr = dashes.split("");
  dash.value = dashes;
}

function getInput() {
  user = prompt("Enter a letter");
  if user.length > 1 {
    getInput();
  }
  for (var i = 0; i < value.length; i++) {
    if user == word[i] {
      arr[i] = user;
      console.log(arr);
    }
    else {
      //count += 1; 
    }
    if count >= value.length {
      //lives -= 1;
      break;
    }
  }
}

function checkAnswer() {
  
}

submit.addEventListener("click", store);

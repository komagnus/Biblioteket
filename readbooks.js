let number = 0;
let inputs = [];
let counter = 0;

function addItem() {
    number++
    var input = document.getElementById("inputField");
    var inputValue = input.value;
    var error = document.getElementById("errorText")
    if (inputs.includes(inputValue)) {
      error.innerHTML = "Uc-Id " + inputValue + " er allerede i listen"
      error.style.display = "block"
      setTimeout(function() {error.style.display = "none"}, 500)
      input.value = "";
    } else {
      inputs.push(inputValue)
      counter++;
      document.getElementById("counter").innerHTML = counter;
      var li = document.createElement("li");
      li.setAttribute('id', 'li' + number);
      var text = document.createTextNode(inputValue);
      li.appendChild(text);
      var ul = document.getElementById("list");
      ul.appendChild(li);
      input.value = "";
      li.addEventListener('copy', function(event) {
        li.style.textDecoration = 'line-through';
    });
    }
   
  }
  
 
  document.getElementById("inputField").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addItem();
    }
  });
  
  function toggle() {
    var x = document.getElementById("info");
    
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

//var myEle = document.getElementById("myElement");
//if(myEle) { xxx}
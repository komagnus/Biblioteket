let number = 0;
let inputs = [];

function addItem() {
    number++
    var input = document.getElementById("inputField");
    var inputValue = input.value;
    if (inputs.includes(inputValue)) {
      alert("Boken er allerede i listen")
    } else {
      inputs.push(inputValue)
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
  



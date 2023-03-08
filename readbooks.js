let number = 0;
let inputs = [];

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

function kassere() {
  
  /* 
  use api to get JSOn / xml of items return with that uc
  /almaws/v1/bibs/{mms_id}/holdings
  if(requested exists) {
    add to list of requested items
  } else {
    use API to get items
    /almaws/v1/bibs/{mms_id}/holdings/{holding_id}/items
    for the item with UC code use API to withdraw item
    /almaws/v1/bibs/{mms_id}/holdings/{holding_id}/items/{item_pid}
    if (items array now === 0) {
      delete records
    } else {
      continue
    }
  }
  */

  /*

  // Define the API endpoint URL
const apiUrl = 'https://api-eu.hosted.exlibrisgroup.com/almaws/v1/bibs/{uc_id?}';

// Send the API request using the Fetch API
fetch(apiUrl, {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    console.log('API response:', response.status);
  })
  .catch(error => {
    console.error('API request failed:', error);
  });
  */

}

//var myEle = document.getElementById("myElement");
//if(myEle) { xxx}
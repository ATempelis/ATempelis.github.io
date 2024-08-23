var addButton = document.getElementById("addItem");
var removeButton = document.getElementById("removeItem");
//var itemInput = document.getElementById('newItem');
//var dynamicList = document.getElementById('shoppingList');
let itemCounter = 1;

function addNewItem() {
  var listItem = document.createElement("li");
  //var buttonK = document.createElement("button")

  //buttonK.innerText = "Delete"
  //buttonK.classList = "deleteBtn"
  
  listItem.innerHTML ="New Item " + itemCounter + " <button class=\"deleteBtn\" onclick=\"this.parentNode.remove()\">Delete</button>"
  shoppingList.appendChild(listItem);
  
  itemCounter++;
  
  intersectionObserver.observe(listItem);
}

function removeItem() {
  if (shoppingList.lastChild) {
    intersectionObserver.unobserve(shoppingList.lastChild);
    console.log(shoppingList.lastChild.textContent.replace('Delete', '') + `is out of the viewport`); 
    shoppingList.removeChild(shoppingList.lastChild);
    itemCounter--;
  }
}

addButton.addEventListener("click", addNewItem);
removeButton.addEventListener("click", removeItem);

// var deleteButtons = document.getElementsByClassName('deleteBtn');
// for (var i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].addEventListener('click', function(event) {
//     var listItem = event.target.parentNode; // The 'li' element to remove
//     removeListItem(listItem);
//   });
// }

var list = document.querySelector("#shoppingList");
var button = document.querySelector("#addItem");
var colorchanged = false;
var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(`Mutation detected: ${mutation.type}`);
  });
});

mutationObserver.observe(shoppingList, {
  attributes: true,
  childList: true,
  characterData: true,
  attributeOldValue: true,
});

var intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting){
  console.log(entry.target.textContent.replace('Delete', '') + `is in the viewport`);
    }
    else{
      console.log(entry.target.textContent.replace('Delete', '') + `is out of the viewport`); 
    }

  });
});


function addFriend() {

  let input = document.querySelector("input").value; 
  let ul = document.querySelector("#myFriends");
  let li = document.createElement("li");
  li.innerText = input;
  ul.appendChild(li);
  
}
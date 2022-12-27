function submitImages() {

  const userInput = document.getElementById("userInput").value;
  console.log(typeof userInput);
  const allImages = document.querySelectorAll("img");
  
  if(userInput  < 100) {

    for(let i = 0; i < allImages.length; i++) {
      
      console.log(allImages[i]);
      console.log(i);
      allImages[i].style.display = "block";

    }
  } else if (userInput == 100) {

    for(let i = 0; i < 2; i++) {
      
      console.log(allImages[i]);
      console.log(i);
      allImages[i].style.display = "block";

  }
} else {

      allImages[0].style.display = "block";
      console.log(a1);
}

}


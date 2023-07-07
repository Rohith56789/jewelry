// window.addEventListener("load",()   =>{
//    const loader = document.querySelector(".loader");
//    loader.classList. add("loader-hidden");
//    loader.addEventListener("transitionend", () =>{
//      document.body.removeChild ("loader");
// })
// })
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

  function priceCost() {
    var cartlist = parseInt(document.getElementById("cartlist").value);
    var pricein = parseInt(document.getElementById("pricein").value);
    if (cartlist === 24) {
      document.getElementById("result").value = pricein;
    }
    if (cartlist === 22) {
      document.getElementById("result").value = (pricein * 91.6) / 100;
    }
    if (cartlist === 20) {
      document.getElementById("result").value = (pricein * 83.3) / 100;
    }
    if (cartlist === 18) {
      document.getElementById("result").value = (pricein * 75) / 100;
    }
  }
 
function showLoader(top) {
  document.getElementById("cartlist").style.display = "block";
  document.getElementById("cartlist").style.top = top.toString();
}
function clearFun() {
    document.getElementById("pricein").value = "";
    document.getElementById("result").value = "";
  }
  

  function priceCost1() {
    var cartlist = parseInt(document.getElementById("cartlist").value);
    var pricein = parseInt(document.getElementById("pricein").value);
    if (cartlist === 24) {
      document.getElementById("result").value = pricein;
    }
    if (cartlist === 22) {
      document.getElementById("result").value = (pricein * 91.6) / 100;
    }
    if (cartlist === 20) {
      document.getElementById("result").value = (pricein * 83.3) / 100;
    }
    if (cartlist === 18) {
      document.getElementById("result").value = (pricein * 75) / 100;
    }
  }
  
  // Getting input values from the user

var carat = String;
var priceOfGold = toString;
var weightInGrams = String;
var makingCharges = 100;
var gstCharges = 3;

// Calculating the final price
var priceOfJewellery = (priceOfGold * carat / 24) * weightInGrams; // Calculating the price of gold based on carat and weight
var gstOnJewellery = (priceOfJewellery + makingCharges) * gstCharges / 100; // Calculating GST charges on the total price of the jewellery

var finalPrice = priceOfJewellery + makingCharges + gstOnJewellery; // Calculating the final price

// Displaying the final price
console.log("Final Price: " + finalPrice);


var loaderLink = document.getElementById('loader-link');
var loaderContainer = document.getElementById('loader-container');

loaderLink.addEventListener('click', function(event) {
  event.preventDefault();
  
  loaderContainer.style.display = 'block';
  
  // Simulate loading completion
  setTimeout(function() {
    loaderContainer.style.display = 'none';
    // Add your logic here to handle the loaded content
  }, 2000); // Change the delay time as needed
});



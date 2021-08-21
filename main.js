//! 1

var shoppingList = document.getElementById("shoppingList");
var shoppingInput = document.getElementById("shoppingInput");
var shoppingButton = document.getElementById("shoppindBtn");
var itemsArray = [];

shoppingButton.onclick = function () {
    if (shoppingInput.value != "") {
        if (itemsArray.length == 0) {
            shoppingList.innerHTML = `<h3>Shopping list</h3>`
            itemsArray.push(shoppingInput.value);
        }
        else {
            for (var i = 0; i < itemsArray.length; i++) {
                if (itemsArray[i] == shoppingInput.value) {
                    return;
                }
            }
            itemsArray.push(shoppingInput.value);
        }
        shoppingList.innerHTML += `<li>${shoppingInput.value}</li>`;
    }
}
//! ----------------------------------------------------------------
//! 2

var plusButton = document.getElementById("plus");
var numOne = document.getElementById("firstNumber");
var numTwo = document.getElementById("secondNumber");

plusButton.onclick = function () {
    return Number(numOne.value) + Number(numTwo.value);
}

//! ----------------------------------------------------------------
//! 3

var changeBgColorButton = document.getElementById("bgColorBtn");
changeBgColorButton.onclick = function () {
    changeBgColorButton.style.background = "red";
}

//! ----------------------------------------------------------------
//! 4

var rendonNumberButton = document.getElementById("rendomNumber");
var para = document.getElementById("paraRendom");

rendonNumberButton.onclick = function () {
    para.innerHTML = Math.floor(Math.random() * 100);
}

//! ----------------------------------------------------------------
//! 5

var fruits = [{
    name: "strawberry",
    images: ["./img/strawberry1.jpg", "./img/strawberry2.webp"]
},
{
    name: "banana",
    images: ["./img/bananas1.png", "./img/bananas2.jpg"]
},
{
    name: "apple",
    images: ["./img/apples1.webp", "./img/apple2.jpg"]
},
{
    name: "watermelon",
    images: ["./img/watermelon1.jpg", "./img/watermelon2.webp"]
},
{
    name: "peaches",
    images: ["./img/peaches1.webp", "./img/peaches2.jpg"]
}]

var myDiv = document.getElementById("fruitsArray");
for (var i = 0; i < fruits.length; i++) {
    myDiv.innerHTML += `<h1>${fruits[i].name} </h1>`;
    for (var j = 0; j < fruits[i].images.length; j++) {
        myDiv.innerHTML += `<img src= ${fruits[i].images[j]}>`;
    }
}

//! ----------------------------------------------------------------
//! 6

var arrayOfNumbers = [];
var addNumberButton = document.getElementById("addBtn");
var userNumber = document.getElementById("inputNumber");

addNumberButton.onclick = function () {
    arrayOfNumbers.push(Number(userNumber.value));
    console.log(arrayOfNumbers);
}

//! ----------------------------------------------------------------
//! 7

document.getElementById("paraDate").onclick = function () {
    document.getElementById("paraDate").innerHTML = new Date();
}

//! ----------------------------------------------------------------
//! 8

document.getElementById("paraHour").onclick = function () {
    document.getElementById("paraHour").innerHTML = new Date().getHours();
}

//! ----------------------------------------------------------------
//! 9

var age = document.getElementById("ageInput");
document.getElementById("calculateBtn").onclick = function () {
    document.getElementById("paraYear").innerHTML = Number(new Date().getFullYear()) - Number(age.value);
    var numberToSearch = document.getElementById("numberInput");
    console.log(Number(new Date().getFullYear()), Number(age.value));
}

//! ----------------------------------------------------------------
//! 10

var numbersArray = [801, 22, 93, 41, 225, 6, 787, 865, 79, 69, 52, 60, 45];
var numberToSearch = document.getElementById("numberInput");
document.getElementById("searchBtn").onclick = function () {
    for (let i = 0; i < numbersArray.length; i++) {
        if (numberToSearch.value == numbersArray[i]) {
            document.getElementById("paraAnswer").innerHTML = `The number ${numberToSearch.value} appears in the array.`
            return;
        }
    }
    document.getElementById("paraAnswer").innerHTML = `The number ${numberToSearch.value} doesn't appear in the array.`
}

//! ----------------------------------------------------------------
//! 11

var fullName = document.getElementById("nameInput");
document.getElementById("fullNameBtn").onclick = function () {
    document.getElementById("firstName").innerText = fullName.value.substr(0, fullName.value.indexOf(" "));
    document.getElementById("lastName").innerText = fullName.value.substr(fullName.value.indexOf(" ") + 1);
}

//! ----------------------------------------------------------------
//! 12

var firstInput = document.getElementById("inputOne");
var secondInput = document.getElementById("inputTwo");

document.getElementById("myBtn").onclick = function () {
    if (firstInput.value.length > secondInput.value.length) {
        console.log(`${firstInput.value}`);
        return;
    }
    console.log(`${secondInput.value}`);
}

//! ----------------------------------------------------------------
//! 13

var clientsArray = [];
var firstName = document.getElementById("nameOfUser");
var emailAddress = document.getElementById("email");
var Userage = document.getElementById("ageOfUser");


document.getElementById("sentBtn").onclick = function () {
    var client = {};
    client.name = firstName.value;
    client.email = emailAddress.value;
    client.age = Userage.value;
    clientsArray.push(client);
    document.getElementById("clients").innerHTML += `Name: ${client.name}<br> 
    Email: ${client.email}<br> Age: ${client.age}<br>`;
}



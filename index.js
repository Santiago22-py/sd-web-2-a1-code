"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 }, //Added missing comma 
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const brokenUsers =
[
  { id: 1, age: 23 }, // missing name property
  { id: 2, name: "Anakin Skywalker", age: 22 },
  { id: 3, name: "Gonk Droid", age: 5 },
  { id: 4, age:55 }, // missing name and age properties
]

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("Character Names:");

//Loops through the array of characters 
for (let i = 0; i < users.length; i++)
{
  console.log(users[i].name); //Prints the name of each character to the console
  let li = document.createElement("li"); //Creates a new list item element
  li.textContent = users[i].name; //Assigns the name of the character to the list item
  document.getElementById("names-list").appendChild(li); //Appends the item to the list in exercise 1 (names-list)
}

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
console.log(""); //Prints a blank line for better readability in the console
console.log("Characters under 40:");

//Loops through the array of characters
for (let i = 0; i < users.length; i++)
{
  if (users[i].age < 40) //Checks if the character's age is less than 40
  {
    console.log(users[i].name); //Prints the name of the character to the console
    let li = document.createElement("li"); //Creates a new list item element
    li.textContent = users[i].name; //Assigns the name of the character to the list item
    document.getElementById("young-characters-list").appendChild(li); //Appends the item to the list in exercise 2 (young-characters-list)
  }
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function showNames(characterArray, listId) //Function that takes an array of characters and the id of the list to populate
{
  for (let i = 0; i < characterArray.length; i++) //Loops through the array of characters
  {
    let li = document.createElement("li"); //Creates a new list item element
    li.textContent = characterArray[i].name; //Assigns the name of the character to the list item
    document.getElementById(listId).appendChild(li); //Appends the item to the specified list
  }
}

//calls the function to populate the list in exercise 3 (function-list)
showNames(users, "function-list");

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function showNamesByAge(characterArray, ageThreshold, listId) //Function that takes an array of characters, an age threshold, and the id of the list to populate
{
  for (let i = 0; i < characterArray.length; i++) //Loops through the array of characters
  {
    if (characterArray[i].age < ageThreshold) //Checks if the character's age is less than the given threshold
    {
      let li = document.createElement("li"); //Creates a new list item element
      li.textContent = characterArray[i].name; //Assigns the name of the character to the list item
      document.getElementById(listId).appendChild(li); //Appends the item to the specified list
    }
  }
}

//calls the function to populate the list in exercise 4 (age-filter-list) with an age threshold of 30
showNamesByAge(users, 30, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

//Should I recreate both functions with error handling or just add it to the existing ones?
function showNamesWithErrorHandling(characterArray, listId, errorMessageDivId) //Function that takes an array of characters and the id of the list to populate
{
  for (let i = 0; i < characterArray.length; i++) //Loops through the array of characters
  {
    let li = document.createElement("li"); //Creates a new list item element
    li.textContent = characterArray[i].name; //Assigns the name of the character to the list item
    if (characterArray[i].name === undefined) //Checks if the character has a name property
    {
      console.error(`Error: Character at index ${i} is missing a name property.`); //Logs an error message to the console
      document.getElementById(errorMessageDivId).textContent += `Error: Character at index ${i} is missing a name property.\n`; //Displays the error message in the error-messages div
    }
    else
    {
      document.getElementById(listId).appendChild(li); //Appends the item to the specified list
    }
  }
}

//calls the function to populate the list in exercise 5 (error-handling-list)
showNamesWithErrorHandling(users, "error-handling-list", "error-messages"); //Since this array is fine, no errors should be displayed


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

//calls the function to populate the list in exercise 6 (broken-array-list)
showNamesWithErrorHandling(brokenUsers, "broken-array-list", "broken-array-errors");
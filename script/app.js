import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";

let FirstNameInput = document.getElementById('firstNameInput')
let LastNameInput = document.getElementById('lastNameInput')
let HeightInput = document.getElementById('heightInput')
let AgeInput = document.getElementById('ageInput')
let AddBtn = document.getElementById('addBtn')
let NameList = document.getElementById('nameList')
let Arr = [];

let IDBtn = document.getElementById('idBtn')
let FirstNameBtn = document.getElementById('firstNameBtn')
let LastNameBtn = document.getElementById('lastNameBtn')
let HeightBtn = document.getElementById('heightBtn')
let AgeBtn = document.getElementById('ageBtn')

AddBtn.addEventListener('click', async () => {
    let localData = getLocalStorage()
    let ID = localData.length + 1;
    let FirstName = FirstNameInput.value;
    let LastName = LastNameInput.value;
    let Height = Number(HeightInput.value);
    let Age = Number(AgeInput.value);
    let data = [ID, FirstName, LastName, Height, Age]
    saveToLocalStorage(data);
    IDSort()
    FirstNameInput.value = ""
    LastNameInput.value = ""
    HeightInput.value = ""
    AgeInput.value = ""
});

function List(){
    NameList.innerHTML = ""
    Arr.map(players => {
        let newDiv = document.createElement('div')
        newDiv.className = 'flex'

        let newID = document.createElement('p')
        newID.innerText = players[0]
        newDiv.appendChild(newID)

        let newFirstName = document.createElement('p')
        newFirstName.innerText = players[1]
        newDiv.appendChild(newFirstName)
        
        let newLastName = document.createElement('p')
        newLastName.innerText = players[2]
        newDiv.appendChild(newLastName)
        
        let newHeight = document.createElement('p')
        newHeight.innerText = Number(players[3])
        newDiv.appendChild(newHeight)
        
        let newAge = document.createElement('p')
        newAge.innerText = Number(players[4])
        newDiv.appendChild(newAge)
        
        NameList.appendChild(newDiv)
    })
}

function sortNestedArray(arr, index) {
    return arr.sort((a, b) => {
      if (a[index] < b[index]) {
        return -1;
      }
      if (a[index] > b[index]) {
        return 1;
      }
      return 0;
    });
  }

  function sortNumArray(arr, index) {
    arr.sort((a, b) => {
      return a[index] - b[index];
    });
    return arr;
  }
 function IDSort(){
    Arr = getLocalStorage()
    List()
 } 
 IDSort()

IDBtn.addEventListener('click', async () => {
    IDSort()
})
FirstNameBtn.addEventListener('click', async () => {
    FirstNameSort()
})
LastNameBtn.addEventListener('click', async () => {
    LastNameSort()
})
HeightBtn.addEventListener('click', async () => {
    HeightSort()
})
AgeBtn.addEventListener('click', async () => {
    AgeSort()
})


function FirstNameSort(){
      let testArr = getLocalStorage()
      Arr = sortNestedArray(testArr, 1);
      List()
}

function LastNameSort(){
      let testArr = getLocalStorage()
      Arr = sortNestedArray(testArr, 2);
      List()
}

function HeightSort(){
      let testArr = getLocalStorage()
      Arr = sortNumArray(testArr, 3);
      List()
}
function AgeSort(){
      let testArr = getLocalStorage()
      Arr = sortNumArray(testArr, 4);
      List()
}
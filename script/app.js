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

let Ten = document.getElementById('10btn')
let Twenty = document.getElementById('20btn')
let Thirty = document.getElementById('30btn')
let Forty = document.getElementById('40btn')
let Fifty = document.getElementById('50btn')
let One = document.getElementById('1btn')
let Two = document.getElementById('2btn')
let Three = document.getElementById('3btn')
let Four = document.getElementById('4btn')
let Five = document.getElementById('5btn')
let chunkSize = 10;

let IDBool = true
let FirstBool = true
let LastBool = true
let HeightBool = true
let AgeBool = true

let current = 'ID'

One.addEventListener('click', async () => {
    Arr = chunks[0]
    List()
})
Two.addEventListener('click', async () => {
    Arr = chunks[1]
    List()
})
Three.addEventListener('click', async () => {
    Arr = chunks[2]
    List()
})
Four.addEventListener('click', async () => {
    Arr = chunks[3]
    List()
})
Five.addEventListener('click', async () => {
    Arr = chunks[4]
    List()
})

Ten.addEventListener('click', async () => {
    chunkSize = 10;
    divider()
    Arr = chunks[0]
    List()
})
Twenty.addEventListener('click', async () => {
    chunkSize = 20;
    divider()
    Arr = chunks[0]
    List()})
Thirty.addEventListener('click', async () => {
    chunkSize = 30;
    divider()
    Arr = chunks[0]
    List()})
Forty.addEventListener('click', async () => {
    chunkSize = 40;
    divider()
    Arr = chunks[0]
    List()})
Fifty.addEventListener('click', async () => {
    chunkSize = 50;
    divider()
    Arr = chunks[0]
    List()})

let chunks = [];

function divider(){
    chunks = [];
    let newArr = getLocalStorage();

    for (let i = 0; i < newArr.length; i += chunkSize) {
    let chunk = [];
    for (let j = i; j < i + chunkSize && j < newArr.length; j++) {
        chunk.push(newArr[j]);
    }
        chunks.push(chunk);
    }
    console.log(chunks)
}
divider()

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
     Arr = chunks[0]
    if(IDBool === true){
        IDBool = false
    } else {
        Arr = chunks[0].reverse()
        IDBool = true
    }
    List()
 } 
 IDSort()

IDBtn.addEventListener('click', async () => {
    current = "ID"
    IDSort()
})
FirstNameBtn.addEventListener('click', async () => {
    current = "first"
    FirstNameSort()
})
LastNameBtn.addEventListener('click', async () => {
    current = "last"
    LastNameSort()
})
HeightBtn.addEventListener('click', async () => {
    current = "height"
    HeightSort()
})
AgeBtn.addEventListener('click', async () => {
    current = "age"
    AgeSort()
})


function FirstNameSort(){
      let testArr = chunks[0]
      if (FirstBool === true){
          Arr = sortNestedArray(testArr, 1);
          FirstBool = false
        } else {
            Arr = sortNestedArray(testArr, 1).reverse();
            FirstBool = true
      }
      List()
}

function LastNameSort(){
      let testArr = chunks[0]
      if (LastBool === true){
        Arr = sortNestedArray(testArr, 2);
        LastBool = false
      } else {
          Arr = sortNestedArray(testArr, 2).reverse();
          LastBool = true
    }
      List()
}

function HeightSort(){
      let testArr = chunks[0]
      if (HeightBool === true){
        Arr = sortNumArray(testArr, 3);
        HeightBool = false
      } else {
          Arr = sortNestedArray(testArr, 3).reverse();
          HeightBool = true
    }
      List()
}
function AgeSort(){
      let testArr = chunks[0]
      if (AgeBool === true){
        Arr = sortNumArray(testArr, 4);
        AgeBool = false
      } else {
          Arr = sortNestedArray(testArr, 4).reverse();
          AgeBool = true
    }
      List()
}

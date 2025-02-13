function saveToLocalStorage(myData) {
    let dataArr = getLocalStorage();
    if (!dataArr.includes(myData)) {
        dataArr.push(myData);
    }
    localStorage.setItem('Data', JSON.stringify(dataArr));

}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Data');
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(myData){
    let dataArr = getLocalStorage();
    let myDataindex = dataArr.indexOf(myData);
    dataArr.splice(myDataindex, 1);
    localStorage.setItem('Data', JSON.stringify(dataArr));
}



export{saveToLocalStorage, getLocalStorage, removeFromLocalStorage }
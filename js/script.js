//Prendo l'elemento che mi serve del DOM
//Creo un loop che mi genera 5 volte un numero random, me li salva in un array e me li inserisce  nell'elemento del DOM
//creo una funzione timeout che consiste nel nascondere l'elemento del DOM dopo 30 secondi (30000 millisecondi).
//creo un ciclo in cui chiedo a l'utente di inserire un numero x5 volte e ogni volta controlla se il valore inserito dall'utente è presente nell'array dei numeri generati.
//Se è presente lo inserisce in un array apposito
//alla fine stampa

const numbersContainerElement = document.querySelector(".numbers");
const numbersOfNumbers = 5;
const generatedNumbersArray = [];
for(let i = 0; i < numbersOfNumbers; i++){
    const rndNumber = rndNumberGenerate(1, 100);
    generatedNumbersArray.push(rndNumber);
    numbersContainerElement.innerHTML += `&nbsp;${rndNumber}`;
}
console.log(generatedNumbersArray);

setTimeout(toHideElement, 30000);
const checkedNumbersArray = [];

setTimeout(questionToUserAndPrintResult, 31000);



function rndNumberGenerate(min, max){
    let rndNumber = Math.floor(Math.random() * max) + min;
    return rndNumber;
}

function toHideElement(){
    numbersContainerElement.classList.add("hidden");
}

function questionToUserAndPrintResult(){
    const numbersToRemember = "";
    const numberschecked = "";
    let contator = 0;
    for(let i = 0; i < numbersOfNumbers; i++){
    const userNumber = parseInt(prompt("inserisca qui uno dei numeri che ricorda"));
    if(generatedNumbersArray.includes(userNumber)){
        checkedNumbersArray.push(userNumber);
        contator++;
    }
    
} console.log(checkedNumbersArray);
 numbersContainerElement.innerHTML = `the numbers to remember was..${printArray(generatedNumbersArray, numbersToRemember)} and you checked ${contator} numbers ${printArray(checkedNumbersArray, numberschecked)}`;
   numbersContainerElement.classList.remove("hidden");
}

function printArray(array, element){
    for(let i = 0; i < array.length; i++){
        element += `&nbsp;${array[i]}`;
    }
    return element;
}

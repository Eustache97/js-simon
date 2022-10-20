//Prendo l'elemento che mi serve del DOM
//Creo un loop che mi genera 5 volte un numero random, me li salva in un array e me li inserisce  nell'elemento del DOM
//creo una funzione timeout che consiste nel nascondere l'elemento del DOM dopo 30 secondi (30000 millisecondi).
//creo una funzione in cui chiedo a l'utente di inserire un numero x5 volte e ogni volta controlla se il valore inserito dall'utente è presente nell'array dei numeri generati.
//Se è presente lo inserisce in un array apposito
//alla fine stampa

//Prendo l'elemento che mi serve del DOM
const numbersContainerElement = document.querySelector(".numbers");
//inizializzo la variabile contenebte il numero dei numeri random che voglio generare
const numbersOfNumbers = 5;
const generatedNumbersArray = [];
for(let i = 0; i < numbersOfNumbers; i++){
    const rndNumber = rndNumberGenerate(1, 100);
    generatedNumbersArray.push(rndNumber);
    numbersContainerElement.innerHTML += `&nbsp;${rndNumber}`;
}
console.log(generatedNumbersArray);
//richiamo funzione per nascondere elemento
setTimeout(toHideElement, 30000);

//richiamo funzione con interazione user
const checkedNumbersArray = [];
setTimeout(questionToUserAndPrintResult, 31000);


//funzione per generare un numero random
function rndNumberGenerate(min, max){
    let rndNumber = Math.floor(Math.random() * max) + min;
    return rndNumber;
}

//funzione per nascondere l'elemento del DOM
function toHideElement(){
    numbersContainerElement.classList.add("hidden"); 
}

/*funzione in cui chiedo a l'utente di inserire un numero x5 volte e ogni volta controlla se il valore inserito dall'utente è presente nell'array dei numeri generati. Se è presente lo inserisce in un array apposito, rimuovo l'hidden all'elemento e alla fine stampo*/
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

// funzione per stampare un array
function printArray(array, element){
    for(let i = 0; i < array.length; i++){
        element += `&nbsp;${array[i]}`;
    }
    return element;
}

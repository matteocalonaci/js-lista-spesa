// *****************  TRACCIA  **********************************************************

//                  MILESTONE 1:
// Create il vostro array con una serie di elementi.
// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.


//                  MILESTONE 2:
// Convertite il ciclo FOR in un WHILE.Dovrete gestire il contatore manualmente.



//                  MILESTONE 3:
// Invece di stampare in console, inserite ogni elemento in pagina, magari in un < li >

// ***************************************************************************************


// creo l'array myList

const myList = ["frutta", "verdura", "pane", "acqua"];
console.log("Nella mia lista ci sono:", myList);


const myListLength = myList.length;
console.log("La mia lista è lunga:", myListLength);

// inizio un ciclo FOR

for (i = 0; i < myListLength; i++) {

    // stampo in console gli elementi della lista
    const myListElement = myList[i];
    console.log("Nella mia lista c'è:", myListElement);
}
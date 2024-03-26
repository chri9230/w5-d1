/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum(a, b) {
    if(a === b) {
        return (a + b) * 3
    } else {
        return a + b
    }
}

let sommaFinale = crazySum(50,5)

console.log("Il tuo risulta finale è " + sommaFinale) */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary(n) {
    if((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
} 

console.log(boundary(22)) */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* let newString = ''

function reverseString(string) {
   
    for (let i = string.length -1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

console.log(reverseString("ciao"))
 */







/* const reverseString = function (newString) {
    let split = newString.split('')
    let reverse = split.reverse()
    let join = reverse.join('')
    return join
}



console.log(reverseString(prompt("scrivi una parolaccia")))
 */


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* let frase = "la prima lettera va maiuscolas"

function upperFirst() {
    let words = frase.split(" ")
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(' ')
}

console.log(upperFirst()) */



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/



/* 
const giveMeRandom = function (n) {
    const arr = []
    for(let i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 10))
    }
    return arr
}
console.log(giveMeRandom(10))

 */




//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 

function area(l1,l2) {
    return l1 * l2
}

console.log(area(10, 70)) 

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(n) {
    const calcolo = Math.abs(n) - 19
    if(calcolo > 19) {
        return calcolo * 3
    } else {
        return calcolo
    }
}

console.log(crazyDiff(-39)) */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/


/* 
const codify = function (n) {
    if(n.startsWith('code')){
        return n 
    } else {
        return "code" + n
    }
}

console.log(codify(" ma che caz ")) 
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/



/* function check3and7(num) {
    if(num % 3 === 0 || num % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log(check3and7(140)) */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* let string = 'ciao'

function cutString() {
    const cut = string.slice(1, -1)
    return cut
}

console.log(cutString()) */

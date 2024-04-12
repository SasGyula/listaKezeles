import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { rendez, szures, torol } from "./adatKezelo.js";
/*
jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze le a táblázat sorait, tudjunk szűrni név alapján, tudjunk új adatot hozzáadni a táblázathoz, tudjuk törölni a táblázat egy sorát
*/
/*Függvények és eljárások
1. htmlOsszeallit(lista) -> txt | Összeállítja a táblázat html szerkezetét egy szöveges változóba
2. megjelenit(txt) - megjelenítette egy adott html elemben a paraméterében kapott szöveget
3. rendez(lista) -> rendezettLista | a paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.
4. adatHozzaadas(lista) -> kibővítettLista | összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába.; a függvémy akkor fut le ha rákattintunk a Hozzáad gombra.
5. torol(lista, id) ->tLista | kitörli a listából az adott id-jű  elemet, amelyikre kattintottunk.
Akkor fog lefutni, ha sor meletti töröl gombra kattintunk.
6. szures(lista) -> szurtLista | a keresőmezőbe beirt szöveget keresi a lista objektumainak név mezőjében, mindez akkor fut le ha beirunk valamit a keresőmezőbe.
*/
let irany = 1 /* 1 növektvő rendezés, -1 csökkenő rendezés */
function init(lista){
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny() 
    torolEsemeny()
}
init(emberekLISTA)
szuresEsemeny()


/*a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.*/
function rendezEsemeny(){
    const nevELEM = $(".adatok table th").eq(0)
    nevELEM.on("click", function(){
    const rLista= rendez(emberekLISTA,irany)
    console.log(rLista)
    init(rLista)
    irany*=(-1)
})
}
/*akkor kell lefutnia amikor megváltozik a keresőmező*/
function szuresEsemeny(){
    const keresoElem=$("#szuro")
    keresoElem.on("keyup", function(){
        let keresoSzoveg = keresoElem.val()
        const szLISTA = szures(emberekLISTA,keresoSzoveg);
        console.log(szLISTA)
        init(szLISTA);
})
}
function torolEsemeny(){
    const torolGOMB = $(".torol");
    torolGOMB.on("click", function(event){
    let id = event.target.id
    const LISTA = torol(emberekLISTA, id);
    init(LISTA)
})
}
/*Akkor fog lefutni, ha sor meletti töröl gombra kattintunk.*/


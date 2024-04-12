export function rendez(lista,irany){
    /*3. rendez(lista) -> rendezettLista | a paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.*/
    lista.sort(function(e1,e2){
        /*név szerint*/
        let eredmeny = 1;
        if(e1.nev < e2.nev){
            eredmeny = -1;
        }
        /*a sort minden lehetséges listaelem párt összehasonlít(név)
        ha a visszatérési értéke pozitív, akkor nem cserél, ha negatív, akkor cserél
        */
        return eredmeny*irany;
    })
    /*szorgalmi: írj egy olyan függvényt ami az ékezetes karatkerek átmenetileg kicseréli a Á-A ra és így rendezd! replaceAll()*/
    /* szorgalmi: további mezők szerinti rendezések megvalósítása*/
    return lista;
}

export function szures(lista, keresoSzoveg){
    /*szurtLista | a keresőmezőbe beirt szöveget keresi a lista objektumainak név mezőjében, mindez akkor fut le ha beirunk valamit a keresőmezőbe.*/
    const szurtLISTA = lista.filter(function(ember){
        return ember.nev.includes(keresoSzoveg);
    })
    
    return szurtLISTA;
}

export function torol(lista, id){
    /*torol(lista, id) ->tLista | kitörli a listából az adott id-jű  elemet, amelyikre kattintottunk.
    Akkor fog lefutni, ha sor meletti töröl gombra kattintunk.*/
    lista.splice(id,1);
    return lista;
}
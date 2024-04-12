# Listakezelős függvények gyakorlás

## Specifikáció
Jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze le a táblázat sorait, tudjunk szűrni név alapján, tudjunk új adatot hozzáadni a táblázathoz, tudjuk törölni a táblázat egy sorát.

## Metódusok

1. **htmlOsszeallit(lista)** -> txt | Összeállítja a táblázat html szerkezetét egy szöveges változóba
2. **megjelenit(txt)** - megjelenítette egy adott html elemben a paraméterében kapott szöveget
3. **rendez(lista)** -> rendezettLista | a paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.
4. **adatHozzaadas(lista)** -> kibővítettLista | összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába.; a függvémy akkor fut le ha rákattintunk a Hozzáad gombra.
5. **torol(lista, id)** ->tLista | kitörli a listából az adott id-jű  elemet, amelyikre kattintottunk.
Akkor fog lefutni, ha sor meletti töröl gombra kattintunk.
6. **szures(lista)** -> szurtLista | a keresőmezőbe beirt szöveget keresi a lista objektumainak név mezőjében, mindez akkor fut le ha beirunk valamit a keresőmezőbe.
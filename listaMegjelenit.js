export function htmlOsszeallit(lista) {
    let txt="<table class='table table-striped'>"
    txt+="<thead><tr><th>Név</th><th>Kor</th><th>Nem</th></tr></th><th></th></tr>"
    txt+="<tbody>"
    lista.forEach(elem, index => {
        txt+=`<tr>`
        for (const kulcs in elem) {
            /*objektumokat járhatunk be*/
            txt+= `<td>${elem[kulcs]}</td>`
        }
        txt+=`<td class='torol', index='${index}'>🗑️</td>`;
        txt+=`</tr></thead>`
    });
    txt+="</tbody></table>"
    return txt;
}
export function megjelenit(txt) {
    const divELEM=$(".adatok")
    divELEM.html(txt)
}
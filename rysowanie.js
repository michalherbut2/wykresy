import {malowanie, funkcja, i, dodaj,wzor} from './wykres.js';

const colors=["red","orange","yellow","green","blue","darkblue","purple"]

function linie(){
    malowanie()

    let tab=[]
    for(let i of wzor){
        let dane=i.childNodes
        tab=[]
        for(let j of dane)
            if(j.localName == 'input' && j.type == 'text')
                tab.push(j.value)
            
        funkcja(x=>eval(tab[0]),tab[1])
    }
}

linie()
document.addEventListener("click",linie)
document.addEventListener("keyup",linie)
i[0].addEventListener("click",dodaj)
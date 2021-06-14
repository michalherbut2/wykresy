const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
export const i = document.getElementsByTagName("input")
const wzory = document.getElementById("wzory")
export const wzor = document.getElementsByClassName("wzor")
const daleko = document.getElementById("daleko")
const c = document.getElementById("c")
let y
let skala
let początek
let pozPocz

const siatka="#13649f"
const numery="#a3744f"
const tlo="#122334"

export const dodaj=()=>{
    const div=document.createElement("div")
    const input1=document.createElement("input")
    const input2=document.createElement("input")
    const button=document.createElement("button")
    const br=document.createElement("br")
    button.innerHTML="X"
    div.classList.add("wzor")
    div.appendChild(input1)
    div.appendChild(br)
    div.appendChild(input2)
    button.addEventListener("click",()=>usun(button))
    div.appendChild(button)
    wzory.appendChild(div)
}

export const usun=e=>e.parentNode.remove()

const poziome = () => {
    for(let y = 50; y < 1000; y+=skala){
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1800, y)
        ctx.lineWidth = 1

        ctx.fillText(początek-((y-50)/skala), 470, y+8)
        if(y==500) ctx.lineWidth = 6 
        ctx.strokeStyle = siatka;
        ctx.stroke();
    }
}

const pionowe = () =>{
    let z=pozPocz       
    for(let x = 50; x < 1800; x+=skala){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 1000)
        ctx.lineWidth = 2
        ctx.fillText(z, x-6, 540)
        z++
        if(x==500) ctx.lineWidth = 6 
        ctx.strokeStyle = siatka;
        ctx.stroke();
    }
}

const pionowePi = () =>{
    let z=pozPocz
    for(let x = 9*Math.PI; x < 1800; x+=skala*Math.PI/2){
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 1000)
        ctx.lineWidth = 2 
        ctx.fillText(z/2+"π", x-25, 550)
        z++
        if(z==1) ctx.lineWidth = 6 
        ctx.strokeStyle = siatka;
        ctx.stroke();
    }
}

export const funkcja = (f, color) =>{
    ctx.beginPath()
    for(let x = -10; x <= 25; x+=.1){        
        y=f(x)
        ctx.lineTo(x*skala+500, -y*skala+500)
        if(y>10 || y<-10){
            y=f(x+.1)
            ctx.moveTo((x+.1)*skala+500, -y*skala+500)
        }
    }
    ctx.strokeStyle = color
    ctx.stroke()
}

export const malowanie = () =>{
    ctx.fillStyle = tlo;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = '24px Consolas';
    ctx.fillStyle = numery;
    
    if(daleko.checked){
        skala=50
        początek=9
        if(c.checked){
            pozPocz=-9
            pionowe()
        }else{
            pozPocz=-6
            pionowePi()
        }
    }else{
        skala=150
        początek=3
        pozPocz=-3
        if(c.checked){
            pionowe()
        }else{
            pozPocz=-2
            pionowePi()
        }
    }
    poziome()
    
    ctx.lineWidth = 6 
}
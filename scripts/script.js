
const hand = document.querySelector("#hand");
const regador = document.querySelector("#regador");
const pa = document.querySelector("#pa");
const foice = document.querySelector("#foice");

const handItem = document.querySelector("#hand-item");
const loja = document.querySelector("#store");
const modal = document.querySelector(".modal-store");
const fechar = document.querySelector("#fechar");
const dinheiro = document.querySelector("#dinheiro");
const items = document.querySelector("#items");

// Tutorial
const textoBtn = document.querySelector(".text-btn");
const textTutorial = document.querySelector(".texto");
const tutorial = document.querySelector(".tutorial-text");

const countFarm = document.querySelector(".count-farm");

const espantalho = document.querySelector("#espantalho");
const priceEspantalho = document.querySelector(".espantalho-price");

const farmStatus = document.querySelector("#farm-status");

const dropArea = document.querySelector(".coin-drop");

// Sons
const coinBuySound = new Audio("scripts/coin-buy.mp3");
const coinSound = new Audio("scripts/coin.mp3");
const foiceSound = new Audio("scripts/foice.mp3");
const paSound = new Audio("scripts/shovel.mp3");
const plantandoSound = new Audio("scripts/plantando.mp3");
const regadorSound = new Audio("scripts/regador.mp3");


// Plantações
const trigo = document.querySelector("#trigo");
const amora = document.querySelector("#amora");
const batata = document.querySelector("#batata");
const couveFlor = document.querySelector("#couve-flor");
const morango = document.querySelector("#morango");

// Contador de items
const countTrigo = document.querySelector(".trigo-count");
const countAmora = document.querySelector(".amora-count");
const countBatata = document.querySelector(".batata-count");
const countCouveFlor = document.querySelector(".couve-flor-count");
const countMorango = document.querySelector(".morango-count");

// Compras
const buyTrigo = document.querySelector("#buy-trigo");
const buyAmora = document.querySelector("#buy-amora");
const buyBatata = document.querySelector("#buy-batata");
const buyCouveFlor = document.querySelector("#buy-couve-flor");
const buyMorango = document.querySelector("#buy-morango");

// Terreno de plantio
const plant0 = document.querySelector("#plant0");
const plant1 = document.querySelector("#plant1");
const plant2 = document.querySelector("#plant2");
const plant3 = document.querySelector("#plant3");
const plant4 = document.querySelector("#plant4");
const plant5 = document.querySelector("#plant5");
const plant6 = document.querySelector("#plant6");
const plant7 = document.querySelector("#plant7");
const plant8 = document.querySelector("#plant8");
const plant9 = document.querySelector("#plant9");

// Colheita
const colher0 = document.querySelector("#colher0");
const colher1 = document.querySelector("#colher1");
const colher2 = document.querySelector("#colher2");
const colher3 = document.querySelector("#colher3");
const colher4 = document.querySelector("#colher4");
const colher5 = document.querySelector("#colher5");
const colher6 = document.querySelector("#colher6");
const colher7 = document.querySelector("#colher7");
const colher8 = document.querySelector("#colher8");
const colher9 = document.querySelector("#colher9");



let dinheiroJogador = 60;

let trigos = 0;
let amoras = 0;
let batatas = 0;
let couvesFlor = 0;
let morangos = 0;

function backgroundMusic() {
    const music01 = new Audio("scripts/bg-music01.mp3")
    const music02 = new Audio("scripts/bg-music02.mp3")
    const music03 = new Audio("scripts/bg-music03.mp3")
    const music04 = new Audio("scripts/bg-music04.mp3")
    const music05 = new Audio("scripts/bg-music05.mp3")

    let max = 5
    let min = 1
    let randomMusic = Math.floor(Math.random() * (max - min)) + min
    
    if (randomMusic == 1){
        music01.play()
        console.log(randomMusic)
    }
    if (randomMusic == 2){
        music02.play()
        console.log(randomMusic)
    }
    if (randomMusic == 3){
        music03.play()
        console.log(randomMusic)
    }
    if (randomMusic == 4){
        music04.play()
        console.log(randomMusic)
    }
    if (randomMusic == 6){
        music05.play()
        console.log(randomMusic)
    }

    setTimeout(backgroundMusic, 180000)
}

function dropCoin() {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    let maxDrop = 101
    let minDrop = 0
    const marginTopRandom = Math.floor(Math.random() * (maxDrop - minDrop)) + minDrop;
    const marginLeftRandom = Math.floor(Math.random() * (maxDrop - minDrop)) + minDrop;

    let top = marginTopRandom - 30
    let left = marginLeftRandom - 30

    if (top < 0){
        top = top + 30
    }
    if (left < 0){
       left = left + 30
    }

    drop.style.top = top + "%"
    drop.style.left = left + "%"
    
    drop.addEventListener("click", coletarCoin)

    dropArea.appendChild(drop)

    setTimeout(dropCoin, 90000) 

}

function coletarCoin() {
    coinSound.play()
    dinheiroJogador = dinheiroJogador + 2
    dinheiro.textContent = dinheiroJogador

    this.remove()
}



dropCoin()

function ararSolo() {
    if(farmStatus.getAttribute("src") == "assets/pa-pixelart.webp" && plant0.getAttribute("src") == "assets/broken-earth0.webp" && handItem.getAttribute("src") == "assets/pa-pixelart.webp"){
        plant0.setAttribute("src", "assets/earth0.jpg")
        plant1.setAttribute("src", "assets/earth0.jpg")
        plant2.setAttribute("src", "assets/earth0.jpg")
        plant3.setAttribute("src", "assets/earth0.jpg")
        plant4.setAttribute("src", "assets/earth0.jpg")
        plant5.setAttribute("src", "assets/earth0.jpg")
        plant6.setAttribute("src", "assets/earth0.jpg")
        plant7.setAttribute("src", "assets/earth0.jpg")
        plant8.setAttribute("src", "assets/earth0.jpg")
        plant9.setAttribute("src", "assets/earth0.jpg")

        farmStatus.setAttribute("src", "assets/regador-pixelart.webp")

        tutorial.classList.remove("hide-tutorial")
        textTutorial.textContent = "Agora vamos regar usando o regador na barra de inventário."
        
        paSound.play()
    }
}

function regarSolo() {
    if(farmStatus.getAttribute("src") == "assets/regador-pixelart.webp" && plant0.getAttribute("src") == "assets/earth0.jpg" && handItem.getAttribute("src") == "assets/regador-pixelart.webp") {
        plant0.setAttribute("src", "assets/earth.webp")
        plant1.setAttribute("src", "assets/earth.webp")
        plant2.setAttribute("src", "assets/earth.webp")
        plant3.setAttribute("src", "assets/earth.webp")
        plant4.setAttribute("src", "assets/earth.webp")
        plant5.setAttribute("src", "assets/earth.webp")
        plant6.setAttribute("src", "assets/earth.webp")
        plant7.setAttribute("src", "assets/earth.webp")
        plant8.setAttribute("src", "assets/earth.webp")
        plant9.setAttribute("src", "assets/earth.webp")
        
        farmStatus.classList.remove("counting")
        farmStatus.classList.add("hide")

        tutorial.classList.remove("hide-tutorial")
        textTutorial.textContent = "Que tal entrar na loja agora e comprar algo para plantar? Cada plantação tem seu próprio tempo de colheita."
        
        regadorSound.play()
    }
}

function comprarEspantalho() {
    if(priceEspantalho.textContent = "R$50" && dinheiroJogador >= 50) {
        
        espantalho.setAttribute("src", "assets/espantalho-pixelart.webp")

        dinheiroJogador = dinheiroJogador - 50
        dinheiro.textContent = dinheiroJogador

        priceEspantalho.textContent = ""

        tutorial.classList.remove("hide-tutorial")
        textTutorial.textContent = "Use a pá para preparar o solo infértil."

        farmStatus.classList.add("counting")
    }
}


function plantar() {
    if (handItem.getAttribute("src") == "assets/trigo-pixel.webp" && plant0.getAttribute("src") == "assets/earth.webp") {
        plant0.setAttribute("src", "assets/1earth.webp")
        plant1.setAttribute("src", "assets/1earth.webp")
        plant2.setAttribute("src", "assets/1earth.webp")
        plant3.setAttribute("src", "assets/1earth.webp")
        plant4.setAttribute("src", "assets/1earth.webp")
        plant5.setAttribute("src", "assets/1earth.webp")
        plant6.setAttribute("src", "assets/1earth.webp")
        plant7.setAttribute("src", "assets/1earth.webp")
        plant8.setAttribute("src", "assets/1earth.webp")
        plant9.setAttribute("src", "assets/1earth.webp")

        countFarm.classList.add("counting")

        colher0.setAttribute("src", "assets/trigo-pixel.webp")
        colher1.setAttribute("src", "assets/trigo-pixel.webp")
        colher2.setAttribute("src", "assets/trigo-pixel.webp")
        colher3.setAttribute("src", "assets/trigo-pixel.webp")
        colher4.setAttribute("src", "assets/trigo-pixel.webp")
        colher5.setAttribute("src", "assets/trigo-pixel.webp")
        colher6.setAttribute("src", "assets/trigo-pixel.webp")
        colher7.setAttribute("src", "assets/trigo-pixel.webp")
        colher8.setAttribute("src", "assets/trigo-pixel.webp")
        colher9.setAttribute("src", "assets/trigo-pixel.webp")

        colher0.classList.add("counting")
        colher1.classList.add("counting")
        colher2.classList.add("counting")
        colher3.classList.add("counting")
        colher4.classList.add("counting")
        colher5.classList.add("counting")
        colher6.classList.add("counting")
        colher7.classList.add("counting")
        colher8.classList.add("counting")
        colher9.classList.add("counting")
       
        setTimeout(tempoPlantacao, 15000)

        trigos = trigos - 1
        countTrigo.textContent = trigos
        

        if(trigos < 1){
            trigo.setAttribute("src", "assets/block-trigo-pixel.webp")
        }

    }

    if (handItem.getAttribute("src") == "assets/amora-pixel.webp" && plant0.getAttribute("src") == "assets/earth.webp") {
        plant0.setAttribute("src", "assets/1earth.webp")
        plant1.setAttribute("src", "assets/1earth.webp")
        plant2.setAttribute("src", "assets/1earth.webp")
        plant3.setAttribute("src", "assets/1earth.webp")
        plant4.setAttribute("src", "assets/1earth.webp")
        plant5.setAttribute("src", "assets/1earth.webp")
        plant6.setAttribute("src", "assets/1earth.webp")
        plant7.setAttribute("src", "assets/1earth.webp")
        plant8.setAttribute("src", "assets/1earth.webp")
        plant9.setAttribute("src", "assets/1earth.webp")

        colher0.setAttribute("src", "assets/amora-pixel.webp")
        colher1.setAttribute("src", "assets/amora-pixel.webp")
        colher2.setAttribute("src", "assets/amora-pixel.webp")
        colher3.setAttribute("src", "assets/amora-pixel.webp")
        colher4.setAttribute("src", "assets/amora-pixel.webp")
        colher5.setAttribute("src", "assets/amora-pixel.webp")
        colher6.setAttribute("src", "assets/amora-pixel.webp")
        colher7.setAttribute("src", "assets/amora-pixel.webp")
        colher8.setAttribute("src", "assets/amora-pixel.webp")
        colher9.setAttribute("src", "assets/amora-pixel.webp")

        colher0.classList.add("counting")
        colher1.classList.add("counting")
        colher2.classList.add("counting")
        colher3.classList.add("counting")
        colher4.classList.add("counting")
        colher5.classList.add("counting")
        colher6.classList.add("counting")
        colher7.classList.add("counting")
        colher8.classList.add("counting")
        colher9.classList.add("counting")

        countFarm.classList.add("counting")

        setTimeout(tempoPlantacao, 45000)

        amoras = amoras - 1
        countAmora.textContent = amoras

        if(amoras < 1){
            amora.setAttribute("src", "assets/block-amora-pixel.webp")
        }
    } 

    if (handItem.getAttribute("src") == "assets/batata-pixel.webp" && plant0.getAttribute("src") == "assets/earth.webp") {
        plant0.setAttribute("src", "assets/1earth.webp")
        plant1.setAttribute("src", "assets/1earth.webp")
        plant2.setAttribute("src", "assets/1earth.webp")
        plant3.setAttribute("src", "assets/1earth.webp")
        plant4.setAttribute("src", "assets/1earth.webp")
        plant5.setAttribute("src", "assets/1earth.webp")
        plant6.setAttribute("src", "assets/1earth.webp")
        plant7.setAttribute("src", "assets/1earth.webp")
        plant8.setAttribute("src", "assets/1earth.webp")
        plant9.setAttribute("src", "assets/1earth.webp")

        colher0.setAttribute("src", "assets/batata-pixel.webp")
        colher1.setAttribute("src", "assets/batata-pixel.webp")
        colher2.setAttribute("src", "assets/batata-pixel.webp")
        colher3.setAttribute("src", "assets/batata-pixel.webp")
        colher4.setAttribute("src", "assets/batata-pixel.webp")
        colher5.setAttribute("src", "assets/batata-pixel.webp")
        colher6.setAttribute("src", "assets/batata-pixel.webp")
        colher7.setAttribute("src", "assets/batata-pixel.webp")
        colher8.setAttribute("src", "assets/batata-pixel.webp")
        colher9.setAttribute("src", "assets/batata-pixel.webp")

        colher0.classList.add("counting")
        colher1.classList.add("counting")
        colher2.classList.add("counting")
        colher3.classList.add("counting")
        colher4.classList.add("counting")
        colher5.classList.add("counting")
        colher6.classList.add("counting")
        colher7.classList.add("counting")
        colher8.classList.add("counting")
        colher9.classList.add("counting")

        countFarm.classList.add("counting")

        setTimeout(tempoPlantacao, 60000)

        batatas = batatas - 1
        countBatata.textContent = batatas

        if(batatas < 1){
            batata.setAttribute("src", "assets/block-batata-pixel.webp")
        }
    }

    if (handItem.getAttribute("src") == "assets/couve-flor-pixel.webp" && plant0.getAttribute("src") == "assets/earth.webp") {
        plant0.setAttribute("src", "assets/1earth.webp")
        plant1.setAttribute("src", "assets/1earth.webp")
        plant2.setAttribute("src", "assets/1earth.webp")
        plant3.setAttribute("src", "assets/1earth.webp")
        plant4.setAttribute("src", "assets/1earth.webp")
        plant5.setAttribute("src", "assets/1earth.webp")
        plant6.setAttribute("src", "assets/1earth.webp")
        plant7.setAttribute("src", "assets/1earth.webp")
        plant8.setAttribute("src", "assets/1earth.webp")
        plant9.setAttribute("src", "assets/1earth.webp")

        colher0.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher1.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher2.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher3.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher4.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher5.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher6.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher7.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher8.setAttribute("src", "assets/couve-flor-pixel.webp")
        colher9.setAttribute("src", "assets/couve-flor-pixel.webp")

        colher0.classList.add("counting")
        colher1.classList.add("counting")
        colher2.classList.add("counting")
        colher3.classList.add("counting")
        colher4.classList.add("counting")
        colher5.classList.add("counting")
        colher6.classList.add("counting")
        colher7.classList.add("counting")
        colher8.classList.add("counting")
        colher9.classList.add("counting")

        countFarm.classList.add("counting")

        setTimeout(tempoPlantacao, 90000)

        couvesFlor = couvesFlor - 1
        countCouveFlor.textContent = couvesFlor

        if(couvesFlor < 1){
            couveFlor.setAttribute("src", "assets/block-couve-flor-pixel.webp")
        }
    }
    
    if (handItem.getAttribute("src") == "assets/morango-pixel.webp" && plant0.getAttribute("src") == "assets/earth.webp") {
        plant0.setAttribute("src", "assets/1earth.webp")
        plant1.setAttribute("src", "assets/1earth.webp")
        plant2.setAttribute("src", "assets/1earth.webp")
        plant3.setAttribute("src", "assets/1earth.webp")
        plant4.setAttribute("src", "assets/1earth.webp")
        plant5.setAttribute("src", "assets/1earth.webp")
        plant6.setAttribute("src", "assets/1earth.webp")
        plant7.setAttribute("src", "assets/1earth.webp")
        plant8.setAttribute("src", "assets/1earth.webp")
        plant9.setAttribute("src", "assets/1earth.webp")

        colher0.setAttribute("src", "assets/morango-pixel.webp")
        colher1.setAttribute("src", "assets/morango-pixel.webp")
        colher2.setAttribute("src", "assets/morango-pixel.webp")
        colher3.setAttribute("src", "assets/morango-pixel.webp")
        colher4.setAttribute("src", "assets/morango-pixel.webp")
        colher5.setAttribute("src", "assets/morango-pixel.webp")
        colher6.setAttribute("src", "assets/morango-pixel.webp")
        colher7.setAttribute("src", "assets/morango-pixel.webp")
        colher8.setAttribute("src", "assets/morango-pixel.webp")
        colher9.setAttribute("src", "assets/morango-pixel.webp")

        colher0.classList.add("counting")
        colher1.classList.add("counting")
        colher2.classList.add("counting")
        colher3.classList.add("counting")
        colher4.classList.add("counting")
        colher5.classList.add("counting")
        colher6.classList.add("counting")
        colher7.classList.add("counting")
        colher8.classList.add("counting")
        colher9.classList.add("counting")

        countFarm.classList.add("counting")

        setTimeout(tempoPlantacao, 186000)

        morangos = morangos - 1
        countMorango.textContent = morangos

        if(morangos < 1){
            morango.setAttribute("src", "assets/block-morango-pixel.webp")
        }
    }
}

function tempoPlantacao() {
    countFarm.classList.remove("counting")
    farmStatus.classList.remove("hide")
    farmStatus.setAttribute("src", "assets/foice-pixelart.webp")

    plant0.setAttribute("src", "assets/2earth.webp")
    plant1.setAttribute("src", "assets/2earth.webp")
    plant2.setAttribute("src", "assets/2earth.webp")
    plant3.setAttribute("src", "assets/2earth.webp")
    plant4.setAttribute("src", "assets/2earth.webp")
    plant5.setAttribute("src", "assets/2earth.webp")
    plant6.setAttribute("src", "assets/2earth.webp")
    plant7.setAttribute("src", "assets/2earth.webp")
    plant8.setAttribute("src", "assets/2earth.webp")
    plant9.setAttribute("src", "assets/2earth.webp")

    colher0.classList.remove("hide")
    colher1.classList.remove("hide")
    colher2.classList.remove("hide")
    colher3.classList.remove("hide")
    colher4.classList.remove("hide")
    colher5.classList.remove("hide")
    colher6.classList.remove("hide")
    colher7.classList.remove("hide")
    colher8.classList.remove("hide")
    colher9.classList.remove("hide")

}

function colherPlantacao() {
    if (colher0.getAttribute("src") == "assets/trigo-pixel.webp") {
        dinheiroJogador = dinheiroJogador + 13
    }

    if (colher0.getAttribute("src") == "assets/amora-pixel.webp") {
        dinheiroJogador = dinheiroJogador + 32
    }

    if (colher0.getAttribute("src") == "assets/batata-pixel.webp") {
        dinheiroJogador = dinheiroJogador + 78
    }

    if (colher0.getAttribute("src") == "assets/couve-flor-pixel.webp") {
        dinheiroJogador = dinheiroJogador + 150
    }

    if (colher0.getAttribute("src") == "assets/morango-pixel.webp") {
        dinheiroJogador = dinheiroJogador + 375
    }


    colher0.classList.add("hide")
    colher1.classList.add("hide")
    colher2.classList.add("hide")
    colher3.classList.add("hide")
    colher4.classList.add("hide")
    colher5.classList.add("hide")
    colher6.classList.add("hide")
    colher7.classList.add("hide")
    colher8.classList.add("hide")
    colher9.classList.add("hide")

    plant0.setAttribute("src", "assets/earth.webp")
    plant1.setAttribute("src", "assets/earth.webp")
    plant2.setAttribute("src", "assets/earth.webp")
    plant3.setAttribute("src", "assets/earth.webp")
    plant4.setAttribute("src", "assets/earth.webp")
    plant5.setAttribute("src", "assets/earth.webp")
    plant6.setAttribute("src", "assets/earth.webp")
    plant7.setAttribute("src", "assets/earth.webp")
    plant8.setAttribute("src", "assets/earth.webp")
    plant9.setAttribute("src", "assets/earth.webp")

    farmStatus.classList.add("hide")

    dinheiro.textContent = dinheiroJogador
}

// Funções para comprar
function comprarTrigo() {
    if (dinheiroJogador >= 10) {
        dinheiroJogador = dinheiroJogador - 10

        dinheiro.textContent = dinheiroJogador

        trigos = trigos + 1
        countTrigo.textContent = trigos

        coinBuySound.play()
    } else {
        alert("Dinheiro insuficiente!")
    }

    if(trigos >= 1){
        trigo.setAttribute("src", "assets/trigo-pixel.webp")
    } else {
        trigo.setAttribute("src", "assets/block-trigo-pixel.webp")
    }
}
function comprarAmora() {
    if (dinheiroJogador >= 25) {
        dinheiroJogador = dinheiroJogador - 25

        dinheiro.textContent = dinheiroJogador

        amoras = amoras + 1
        countAmora.textContent = amoras

        coinBuySound.play()
    } else {
        alert("Dinheiro insuficiente!")
    }

    if(amoras >= 1){
        amora.setAttribute("src", "assets/amora-pixel.webp")
    }else {
        amora.setAttribute("src", "assets/block-amora-pixel.webp")
    }
}
function comprarBatata() {
    if (dinheiroJogador >= 55) {
        dinheiroJogador = dinheiroJogador - 55

        dinheiro.textContent = dinheiroJogador

        batatas = batatas + 1
        countBatata.textContent = batatas

        coinBuySound.play()
    } else {
        alert("Dinheiro insuficiente!")
    }

    if(batatas >= 1){
        batata.setAttribute("src", "assets/batata-pixel.webp")
    }else {
        batata.setAttribute("src", "assets/block-batata-pixel.webp")
    }
}
function comprarCouveFlor() {
    if (dinheiroJogador >= 120) {
        dinheiroJogador = dinheiroJogador - 120

        dinheiro.textContent = dinheiroJogador

        couvesFlor = couvesFlor + 1
        countCouveFlor.textContent = couvesFlor

        coinBuySound.play()
    } else {
        alert("Dinheiro insuficiente!")
    }

    if(couvesFlor >= 1){
        couveFlor.setAttribute("src", "assets/couve-flor-pixel.webp")
    }else {
        couveFlor.setAttribute("src", "assets/block-couve-flor-pixel.webp")
    }
}
function comprarMorango() {
    if (dinheiroJogador >= 300) {
        dinheiroJogador = dinheiroJogador - 300

        dinheiro.textContent = dinheiroJogador

        morangos = morangos + 1
        countMorango.textContent = morangos 

        coinBuySound.play()
    } else {
        alert("Dinheiro insuficiente!")
    }

    if(morangos >= 1){
        morango.setAttribute("src", "assets/morango-pixel.webp")
    }else {
        morango.setAttribute("src", "assets/block-morango-pixel.webp")
    }
}

function openModal() {
    modal.classList.add("open-modal")
}

function closeModal() {
    modal.classList.remove("open-modal")
}

// Eventos de segurar item
hand.addEventListener("click", () => {
    handItem.setAttribute("src", "assets/hand-pixelart.webp");
});
regador.addEventListener("click", () => {
   handItem.setAttribute("src", "assets/regador-pixelart.webp");
});
pa.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/pa-pixelart.webp")
})
foice.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/foice-pixelart.webp")
})
trigo.addEventListener("click", ()=> {
    if(trigo.getAttribute("src") == "assets/trigo-pixel.webp"){
        handItem.setAttribute("src", "assets/trigo-pixel.webp")
    } else {
        handItem.setAttribute("src", "assets/block-trigo-pixel.webp")
    }
});
amora.addEventListener("click", ()=> {
    if(amora.getAttribute("src") == "assets/amora-pixel.webp"){
        handItem.setAttribute("src", "assets/amora-pixel.webp")
    } else {
        handItem.setAttribute("src", "assets/block-amora-pixel.webp")
    }
});
batata.addEventListener("click", ()=> {
    if(batata.getAttribute("src") == "assets/batata-pixel.webp"){
        handItem.setAttribute("src", "assets/batata-pixel.webp")
    } else {
        handItem.setAttribute("src", "assets/block-batata-pixel.webp")
    }
});
couveFlor.addEventListener("click", ()=> {
        if(couveFlor.getAttribute("src") == "assets/couve-flor-pixel.webp"){
        handItem.setAttribute("src", "assets/couve-flor-pixel.webp")
    } else {
        handItem.setAttribute("src", "assets/block-couve-flor-pixel.webp")
    }    
});    
morango.addEventListener("click", ()=> {
    if(morango.getAttribute("src") == "assets/morango-pixel.webp"){
        handItem.setAttribute("src", "assets/morango-pixel.webp")
    } else {
        handItem.setAttribute("src", "assets/block-morango-pixel.webp")
    }    
});    


// Eventos de click para plantar
plant0.addEventListener("click", () => {
    plantar()
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant1.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant2.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant3.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant4.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant5.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant6.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant7.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant8.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    
plant9.addEventListener("click", () => {
    plantar();
    ararSolo()
    regarSolo()
    plantandoSound.play()
});    

function coinSoundColheita() {
    coinSound.play()
}


// Eventos de click para colher
colher0.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher1.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher2.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher3.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher4.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher5.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher6.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher7.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher8.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    
colher9.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/foice-pixelart.webp") {
        colherPlantacao();
        foiceSound.play()
        setTimeout(coinSoundColheita, 500)
    } else {
        alert("Selecione a mão para colher!")
    }    
})    


// Loja
loja.addEventListener("click", ()=> {
    openModal();
})    
fechar.addEventListener("click", ()=> {
    closeModal();
})    


// Eventos de click para comprar
buyTrigo.addEventListener("click", ()=> {
    comprarTrigo();
})    
buyAmora.addEventListener("click", ()=> {
    comprarAmora();
})    
buyBatata.addEventListener("click", ()=> {
    comprarBatata();
})    
buyCouveFlor.addEventListener("click", ()=> {
    comprarCouveFlor();
})    
buyMorango.addEventListener("click", ()=> {
    comprarMorango();
})    


priceEspantalho.addEventListener("click", ()=> {
    comprarEspantalho()
    farmStatus.classList.remove("hide")
    coinBuySound.play()
})   

priceEspantalho.addEventListener("click", backgroundMusic)

textoBtn.addEventListener("click", ()=> {
    tutorial.classList.add("hide-tutorial")
    textTutorial.textContent = ""
})


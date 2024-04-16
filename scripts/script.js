const regador = document.querySelector("#regador");
const hand = document.querySelector("#hand");
const handItem = document.querySelector("#hand-item");
const trigo = document.querySelector("#trigo");
const loja = document.querySelector("#store");
const modal = document.querySelector(".modal-store");
const fechar = document.querySelector("#fechar");
const dinheiro = document.querySelector("#dinheiro");
const acai = document.querySelector("#acai");
const amora = document.querySelector("#amora");
const couveFlor = document.querySelector("#couve-flor");
const morango = document.querySelector("#morango");
const items = document.querySelector("#items");

const buyTrigo = document.querySelector("#buy-trigo");
const buyCouveFlor = document.querySelector("#buy-couve-flor");
const buyMorango = document.querySelector("#buy-morango");
const buyAmora = document.querySelector("#buy-amora");
const buyAcai = document.querySelector("#buy-acai");

const plant0 = document.querySelector("#plant");
const plant1 = document.querySelector("#plant1");
const plant2 = document.querySelector("#plant2");
const plant3 = document.querySelector("#plant3");
const plant4 = document.querySelector("#plant4");
const plant5 = document.querySelector("#plant5");

const colher0 = document.querySelector("#colher0");
const colher1 = document.querySelector("#colher1");
const colher2 = document.querySelector("#colher2");
const colher3 = document.querySelector("#colher3");
const colher4 = document.querySelector("#colher4");
const colher5 = document.querySelector("#colher5");

let dinheiroJogador = 0;

function plantar() {
    if (handItem.getAttribute("src") == "assets/trigo.png" && plant0.getAttribute("src") == "assets/earth.png") {
        plant0.setAttribute("src", "assets/trigo.png")
        plant1.setAttribute("src", "assets/trigo.png")
        plant2.setAttribute("src", "assets/trigo.png")
        plant3.setAttribute("src", "assets/trigo.png")
        plant4.setAttribute("src", "assets/trigo.png")
        plant5.setAttribute("src", "assets/trigo.png")

        setTimeout(tempoPlantacao, 15000)
    }

    if (handItem.getAttribute("src") == "assets/couve-flor.webp" && plant0.getAttribute("src") == "assets/earth.png") {
        plant0.setAttribute("src", "assets/couve-flor.webp")
        plant1.setAttribute("src", "assets/couve-flor.webp")
        plant2.setAttribute("src", "assets/couve-flor.webp")
        plant3.setAttribute("src", "assets/couve-flor.webp")
        plant4.setAttribute("src", "assets/couve-flor.webp")
        plant5.setAttribute("src", "assets/couve-flor.webp")

        setTimeout(tempoPlantacao, 45000)
    } 

    if (handItem.getAttribute("src") == "assets/morango.webp" && plant0.getAttribute("src") == "assets/earth.png") {
        plant0.setAttribute("src", "assets/morango.webp")
        plant1.setAttribute("src", "assets/morango.webp")
        plant2.setAttribute("src", "assets/morango.webp")
        plant3.setAttribute("src", "assets/morango.webp")
        plant4.setAttribute("src", "assets/morango.webp")
        plant5.setAttribute("src", "assets/morango.webp")

        setTimeout(tempoPlantacao, 60000)
    }

    if (handItem.getAttribute("src") == "assets/amora.webp" && plant0.getAttribute("src") == "assets/earth.png") {
        plant0.setAttribute("src", "assets/amora.webp")
        plant1.setAttribute("src", "assets/amora.webp")
        plant2.setAttribute("src", "assets/amora.webp")
        plant3.setAttribute("src", "assets/amora.webp")
        plant4.setAttribute("src", "assets/amora.webp")
        plant5.setAttribute("src", "assets/amora.webp")

        setTimeout(tempoPlantacao, 90000)
    }
    
    if (handItem.getAttribute("src") == "assets/acai.png" && plant0.getAttribute("src") == "assets/earth.png") {
        plant0.setAttribute("src", "assets/acai.png")
        plant1.setAttribute("src", "assets/acai.png")
        plant2.setAttribute("src", "assets/acai.png")
        plant3.setAttribute("src", "assets/acai.png")
        plant4.setAttribute("src", "assets/acai.png")
        plant5.setAttribute("src", "assets/acai.png")

        setTimeout(tempoPlantacao, 186000)
    }
}

function tempoPlantacao() {
    colher0.classList.add("colher")
    colher1.classList.add("colher")
    colher2.classList.add("colher")
    colher3.classList.add("colher")
    colher4.classList.add("colher")
    colher5.classList.add("colher")
}

function colherPlantacao() {
    if (plant0.getAttribute("src") == "assets/trigo.png") {
        dinheiroJogador = dinheiroJogador + 13
    }

    if (plant0.getAttribute("src") == "assets/couve-flor.webp") {
        dinheiroJogador = dinheiroJogador + 32
    }

    if (plant0.getAttribute("src") == "assets/morango.webp") {
        dinheiroJogador = dinheiroJogador + 78
    }

    if (plant0.getAttribute("src") == "assets/amora.webp") {
        dinheiroJogador = dinheiroJogador + 150
    }

    if (plant0.getAttribute("src") == "assets/acai.png") {
        dinheiroJogador = dinheiroJogador + 375
    }


    colher0.classList.remove("colher")
    colher1.classList.remove("colher")
    colher2.classList.remove("colher")
    colher3.classList.remove("colher")
    colher4.classList.remove("colher")
    colher5.classList.remove("colher")

    plant0.setAttribute("src", "assets/earth.png")
    plant1.setAttribute("src", "assets/earth.png")
    plant2.setAttribute("src", "assets/earth.png")
    plant3.setAttribute("src", "assets/earth.png")
    plant4.setAttribute("src", "assets/earth.png")
    plant5.setAttribute("src", "assets/earth.png")

    dinheiro.textContent = dinheiroJogador

}

function comprarTrigo() {
    if (dinheiroJogador >= 10) {
        dinheiroJogador = dinheiroJogador - 10

        dinheiro.textContent = dinheiroJogador
    } else {
        alert("Dinheiro insuficiente!")
    }
}

function comprarCouveFlor() {
    if (dinheiroJogador >= 25) {
        dinheiroJogador = dinheiroJogador - 25

        dinheiro.textContent = dinheiroJogador
    } else {
        alert("Dinheiro insuficiente!")
    }
}

function comprarMorango() {
    if (dinheiroJogador >= 55) {
        dinheiroJogador = dinheiroJogador - 55

        dinheiro.textContent = dinheiroJogador
    } else {
        alert("Dinheiro insuficiente!")
    }
}

function comprarAmora() {
    if (dinheiroJogador >= 120) {
        dinheiroJogador = dinheiroJogador - 120

        dinheiro.textContent = dinheiroJogador
    } else {
        alert("Dinheiro insuficiente!")
    }
}

function comprarAcai() {
    if (dinheiroJogador >= 300) {
        dinheiroJogador = dinheiroJogador - 300

        dinheiro.textContent = dinheiroJogador
    } else {
        alert("Dinheiro insuficiente!")
    }
}

function openModal() {
    modal.classList.add("open-modal")
}

function closeModal() {
    modal.classList.remove("open-modal")
}

regador.addEventListener("click", () => {
   handItem.setAttribute("src", "assets/regador.png");
});

hand.addEventListener("click", () => {
    handItem.setAttribute("src", "assets/hand.webp");
});

trigo.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/trigo.png");
});

couveFlor.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/couve-flor.webp");
});

morango.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/morango.webp");
});

amora.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/amora.webp");
});

acai.addEventListener("click", ()=> {
    handItem.setAttribute("src", "assets/acai.png");
});

plant0.addEventListener("click", () => {
    plantar();
});
plant1.addEventListener("click", () => {
    plantar();
});
plant2.addEventListener("click", () => {
    plantar();
});
plant3.addEventListener("click", () => {
    plantar();
});
plant4.addEventListener("click", () => {
    plantar();
});
plant5.addEventListener("click", () => {
    plantar();
});

colher0.addEventListener("click", ()=> {
    if (handItem.getAttribute("src") == "assets/hand.webp") {
        colherPlantacao();
    } else {
        alert("Selecione a mão para colher!")
    }
})

loja.addEventListener("click", ()=> {
    openModal();
})

fechar.addEventListener("click", ()=> {
    closeModal();
})

buyTrigo.addEventListener("click", ()=> {
    comprarTrigo();
})

buyCouveFlor.addEventListener("click", ()=> {
    comprarCouveFlor();
})

buyMorango.addEventListener("click", ()=> {
    comprarMorango();
})

buyAmora.addEventListener("click", ()=> {
    comprarAmora();
})

buyAcai.addEventListener("click", ()=> {
    comprarAcai();
})







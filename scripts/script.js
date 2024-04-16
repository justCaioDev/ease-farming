const regador = document.querySelector("#regador");
const hand = document.querySelector("#hand");
const handItem = document.querySelector("#hand-item");
const trigo = document.querySelector("#trigo");
const loja = document.querySelector("#store");
const modal = document.querySelector(".modal-store");
const fechar = document.querySelector("#fechar")

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

function plantar() {
    if (handItem.getAttribute("src") == "../assets/trigo.png") {
        plant0.setAttribute("src", "../assets/trigo.png")
        plant1.setAttribute("src", "../assets/trigo.png")
        plant2.setAttribute("src", "../assets/trigo.png")
        plant3.setAttribute("src", "../assets/trigo.png")
        plant4.setAttribute("src", "../assets/trigo.png")
        plant5.setAttribute("src", "../assets/trigo.png")

        setTimeout(tempoPlantacao, 10000)
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
    colher0.classList.remove("colher")
    colher1.classList.remove("colher")
    colher2.classList.remove("colher")
    colher3.classList.remove("colher")
    colher4.classList.remove("colher")
    colher5.classList.remove("colher")

    plant0.setAttribute("src", "../assets/earth.png")
    plant1.setAttribute("src", "../assets/earth.png")
    plant2.setAttribute("src", "../assets/earth.png")
    plant3.setAttribute("src", "../assets/earth.png")
    plant4.setAttribute("src", "../assets/earth.png")
    plant5.setAttribute("src", "../assets/earth.png")
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
    if (handItem.getAttribute("src") == "../assets/hand.webp") {
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






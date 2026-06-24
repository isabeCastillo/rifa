const numero = document.getElementById("numero");

const btnEliminado = document.getElementById("btnEliminado");
const btnGanador = document.getElementById("btnGanador");

const listaEliminados = document.getElementById("listaEliminados");
const listaGanadores = document.getElementById("listaGanadores");

let participantes = [];

// Crear participantes del 1 al 120
for(let i = 1; i <= 201; i++){
    participantes.push(i);
}
function animarSeleccion(tipo){
    if(participantes.length === 0){
        numero.innerHTML = "FIN";
        return;
    }
    btnEliminado.disabled = true;
    btnGanador.disabled = true;
    let animacion = setInterval(() => {
        let random = Math.floor(Math.random() * 201) + 1;
        numero.innerHTML = random;
    }, 80);
    setTimeout(() => {
        clearInterval(animacion);
        let indice = Math.floor(Math.random() * participantes.length);
        let seleccionado = participantes[indice];
        numero.innerHTML = seleccionado;
        numero.classList.add("ganador-efecto");
        setTimeout(() => {
            numero.classList.remove("ganador-efecto");
        }, 1000);
        participantes.splice(indice, 1);
        let li = document.createElement("li");
        if(tipo === "eliminado"){
            li.textContent = "❌ Eliminado: " + seleccionado;
            listaEliminados.prepend(li);
        }else{
            li.textContent = "🏆 Ganador: " + seleccionado;
            listaGanadores.prepend(li);
        }
        btnEliminado.disabled = false;
        btnGanador.disabled = false;
    }, 3000);
}
btnEliminado.addEventListener("click", () => {
    animarSeleccion("eliminado");
});
btnGanador.addEventListener("click", () => {
    animarSeleccion("ganador");
});
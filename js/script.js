const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muñeco = document.getElementById("muñeco");
const rigthInfo = document.getElementById("rigthInfo");
const rigth = document.getElementById("rigth");


let remplazar = [
    ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],
]

const remplace = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;
    muñeco.classList.add("oculto");
    ingresoTexto.value= ""
    rigthInfo.style.display = "none";
    botonCopiar.style.display = "block";
    rigth.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

botonEncriptar.addEventListener("click",()=>{
    const texto = ingresoTexto.value. toLowerCase()
    function encriptar(nuevoTexto){
        for(let i = 0; i <remplazar.length; i++){
            if(nuevoTexto.includes(remplazar[i][0])){
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return nuevoTexto
    }
    // const textoEncriptado = encriptar(texto)
    remplace(encriptar(texto));
});

botonDesencriptar.addEventListener("click",()=>{
    const texto = ingresoTexto.value.toLowerCase()
    function desencriptar(nuevoTexto){
        for(let i = 0; i < remplazar.length;i++){
            if(nuevoTexto.includes(remplazar[i][1])){
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0])
            };
        };
        return nuevoTexto
    }
    // const textoDesencriptado = desencriptar(texto);
    remplace(desencriptar(texto))
    // mensajeFinal.innerHTML = textoDesencriptado;
})

botonCopiar.addEventListener("click",() => {
    let texto = mensajeFinal;
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");

        mensajeFinal.innerHTML = " ";

        muñeco.classList.remove("oculto");

        rigthInfo.style.display = "block";
        botonCopiar.style.display = "none";
        rigth.classList.remove("ajustar");
        mensajeFinal.classList.remove("ajustar");
        ingresoTexto.focus();
})





// ingresoTexto

// botonDesencriptar
// botonCopiar
// mensajeFinal
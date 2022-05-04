const inputTexto = document.querySelector("#ingresarTexto");
const mensaje = document.querySelector("#resultadoTexto");

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    event.preventDefault();
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    event.preventDefault();
}

function encriptar(stringTexto){
    var encriptacion = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringTexto = stringTexto.toLowerCase();
    for(var i=0; i<encriptacion.length; i++){
        if(stringTexto.includes(encriptacion[i][0])){
            stringTexto = stringTexto.replaceAll(encriptacion[i][0],encriptacion[i][1]);
        }
    }
    return stringTexto;
}

function desencriptar(stringTexto){
    var encriptacion = [["i","imes"],["a","ai"],["e","enter"],["o","ober"],["u","ufat"]];
    stringTexto = stringTexto.toLowerCase();
    for(var i=0; i<encriptacion.length; i++){
        if(stringTexto.includes(encriptacion[i][0])){
            stringTexto = stringTexto.replaceAll(encriptacion[i][1],encriptacion[i][0]);
        }
    }
    return stringTexto;
}
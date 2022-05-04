const inputTexto = document.querySelector("#ingresarTexto");
const mensaje = document.querySelector("#resultadoTexto");

function botonEncriptar(){
    document.getElementById("resultadoTexto").style.display= 'block';
    document.getElementById("botonCopiar").style.display= 'block';
    document.getElementById("mensajeNoEncontrado").style.display= 'none';
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    event.preventDefault();
}

function botonDesencriptar(){
    document.getElementById("resultadoTexto").style.display= 'block';
    document.getElementById("botonCopiar").style.display= 'block';
    document.getElementById("mensajeNoEncontrado").style.display= 'none';
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

function copiar() {
    var content = document.getElementById('resultadoTexto');
    content.select();
    document.execCommand('copy');
    alert("Se copio:\n"+content.value);
    event.preventDefault();
    var content2 = document.getElementById('ingresarTexto');
    content2.select();
    document.execCommand('selectAll');

}
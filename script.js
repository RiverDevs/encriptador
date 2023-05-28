const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

function encriptar(stringEncriptado){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

       for (let i = 0; i < matrizCodigo.length; i++){
       if(stringEncriptado.includes(matrizCodigo[i][0])){
       stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

   }

   return stringEncriptado

} 

    function btnDesencriptar(){
        const textEncriptado = desencriptar(textArea.value)
        mensaje.value = textEncriptado
        
        }


    function desencriptar(stringDesencriptar){

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptar = stringDesencriptar.toLowerCase()
    
            for (let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptar.includes(matrizCodigo[i][1])){
                stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    
            }
    
        }
        return stringDesencriptar


    }

    function copiar(){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("Texto Copiado")
    }


    function borrar(){
        mensaje.value = "";
        textArea.value = "";
        var imagen = document.getElementById("imagen");
        imagen.style.backgroundImage = "url('" + imagenOriginal + "')";

        }


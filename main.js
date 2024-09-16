let cantidad = document.getElementById('cantidad');
let generar = document.getElementById('generar');
let contrasenia = document.getElementById('contrasena');
let cadenaTexto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:/+-*/@#";
let password = '';

function Generar(){
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8){
        alert("La contrasenia debe tener como minimo 6 caracteres");
    }
    else{
        let res = 0;
        while(res<numeroDigitado){
            let aleatorio = Math.floor( Math.random()*cadenaTexto.length);
            password = password+cadenaTexto[aleatorio];
            res++;
        }
        contrasenia.value = password;
        cantidad.value = null;
        password='';
        console.log(password);
    }
}

function Limpiar(){
    cantidad.value=null;
    contrasenia.value=null;
}










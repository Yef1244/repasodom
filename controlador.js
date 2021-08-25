let boton=document.getElementById("boton");
let botn=document.getElementById("boton2");
let foto1=document.getElementById("foto1");
let titulo1=document.getElementById("titulo1");
let audio1=document.getElementById("audio1");

boton.addEventListener("click",perroGuardian);

function perroGuardian(){
    
    titulo1.textContent="Recuerdos - GONA";
    foto1.src="img/foto4.jpg";
    audio1.src="audio/recuerdos.mp3";
    
    titulo2.textContent="Soy - GONA";
    foto2.src="img/foto5.jpg";
    audio2.src="audio/soy.mp3";

    titulo3.textContent="Vicio - GONA";
    foto3.src="img/foto6.jpg";
    audio3.src="audio/vicio.mp3";
}

boton2.addEventListener("click",retornar);

function retornar(){
    titulo1.textContent="El y Ella - GONA";
    foto1.src="img/foto1.jpg";
    audio1.src="audio/elyella.mp3";
    
    titulo2.textContent="Interludio - GONA";
    foto2.src="img/foto2.jpg";
    audio2.src="audio/interludio.mp3";

    titulo3.textContent="Libro - GONA";
    foto3.src="img/foto3.jpg";
    audio3.src="audio/libro.mp3";
}

function circulo () {
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('circulo');
}
function Arriba () {
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Arriba');
}
function Abajo (){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Abajo'); 
}
function Imagen(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Imagen')
}
function Diagonal_arriba_izquierda(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Diagonal_arriba_izquierda');
}
function Diagonal_abajo_derecha(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Diagonal_abajo_derecha');
}
function rombo(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('rombo');
}
function triangulo(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('triangulo');
}
function Rectangulo_horizontal() {
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Rectangulo_horizontal')
}
function Rectangulo_vertical(){
    var selector = document.getElementById("figura");
    selector.className = '';
    selector.classList.toggle('Rectangulo_vertical')

}

function CapturarDatos(){
    // Capturamos los valores de los campos a traves de sus ids y del atributo .value
    var Nombre = document.getElementById("cNombres").value;
    var Edad = document.getElementById("cEdad").value;
    var Fecha_Nacimiento = document.getElementById("cFecha").value;
    var Genero = document.getElementById("cGenero").value;
    var Email = document.getElementById("cEmail").value;
    var Descripcion = document.getElementById("cDescripcion").value;
    var Color = document.getElementById("cColor").value;
    // Capturamos los parrafos donde mostraremos la informacion
    var name = document.getElementById("mNombres");
    var age = document.getElementById("mEdad");
    var date = document.getElementById("mFecha Nacimiento");
    var Gen = document.getElementById("mGenero");
    var Ema = document.getElementById("mEmail");
    var Descr = document.getElementById("mDescripcion"); 
    name.textContent = Nombre
    age.textContent = Edad
    date.textContent = Fecha_Nacimiento
    Gen.textContent = Genero
    Ema.textContent = Email
    Descr.textContent = Descripcion
    // Capturamos el contenedor del avatar para luego cambiar su color de fondo
    // var selector =document.getElementById("card-avatar");
    // if (Color =="Negro"){
    //     selector.style.backgroundColor = '#000000';
    // }
    var selector = document.getElementById("card-avatar");
    switch (Color) {
        case "Negro":
            selector.style.backgroundColor = '#000000';
            break;
            case "Amarillo":
            selector.style.backgroundColor = "#f0e801"
            break;
            case "Azul":
                selector.style.backgroundColor = "#2326bd"
    
        
    }
    var imgavatar = document.getElementById ("foto");
    if (Genero == "Masculino") {
        imgavatar.src = 'img/avatar1.png'         
        
    } else if (Genero == "Femenino"){
        imgavatar.src = 'img/avatar2.png'
        
    }
    else{
        imgavatar.src =  'img/avatar.png'
    } 
    }
    




const socket = io();

//const valor= ``;

//console.log(valor, nombre.value, apellido.value);

function presiono(){
    let nombre = document.getElementById('first_name');
    let apellido = document.getElementById('last_name');
    console.log('los valores van');
    socket.emit('mensaje',{nombre:nombre.value, apellido:apellido.value});
};


socket.on('mensaje', function(data) {
    console.log('valores que vienen del servidor: ',data)
});


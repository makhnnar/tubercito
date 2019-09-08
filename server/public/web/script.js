
function agregar(){

	const first_name = document.getElementById('first_name').value;
	const last_name = document.getElementById('last_name').value;
	const email = document.getElementById('email').value;
	const gender = document.getElementById('gender').value;
	const birthday = document.getElementById('birthday').value;
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const agregaruser = 'http://127.0.0.1:3005/api/signup';
	console.log('los valores: '+first_name+' '+last_name+' '+email+' '+gender+' '+birthday+' '+username+' '+password);
	fetch(
      agregaruser,
		{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
				first_name:first_name,
				last_name:last_name,
				email:email,
				gender:gender,
				birthday:birthday,
				username:username,
				password:password
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('entro, los datos son: '+JSON.stringify(response.data));
			//let detalles = DB.DB;
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);

};

/*function loguear(nombre,clave) {
	var nombre=document.getElementById('nombre').value;
	var clave=document.getElementById('clave').value;
	var loginuser='login.js';
	console.log('los valores agregados: '+nombre+'	'+clave);
	fetch(
      loginuser,
		{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
         		nombre:this.nombre,
         		clave:this.clave
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('entro, los datos son: '+JSON.stringify(response.data));
			//let detalles = DB.DB;
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

function imprimir(){



};

function eliminar(id){

	var id=document.getElementById('').value;

};*/
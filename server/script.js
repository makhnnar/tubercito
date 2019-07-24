
function agregar(first_name,last_name,email,gender,birthday,username,password){

	var first_name=document.getElementById('first_name').value;
	var last_name=document.getElementById('last_name').value;
	var email=document.getElementById('email').value;
	var gender=document.getElementById('gender').value;
	var birthday=document.getElementById('birthday').value;
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var agregaruser='http://127.0.0.1:3005/api/test';
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
				first_name:this.first_name,
				last_name:this.last_name,
				email:this.email,
				gender:this.gender,
				birthday:this.birthday,
				password:this.password
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
function cambiar(){
	location.href='http://localhost:3010/pruebasocket.html';	
};

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
			console.log('error en mostrar');
		}
	);

};

function createtravel(){
	//const token_temporal = document.getElementById('first_name').value;
	const origin_country = document.getElementById('ocountry').value;
	const origin_state = document.getElementById('ostate').value;;
	const origin_city = document.getElementById('ocity').value;;
	const origin_comunity = document.getElementById('ocomunity').value;;
	const origin_street = document.getElementById('ostreet').value;;
	const origin_house = document.getElementById('ohouse').value;;
	const origin_block = document.getElementById('oblock').value;;
	const origin_latitude = document.getElementById('olatitude').value;;
	const origin_longitude = document.getElementById('olongitude').value;;
	const destination_country = document.getElementById('dcountry').value;;
	const destination_state = document.getElementById('dstate').value;;
	const destination_city = document.getElementById('dcity').value;;
	const destination_comunity = document.getElementById('dcomunity').value;;
	const destination_street = document.getElementById('dstreet').value;;
	const destination_house = document.getElementById('dhouse').value;;
	const destination_block = document.getElementById('dblock').value;;
	const destination_latitude = document.getElementById('dlatitude').value;;
	const destination_longitude = document.getElementById('dlongitude').value;;
	const agregartravel = 'http://127.0.0.1:3005/api/request_travel';
	//console.log('los valores: '+first_name+' '+last_name+' '+email+' '+gender+' '+birthday+' '+username+' '+password);
	fetch(
		agregartravel,
		{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
				temporal_token:token_temporal,
				address_origin:{
					country:origin_country,
					state:origin_state,
					city:origin_city,
					comunity:origin_comunity,
					street:origin_street,
					house:origin_house,
					block:origin_block,
					latitude:origin_latitude,
					longitude:origin_longitude
				},
				address_destination:{
					country:destination_country,
					state:destination_state,
					city:destination_city,
					comunity:destination_comunity,
					street:destination_street,
					house:destination_house,
					block:destination_block,
					latitude:destination_latitude,
					longitude:destination_longitude
				},
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

function loguear(username,password) {
	var nombre=document.getElementById('username2').value;
	var clave=document.getElementById('password2').value;
	var loginuser='http://127.0.0.1:3010/api/login';
	//console.log('valores ingresados: ',nombre.value,clave.value);
	//console.log('valores ingresados: ',nombre,clave)
	fetch(
      loginuser,
		{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
         		username:nombre,
         		password:clave
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('el servidor devuelve el siguiente mensaje: '+JSON.stringify(response.data));
			//let detalles = DB.DB;
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

/*function imprimir(){



};

function eliminar(id){

	var id=document.getElementById('').value;

};*/
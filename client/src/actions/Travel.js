export const AddressOrigin = (country,state,city,community,street,house,block,latitude,longitude) => ({
  type: 'ORIGIN',
  payload:{
  		   country:country,
  		   state:state,
  		   city:city,
  		   community:community,
  		   street:street,
  		   house:house,
  		   block:block,
  		   latitude:latitude,
  		   longitude:longitude
  		  }
})

export const AddressDestination = (country,state,city,community,street,house,block,latitude,longitude) => ({
  type: 'DESTINATION',
  payload:{
  		   country:country,
  		   state:state,
  		   city:city,
  		   community:community,
  		   street:street,
  		   house:house,
  		   block:block,
  		   latitude:latitude,
  		   longitude:longitude
  		  }
})

export const Travel = (id_addressOrigin,id_addressDestination) => ({
  type: 'TRAVEL',
  payload:{
  		   id_addressOrigin:id_addressOrigin,
  		   id_addressDestination:id_addressDestination
  		  }
})

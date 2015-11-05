/*

	algeria.js

*/

Object.prototype.extend = function( obj ){
	for(var property in obj){
		if (obj.hasOwnProperty(property)) {this[property] = obj[property];}
	}
	return this;
}

var wilayas = [
	{"id":"01", "name":"Adrar", "longName":"Wilaya d'Adrar","latitude":26.418131,"longitude":-.6014717},
	{"id":"02", "name":"Chlef", "longName":"Wilaya de Chlef","latitude":36.1663328,"longitude":1.3335514},
	{"id":"03", "name":"Laghouat", "longName":"Wilaya de Laghouat","latitude":33.8,"longitude":2.883333},
	{"id":"04", "name":"Oum El Bouaghi", "longName":"Wilaya d'Oum El Bouaghi","latitude":35.8775,"longitude":7.1136111},
	{"id":"05", "name":"Batna", "longName":"Wilaya de Batna","latitude":35.55,"longitude":6.1666667},
	{"id":"06", "name":"Béjaïa", "longName":"Wilaya de Béjaïa","latitude":36.75,"longitude":5.0666667},
	{"id":"07", "name":"Biskra", "longName":"Wilaya de Biskra","latitude":34.85,"longitude":5.7333333},
	{"id":"08", "name":"Béchar", "longName":"Wilaya de Béchar","latitude":31.608219,"longitude":-2.220005},
	{"id":"09", "name":"Blida", "longName":"Wilaya de Blida","latitude":36.480499,"longitude":2.833905},
	{"id":"10", "name":"Bouira", "longName":"Wilaya de Bouira","latitude":36.37763,"longitude":3.8962348},
	{"id":"11", "name":"Tamanrasset", "longName":"Wilaya de Tamanrasset","latitude":24.0982893,"longitude":3.743509},
	{"id":"12", "name":"Tébessa", "longName":"Wilaya de Tébessa","latitude":0,"longitude":0},
	{"id":"13", "name":"Tlemcen", "longName":"Wilaya de Tlemcen","latitude":0,"longitude":0},
	{"id":"14", "name":"Tiaret", "longName":"Wilaya de Tiaret","latitude":0,"longitude":0},
	{"id":"15", "name":"Tizi Ouzou", "longName":"Wilaya de Tizi Ouzou","latitude":0,"longitude":0},
	{"id":"16", "name":"Alger", "longName":"Wilaya d'Alger", "latitude":36.776214, "longitude":3.058375},
	{"id":"17", "name":"Djelfa", "longName":"Wilaya de Djelfa","latitude":0,"longitude":0},
	{"id":"18", "name":"Jijel", "longName":"Wilaya de Jijel","latitude":0,"longitude":0},
	{"id":"19", "name":"Sétif", "longName":"Wilaya de Sétif","latitude":0,"longitude":0},
	{"id":"20", "name":"Saïda", "longName":"Wilaya de Saïda","latitude":0,"longitude":0},
	{"id":"21", "name":"Skikda", "longName":"Wilaya de Skikda","latitude":0,"longitude":0},
	{"id":"22", "name":"Sidi Bel Abbès", "longName":"Wilaya de Sidi Bel Abbès","latitude":0,"longitude":0},
	{"id":"23", "name":"Annaba", "longName":"Wilaya d'Annaba","latitude":0,"longitude":0},
	{"id":"24", "name":"Guelma", "longName":"Wilaya de Guelma","latitude":0,"longitude":0},
	{"id":"25", "name":"Constantine", "longName":"Wilaya de Constantine","latitude":0,"longitude":0},
	{"id":"26", "name":"Médéa", "longName":"Wilaya de Médéa","latitude":0,"longitude":0},
	{"id":"27", "name":"Mostaganem", "longName":"Wilaya de Mostaganem","latitude":0,"longitude":0},
	{"id":"28", "name":"M'Sila", "longName":"Wilaya de M'Sila","latitude":0,"longitude":0},
	{"id":"29", "name":"Mascara", "longName":"Wilaya de Mascara","latitude":0,"longitude":0},
	{"id":"30", "name":"Ouargla", "longName":"Wilaya d'Ouargla","latitude":0,"longitude":0},
	{"id":"31", "name":"Oran", "longName":"Wilaya d'Oran","latitude":0,"longitude":0},
	{"id":"32", "name":"El Bayadh", "longName":"Wilaya d'El Bayadh","latitude":0,"longitude":0},
	{"id":"33", "name":"Illizi", "longName":"Wilaya d'Illizi","latitude":0,"longitude":0},
	{"id":"34", "name":"Bordj Bou Arreridj", "longName":"Wilaya de Bordj Bou Arreridj","latitude":0,"longitude":0},
	{"id":"35", "name":"Boumerdès", "longName":"Wilaya de Boumerdès","latitude":0,"longitude":0},
	{"id":"36", "name":"El Tarf", "longName":"Wilaya d'El Tarf","latitude":0,"longitude":0},
	{"id":"37", "name":"Tindouf", "longName":"Wilaya de Tindouf","latitude":0,"longitude":0},
	{"id":"38", "name":"Tissemsilt", "longName":"Wilaya de Tissemsilt","latitude":0,"longitude":0},
	{"id":"39", "name":"El Oued", "longName":"Wilaya d'El Oued","latitude":0,"longitude":0},
	{"id":"40", "name":"Khenchela", "longName":"Wilaya de Khenchela","latitude":0,"longitude":0},
	{"id":"41", "name":"Souk Ahras", "longName":"Wilaya de Souk Ahras","latitude":0,"longitude":0},
	{"id":"42", "name":"Tipaza", "longName":"Wilaya de Tipaza","latitude":0,"longitude":0},
	{"id":"43", "name":"Mila", "longName":"Wilaya de Mila","latitude":0,"longitude":0},
	{"id":"44", "name":"Aïn Defla", "longName":"Wilaya d'Aïn Defla","latitude":0,"longitude":0},
	{"id":"45", "name":"Naâma", "longName":"Wilaya de Naâma","latitude":0,"longitude":0},
	{"id":"46", "name":"Aïn Témouchent", "longName":"Wilaya d'Aïn Témouchent","latitude":0,"longitude":0},
	{"id":"47", "name":"Ghardaïa", "longName":"Wilaya de Ghardaïa","latitude":0,"longitude":0},
	{"id":"48", "name":"Relizane", "longName":"Wilaya de Relizane","latitude":0,"longitude":0}
];

exports.wilaya = function( id, field ){
	var rec = wilayas[(id||1)-1];
	if (field === undefined) return rec;
	return (rec && rec[field]) || null;
}

exports.wilaya.each = function( callback ){
	wilayas.forEach( function(wilaya,i){ callback( wilaya );} );
}
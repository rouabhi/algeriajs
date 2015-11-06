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
	{"id":"12", "name":"Tébessa", "longName":"Wilaya de Tébessa","latitude":35.407139,"longitude":8.1208639},
	{"id":"13", "name":"Tlemcen", "longName":"Wilaya de Tlemcen","latitude":34.8827758,"longitude":-1.3166696},
	{"id":"14", "name":"Tiaret", "longName":"Wilaya de Tiaret","latitude":35.37849,"longitude":1.32569},
	{"id":"15", "name":"Tizi Ouzou", "longName":"Wilaya de Tizi Ouzou","latitude":36.7166667,"longitude":4.05},
	{"id":"16", "name":"Alger", "longName":"Wilaya d'Alger", "latitude":36.776214, "longitude":3.058375},
	{"id":"17", "name":"Djelfa", "longName":"Wilaya de Djelfa","latitude":34.6666667,"longitude":3.25},
	{"id":"18", "name":"Jijel", "longName":"Wilaya de Jijel","latitude":36.8,"longitude":5.7666667},
	{"id":"19", "name":"Sétif", "longName":"Wilaya de Sétif","latitude":36.18898,"longitude":5.414416},
	{"id":"20", "name":"Saïda", "longName":"Wilaya de Saïda","latitude":34.8333333,"longitude":.15},
	{"id":"21", "name":"Skikda", "longName":"Wilaya de Skikda","latitude":36.8666667,"longitude":6.9},
	{"id":"22", "name":"Sidi Bel Abbès", "longName":"Wilaya de Sidi Bel Abbès","latitude":35.2022249,"longitude":-.6298922},
	{"id":"23", "name":"Annaba", "longName":"Wilaya d'Annaba","latitude":36.902859,"longitude":7.755543},
	{"id":"24", "name":"Guelma", "longName":"Wilaya de Guelma","latitude":36.4659,"longitude":7.428361},
	{"id":"25", "name":"Constantine", "longName":"Wilaya de Constantine","latitude":36.35,"longitude":6.6},
	{"id":"26", "name":"Médéa", "longName":"Wilaya de Médéa","latitude":36.2666667,"longitude":2.75},
	{"id":"27", "name":"Mostaganem", "longName":"Wilaya de Mostaganem","latitude":35.9398380,"longitude":.089767},
	{"id":"28", "name":"M'Sila", "longName":"Wilaya de M'Sila","latitude":35.70018,"longitude":4.545026},
	{"id":"29", "name":"Mascara", "longName":"Wilaya de Mascara","latitude":35.400169,"longitude":.139852},
	{"id":"30", "name":"Ouargla", "longName":"Wilaya d'Ouargla","latitude":31.96298,"longitude":5.342011},
	{"id":"31", "name":"Oran", "longName":"Wilaya d'Oran","latitude":35.6969444,"longitude":-.6330556},
	{"id":"32", "name":"El Bayadh", "longName":"Wilaya d'El Bayadh","latitude":33.6802778,"longitude":1.0202778},
	{"id":"33", "name":"Illizi", "longName":"Wilaya d'Illizi","latitude":26.505,"longitude":8.482222},
	{"id":"34", "name":"Bordj Bou Arreridj", "longName":"Wilaya de Bordj Bou Arreridj","latitude":36.0711916,"longitude":4.7588042},
	{"id":"35", "name":"Boumerdès", "longName":"Wilaya de Boumerdès","latitude":36.7675962,"longitude":3.7029002},
	{"id":"36", "name":"El Tarf", "longName":"Wilaya d'El Tarf","latitude":36.7558581,"longitude":8.2212979},
	{"id":"37", "name":"Tindouf", "longName":"Wilaya de Tindouf","latitude":27.6761012,"longitude":-8.1276526},
	{"id":"38", "name":"Tissemsilt", "longName":"Wilaya de Tissemsilt","latitude":35.607778,"longitude":1.811111},
	{"id":"39", "name":"El Oued", "longName":"Wilaya d'El Oued","latitude":33.368309,"longitude":6.867369},
	{"id":"40", "name":"Khenchela", "longName":"Wilaya de Khenchela","latitude":35.416667,"longitude":7.133333},
	{"id":"41", "name":"Souk Ahras", "longName":"Wilaya de Souk Ahras","latitude":36.2863889,"longitude":7.9511111},
	{"id":"42", "name":"Tipaza", "longName":"Wilaya de Tipaza","latitude":36.6178786,"longitude":2.3912362},
	{"id":"43", "name":"Mila", "longName":"Wilaya de Mila","latitude":36.45,"longitude":6.25},
	{"id":"44", "name":"Aïn Defla", "longName":"Wilaya d'Aïn Defla","latitude":36.266667,"longitude":1.966667},
	{"id":"45", "name":"Naâma", "longName":"Wilaya de Naâma","latitude":33.4350615,"longitude":-.9056623},
	{"id":"46", "name":"Aïn Témouchent", "longName":"Wilaya d'Aïn Témouchent","latitude":35.30241,"longitude":-1.14489},
	{"id":"47", "name":"Ghardaïa", "longName":"Wilaya de Ghardaïa","latitude":32.489059,"longitude":3.678539},
	{"id":"48", "name":"Relizane", "longName":"Wilaya de Relizane","latitude":35.733333,"longitude":.55}
];

exports.wilaya = function( id, field ){
	var rec = wilayas[(id||1)-1];
	if (field === undefined) return rec;
	else if (field === "position") return (rec && {latitude:rec.latitude,longitude:rec.longitude})||null;
	return (rec && rec[field]) || null;
}

exports.wilaya.each = function( callback ){
	wilayas.forEach( function(wilaya,i){ callback( wilaya );} );
}
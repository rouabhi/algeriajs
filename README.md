# algeria #

**algeria** is a simple Node.js package that provides administrative, location,.. information about algeria.

## Using package ##

```javascript
var dz = require('algeria');
```

## Available functions ##

### wilaya ###
(*wilaya* is the algerian name for *county*)

```javascript
    dz.wilaya(id, field)
```

where ```id``` is the wilaya number, between 1 and 48.

```field``` can be ```id```, ```name```, ```longName```, ```position```, ```latitude```, ```longitude```.

If ```field``` is not given, an abject with all available information is returned.

**Exemple:**
```javascript
    var dz=require('algeria');

    dz.wilaya(16,'name') // "Alger"
    dz.wilaya(15,'longName') // "Wilaya de Tizi Ouzou"
    dz.wilaya(6, 'id') // "06"
    dz.wilaya(11, 'position') // { latitude: 24.0982893, longitude: 3.743509 }
```

### wilaya.each ###
 A loop through wilayas.

**Exemple:**
```javascript
    var dz=require('algeria');
    dz.wilaya.each( function( wilaya ){
        console.info(wilaya.id,"   ",wilaya.name);
    });
```

### commune ###
Get a '*commune*' element by its 'ONS code' (primary key).
(*commune* is the algerian name for *township*)

```javascript
    var dz=require('algeria');
    dz.commune( "1604" ); // { name: 'Belouizdad', wilaya: 16, ONSCode: '1604'}
```

### commune(*code*).wilaya ###

The previous command returns information about the wilaya (county) :
```javascript
    var dz=require('algeria');
    dz.commune( "1604" ).wilaya;
```

### commune.each( callback ) ###
A loop through all communes of algeria :

```javascript
    var dz=require('algeria');
    dz.commune.each( function(commune){console.info(commune);} );
```

### commune.each( wilaya, callback ) ###
Loop through all communes of a wilaya :
```javascript
    var dz=require('algeria');
    dz.commune.each( 16, function(commune){console.info(commune);} );
```



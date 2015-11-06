# algeria #

**algeria** is a simple Node.js package that provides administrative, location,.. information about algeria.

## Using package ##

```javascript
var dz = require('algeria');
```

## Available functions ##

### wilaya ###
```javascript
    dz.wilaya(id, field)
```

where ```id``` is between 1 and 48.

```field``` can be ```id```, ```name```, ```longName```, ```position```, ```latitude```, ```longitude```.

If ```field``` is not given, an abject with all available information is returned.

**Exemple:**
```javascript
    dz.wilaya(16,'name') // "Alger"
    dz.wilaya(15,'longName') // "Wilaya de Tizi Ouzou"
    dz.wilaya(6, 'id') // "06"
    dz.wilaya(11, 'position') // { lat: 24.0982893, lng: 3.743509 }
```

 ### wilaya.each ###
 A loop through wilayas.

**Exemple:**
```javascript
    dz.wilaya.each( function( wilaya ){
        console.info(wilaya.id,"   ",wilaya.name);
    });
```

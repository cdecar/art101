/**
* Author: Christian Decareau & Justin Juang
* Date: 10/19/2021
*
**/

myTransport = ["Bus", "Bike", "Carpool", "Uber", "Car"];

var myMainRide = {
make: 'Chrysler',
model: 'PT Cruiser',
color: 'Silver',
year: '2021'
};

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("<br>");

document.writeln("My Main Ride: </pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

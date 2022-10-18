//Return an object where each property is the name of the an ice cream flavor and each value is an integer that is the total count of that flavor.
//* Store the returned data in a new iceCreamTotals variable.

const data = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];


//given object of an array 
// return the total count of flavors of each ice cream name
//superman -> 4


const iceCreamTotals = data.reduce((totals, superhero) => {
    superhero.favoriteIceCreams.map((iceCreamType) => {
        totals[iceCreamType] = (totals[iceCreamType] || 0) + 1;
        return iceCreamType;
    });

    return totals;
}, {});
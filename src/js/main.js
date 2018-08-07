let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='; // api de foursquare, venues=lugares
let lat = 19.43;
let lng = -99.13;
let queryS = 'cafe';


let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS + '&intent=browse&radius=4000&limit=15&client_id=ZOFFSEOEJQTCC1DMHVX1O0YCWG5ECQ44C0AOYTO1FMPY5BIN&client_secret=CNG0VTD1G0M2BAUPFCIQKIHZ32LSJ50TNJHZLMJDAB4MPQAW';
console.log(url);

fetch(url)
  .then(response => response.json())
  .then(data =>{
    for (coffeeOne in data) {
      let coffeeTwo = data[coffeeOne];
      console.log(coffeeTwo);
      let coffeThree = coffeeTwo.venues;
      console.log(coffeThree);  
      for (four in coffeThree) {
        let coffeeFive = coffeThree[four];
        console.log(coffeeFive);
        
        let coffeeId = coffeeFive.id;
        let coffeeName = coffeeFive.name;
        let coffeLocation = coffeeFive.location;
        let coffeDirection = coffeeFive.city;
        let coffeeAdress = coffeeFive.formatedAdress;
        console.log(coffeeAdress);
      }
    }
  });
  
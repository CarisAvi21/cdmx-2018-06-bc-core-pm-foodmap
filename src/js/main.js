let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll='; // api de foursquare, venues=lugares
let lat = 19.43;
let lng = -99.13;
let queryS = 'sushi';


let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS +
  '&intent=browse&radius=2000&limit=10&client_id=ZOFFSEOEJQTCC1DMHVX1O0YCWG5ECQ44C0AOYTO1FMPY5BIN&client_secret=CNG0VTD1G0M2BAUPFCIQKIHZ32LSJ50TNJHZLMJDAB4MPQAW';
console.log(url);

fetch(url)
  .then(Response => Response.json())
  .then(data =>{
    for (sushi in data) {
      let sushiOne = data[sushi];
      console.log(sushiOne);
      let sushiTwo = sushiOne.venues;
      console.log(sushiTwo);
      
    }
  });
  
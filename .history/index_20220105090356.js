var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://eventbrite-com.p.rapidapi.com/events/nearby/37.788719679657554/-122.40057774847898',
  params: {radius: '30', date_start: '2021-01-01', date_end: '2021-12-31', page: '1'},
  headers: {
    'x-rapidapi-host': 'eventbrite-com.p.rapidapi.com',
    'x-rapidapi-key': 'cbd6204fddmshf36db57705ebdd1p1eb609jsn4c307b3812fe'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
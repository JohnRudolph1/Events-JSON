fetch("https://eventbrite-com.p.rapidapi.com/event/117496833191", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "eventbrite-com.p.rapidapi.com",
		"x-rapidapi-key": "cbd6204fddmshf36db57705ebdd1p1eb609jsn4c307b3812fe"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
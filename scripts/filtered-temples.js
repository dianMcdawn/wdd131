// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const album = document.querySelector('#album');
//Some Navigations const
const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newe = document.querySelector('#newe');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//Constant of temples
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Santiago Chile",
		location: "Santiago, Chile",
		dedicated: "1983, September, 15",
		area: 20831,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
	},
	{
		templeName: "Concepcion Chile",
		location: "Concepcion, Chile",
		dedicated: "2018, October, 28",
		area: 23095,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/03-Concepcion-Chile-Temple-2114384.jpg"
	},
	{
		templeName: "Asuncion Paraguay",
		location: "Asuncion, Paraguay",
		dedicated: "2002, May, 19",
		area: 11906,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
	}
];

//Function to template a temple
function templeCard(temple) {
	return `<div class="album-temple">
	  <div class="album-element album-title">${temple.templeName}</div>
	  <div class="album-element"><span class="album-data">Location:</span><span class="album-desc">${temple.location}</span></div>
	  <div class="album-element"><span class="album-data">Dedicated:</span><span class="album-desc">${temple.dedicated}</span></div>
	  <div class="album-element"><span class="album-data">Size:</span><span class="album-desc">${temple.area} sq ft</span></div>
	  <span class="album-img"><img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}" title="${temple.templeName}"></img>
	  </div>`
}

//Templating all temples
function renderAllTemples(temples) {
	const html = temples.map(templeCard);
	album.innerHTML = html.join("");
}

//showing all temples builded before 1900
function renderOldTemples(temples) {
	let list = temples.filter(function (dat) { return Number(dat.dedicated.substr(0, 4)) < 1900; });
	const html = list.map(templeCard);
	album.innerHTML = html.join("");
}

//showing all temples builded after 2000
function renderNewTemples(temples) {
	let list = temples.filter(function (dat) { return Number(dat.dedicated.substr(0, 4)) > 2000; });
	const html = list.map(templeCard);
	album.innerHTML = html.join("");
}

//showing all Large temples, more than 90000
function renderLargeTemples(temples) {
	let list = temples.filter(function (dat) { return Number(dat.area) > 90000; });
	const html = list.map(templeCard);
	album.innerHTML = html.join("");
}

//showing all Small temples, less than 10000
function renderSmallTemples(temples) {
	let list = temples.filter(function (dat) { return Number(dat.area) < 10000; });
	const html = list.map(templeCard);
	album.innerHTML = html.join("");
}

//Showing results of array
renderAllTemples(temples);

//Some actions

//Show all temples
home.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderAllTemples(temples);
});

//Show old builded temples
old.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderOldTemples(temples);
});

//Show new builded temples
newe.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderNewTemples(temples);
});

//Show large temples
large.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderLargeTemples(temples);
});

//Show small temples
small.addEventListener('click', function () {
	// Code to execute when the button is clicked
	renderSmallTemples(temples);
});
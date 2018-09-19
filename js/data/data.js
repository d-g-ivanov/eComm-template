//banner list
var banners = [
	{
		"desktop": "slide1_d.jpg",
		"mobile": "slide1_m.jpg",
		"title": "Gain Strength",
		"body": "Be awesome, look awesome!",
		"button": {
			"Check our products": "#products",
		},
		"settings": {
			"text_position": "left", 			//< top | bottom | left | right >
			"text_color": "light", 				//< light | dark >
		},
	},
	{
		"desktop": "slide2_d.jpg",
		"mobile": "slide2_m.jpg",
		"title": "Gain Strength",
		"body": "Be awesome, look awesome!",
		"button": {
			"Check our products": "#products",
		},
		"settings": {
			"text_position": "top",
			"text_color": "dark",
		},
	},
];

// product list
var products = [
	{
		"image": "grid_item1.jpg",
		"type": "Mix",
		"title": "Sport Nutrition Supplement, Gold Standard",
		"price": 39.99,
		"keywords": "powder unlisted",
		"specs": {
			"Shipping": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			"Description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
		},
		"affiliates": {
			"Amazon": "https://www.amazon.com/",
			"eBay": "https://www.ebay.com/",
		},
	},
	{
		"image": "grid_item2.jpg",
		"type": "Vitamines",
		"title": "Absolute Nutrition Aqua FUEL, 1kg",
		"price": 25.99,
		"keywords": "powder absolute",
		"specs": {
			"Shipping": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			"Description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			"Usage": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
		},
		"affiliates": {
			"Amazon": "https://www.amazon.com/",
			"eBay": "https://www.ebay.com/",
		},
	},
	{
		"image": "grid_item3.jpg",
		"type": "Gainer",
		"title": "Absolute Nutrition MASS, 03kg",
		"price": 23.50,
		"keywords": "powder absolute",
		"specs": {
			"Description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
		},
		"affiliates": {
			"eBay": "https://www.ebay.com/",
		},
	},
	{
		"image": "grid_item4.jpg",
		"type": "Protein",
		"title": "Absolute Nutrition WHEY, 02kg",
		"price": 27.99,
		"keywords": "powder absolute",
	},
	{
		"image": "grid_item5.jpg",
		"type": "Stamina",
		"title": "TREC NUTRITION, SAW Super Agressive Workout",
		"price": 27.99,
		"keywords": "powder trec",
	},
	{
		"image": "grid_item6.jpg",
		"type": "Post-Workout",
		"title": "MYOGENIX, AfterShock, Catalist",
		"price": 39.99,
		"keywords": "powder myogenics",
	},
	{
		"image": "grid_item7.jpg",
		"type": "Gainer",
		"title": "BCAA, mega-size, 1000 caps",
		"price": 25.99,
		"keywords": "powder bcaa",
	},
	{
		"image": "grid_item8.jpg",
		"type": "General",
		"title": "Victorious Fitness Supplements",
		"price": 23.50,
		"keywords": "powder unlisted",
	},
	{
		"image": "grid_item9.jpg",
		"type": "Glutamine",
		"title": "TREC NUTRITION, Peptide Glutamine",
		"price": 27.99,
		"keywords": "powder trec",
	},
	{
		"image": "grid_item10.jpg",
		"type": "General",
		"title": "NO-EXPLODE, Strength",
		"price": 25.99,
		"keywords": "powder unlisted",
	},
	{
		"image": "grid_item11.jpg",
		"type": "General",
		"title": "BCAA G-Force",
		"price": 27.99,
		"keywords": "powder bcaa trec",
	},
	{
		"image": "grid_item12.jpg",
		"type": "General",
		"title": "MegaFood, Kid's One Daily",
		"price": 39.99,
		"keywords": "powder megafood",
	},
	{
		"image": "grid_item13.jpg",
		"type": "Recovery",
		"title": "ON, 2:1:1 Recovery supplements",
		"price": 39.99,
		"keywords": "powder unlisted",
	},
		{
		"image": "grid_item14.jpg",
		"type": "Pre-workout",
		"title": "Grenade Pre-workout supplements",
		"price": 23.50,
		"keywords": "powder grenade",
	},

	
	
	
	//bars
	{
		"image": "grid_item15.jpg",
		"type": "Bar",
		"title": "Strong Kind, Thai Sweet Chili",
		"price": 2.99,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item16.jpg",
		"type": "Bar",
		"title": "PEGAN Power bars, various flavors",
		"price": 4.99,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item17.jpg",
		"type": "Bar",
		"title": "CLIF, Protein bar",
		"price": 1.99,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item18.jpg",
		"type": "Bar",
		"title": "BULK Mass Gainer",
		"price": 5.99,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item19.jpg",
		"type": "Bar",
		"title": "TREK Cocoa energy bar",
		"price": 4.50,
		"keywords": "bars trec",
	},
	{
		"image": "grid_item20.jpg",
		"type": "Bar",
		"title": "FitJoy Protein bar",
		"price": 3.99,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item21.jpg",
		"type": "Bar",
		"title": "Kellogg's Protein bars (box of 12)",
		"price": 12.49,
		"keywords": "bars keloggs",
	},
	{
		"image": "grid_item22.jpg",
		"type": "Bar",
		"title": "ON Opti bar",
		"price": 2.49,
		"keywords": "bars unlisted",
	},
	{
		"image": "grid_item23.jpg",
		"type": "Bar",
		"title": "Pure Protein bar",
		"price": 4.99,
		"keywords": "bars unlisted",
	},
	
	//drinks
	{
		"image": "grid_item24.jpg",
		"type": "Drink",
		"title": "Lucozade",
		"price": 5.99,
		"keywords": "drinks unlisted",
	},
	{
		"image": "grid_item25.jpg",
		"type": "Drink",
		"title": "GU Energy Gel - Chocolate flavor",
		"price": 4.50,
		"keywords": "drinks unlisted",
	},
	{
		"image": "grid_item26.jpg",
		"type": "Drink",
		"title": "ACTIVATE, various flavors",
		"price": 3.99,
		"keywords": "drinks unlisted",
	},
		{
		"image": "grid_item27.jpg",
		"type": "Drink",
		"title": "SECRET, various flavors",
		"price": 12.49,
		"keywords": "drinks unlisted",
	},
	{
		"image": "grid_item28.jpg",
		"type": "Drink",
		"title": "isostart L-carnitine drink",
		"price": 2.49,
		"keywords": "drinks unlisted",
	},
	{
		"image": "grid_item29.jpg",
		"type": "Drink",
		"title": "Actif L-carnitine drink",
		"price": 4.99,
		"keywords": "drinks actif",
	},
	{
		"image": "grid_item30.jpg",
		"type": "Drink",
		"title": "Actif Smart vitamine juice",
		"price": 1.99,
		"keywords": "drinks actif",
	},
];

//filter list
var filters = [
	{
		"name": "Product Type",
		"type": "radio",
		"content": {
			"Powder": "powder",
			"Bars": "bars",
			"Drinks": "drinks",
		},
	},
	{
		"name": "Brand",
		"type": "checkbox",
		"content": {
			"Absolute": "absolute",
			"Myogenics": "myogenics",
			"BCAA": "bcaa",
			"MegaFood": "megafood",
			"TREC": "trec",
			"Grenade": "grenade",
			"Keloggs": "keloggs",
			"Actif": "actif",
			"Unlisted": "unlisted",
		},
	},
];

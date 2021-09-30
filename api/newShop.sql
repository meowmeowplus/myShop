DROP DATABASE IF EXISTS myShop;

CREATE DATABASE IF NOT EXISTS myShop;

USE myShop;

/*
** Add table "Products"
*/

CREATE TABLE Products (
	id			    INT				NOT NULL 	AUTO_INCREMENT,
	title		    VARCHAR(100)	NOT NULL,
	price			FLOAT			NOT NULL,
	description		VARCHAR(500)    DEFAULT 'NO INFO',
	category		VARCHAR(50)     NOT NULL,
	image			VARCHAR(200)		DEFAULT 'NO IMAGE',
	
	CONSTRAINT PK_Products PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



/*
** Add table "Orders"
*/

CREATE TABLE Orders (
	id				INT			NOT NULL		AUTO_INCREMENT,
	date			DATE 		NOT NULL,
	productId		INT 		NOT NULL,
	CONSTRAINT PK_Orders PRIMARY KEY (id),
	CONSTRAINT FK_Orders_Products FOREIGN KEY (productId) REFERENCES Products (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
** Add data into "Products"
*/

INSERT INTO Products
VALUES (NULL, 
		'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 
		109.95, 
        'Your perfect pack for everyday use and walks in the forest.',
        'men`s clothing', 
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
INSERT INTO Products
VALUES (NULL, 
		'Mens Casual Premium Slim Fit T-Shirts', 
		22.3, 
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
        'men`s clothing', 
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg');
INSERT INTO Products
VALUES (NULL, 
		'Mens Cotton Jacket', 
		55.99, 
        'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.',
        'men`s clothing', 
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');
        
INSERT INTO Products
VALUES (NULL, 
		'John Hardy Women`s Legends Naga Gold & Silver Dragon Station Chain Bracele', 
		695, 
        'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean`s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
        'jewelery', 
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg');
INSERT INTO Products
VALUES (NULL, 
		'Solid Gold Petite Micropave', 
		168, 
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        'jewelery', 
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg');
INSERT INTO Products
VALUES (NULL, 
		'WD 2TB Elements Portable External Hard Drive - USB 3.0', 
		78, 
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.',
        'electronics', 
        'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg');
INSERT INTO Products
VALUES (NULL, 
		'BIYLACLESEN Women`s 3-in-1 Snowboard Jacket Winter Coats', 
		78.99, 
        'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather.',
        'women`s clothing', 
        'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg');        
INSERT INTO Products
VALUES (NULL, 
		'Lock and Love Women`s Removable Hooded Faux Leather Moto Biker Jacket', 
		50.99, 
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON.',
        'women`s clothing', 
        'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg');   
INSERT INTO Products
VALUES (NULL, 
		'Rain Jacket Women Windbreaker Striped Climbing Raincoats', 
		109.99, 
        'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.',
        'women`s clothing', 
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg');  
INSERT INTO Products
VALUES (NULL, 
		'MBJ Women`s Solid Short Sleeve Boat Neck V', 
		10.99, 
        '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem.',
        'women`s clothing', 
        'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'); 














// Data structure for book inventory
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019, 
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "Informacinės elgesnos tyrimas",
                "ISBN": "9786090710319",
                "publishing_year": 2024, //Nauja knyga
                "pages": 212,
                "quantity": 2,
                "price": 18
            },
            {
                "title": "Procesų vizualizavimo sistema",
                "ISBN": "9786090711234",
                "publishing_year": 2019,
                "pages": 192,
                "quantity": 5,
                "price": 20
            },
            {
                "title": "Informacinės platformos",
                "ISBN": "9786090214305",
                "publishing_year": 2018,
                "pages": 60,
                "quantity": 1,
                "price": 6
            },
            {
                "title": "Inžerinė grafika",
                "ISBN": "9786090211915",
                "publishing_year": 2016,
                "pages": 44,
                "quantity": 11,
                "price": 10
            },
        ]
    },

    {
        "category": "Gyvūnai",
        "books": [
            {
                "title": "Genialieji paukščiai",
                "ISBN": "9786094930799",
                "publishing_year": 2016,
                "pages": 44,
                "quantity": 11,
                "price": 10
            },
            {
                "title": "Ką galvoja šunys?",
                "ISBN": "9786090211915",
                "publishing_year": 2024, //Nauja knyga
                "pages": 336,
                "quantity": 2,
                "price": 13
            },
            {
                "title": "Ką galvoja katės?",
                "ISBN": "9786094930782",
                "publishing_year": 2024, //Nauja knyga
                "pages": 512,
                "quantity": 2,
                "price": 16
            },
            {
                "title": "V kaip vanagas",
                "ISBN": "9786094797804",
                "publishing_year": 2023,
                "pages": 354,
                "quantity": 4,
                "price": 18
            },
            {
                "title": "Europos paukščiai",
                "ISBN": "9789984077666",
                "publishing_year": 2023,
                "pages": 476,
                "quantity": 3,
                "price": 34
            }
        ]
    },

    {
        "category": "Grybai",
        "books": [
            {
                "title": "Didžioji Lietuvos grybų knyga",
                "ISBN": "9789984077697",
                "publishing_year": 2023,
                "pages": 528,
                "quantity": 2,
                "price": 35
            },
            {
                "title": "Lietuvos grybai",
                "ISBN": "99786094845024",
                "publishing_year": 2022,
                "pages": 256,
                "quantity": 2,
                "price": 30
            },
            {
                "title": "Grybai ant stalo",
                "ISBN": "9786098090437",
                "publishing_year": 2014,
                "pages": 192,
                "quantity": 2,
                "price": 15
            },
            {
                "title": "Viskas apie grybus",
                "ISBN": "9786094560040",
                "publishing_year": 2011,
                "pages": 128,
                "quantity": 4,
                "price": 35
            },
            {
                "title": "Lietuvos grybų atlasas",
                "ISBN": "9789984077666",
                "publishing_year": 2007,
                "pages": 548,
                "quantity": 3,
                "price": 50
            }
            
            
        ]

    },

    {
        "category": "Gamta",
        "books": [
            {
                "title": "Mačiau tave augantį",
                "ISBN": "9789986344049",
                "publishing_year": 2024, //Nauja knyga
                "pages": 200,
                "quantity": 2,
                "price": 18
            },
            {
                "title": "Paslaptingas medžių gyvenimas",
                "ISBN": "9786094275982",
                "publishing_year": 2023,
                "pages": 240,
                "quantity": 2,
                "price": 14
            },
            {
                "title": "Mano žalioji oazė",
                "ISBN": "9786094732089",
                "publishing_year": 2021,
                "pages": 256,
                "quantity": 2,
                "price": 15
            },
            {
                "title": "Gamtos saitai",
                "ISBN": "9786094273957",
                "publishing_year": 2019,
                "pages": 248,
                "quantity": 4,
                "price": 13
            },
            {
                "title": "Augalai pirčiai",
                "ISBN": "9789984077666",
                "publishing_year": 2011,
                "pages": 64,
                "quantity": 3,
                "price": 10
            }
            
            
        ]
    },
    {
        "category": "Psichologija",
        "books": [
            {
                "title": "Žmogus ieško prasmės",
                "ISBN": "9789955295099",
                "publishing_year": 2023,
                "pages": 190,
                "quantity": 2,
                "price": 14
            },
            {
                "title": "Sąmoningumo vykdymas",
                "ISBN": "9786094442759",
                "publishing_year": 2019,
                "pages": 416,
                "quantity": 2,
                "price": 11
            },
            {
                "title": "Vaikystės šešėliai",
                "ISBN": "9786099615509",
                "publishing_year": 2020,
                "pages": 212,
                "quantity": 2,
                "price": 23
            },
            {
                "title": "Mąstymas, greitas ir lėtas",
                "ISBN": "9786094372834",
                "publishing_year": 2016,
                "pages": 640,
                "quantity": 4,
                "price": 15
            },
            {
                "title": "Kūno kalba",
                "ISBN": "9786094241673",
                "publishing_year": 2022,
                "pages": 240,
                "quantity": 3,
                "price": 7
            }
            
        ]
    }
    
]



const currentYear = new Date().getFullYear();
console.log("New book " + currentYear); 

console.log(inventory);

console.log(inventory[0]);

let categoryOne = inventory[0];



for (let i=0; i<categoryOne.books.length; i++) {
    console.log(categoryOne.books[i]["title"]);
}



function printBookInfo(bookObj) {
    for (let key in bookObj) {
        let str = key + ": " + bookObj[key];
        if (key === "publishing_year" && bookObj.publishing_year >=currentYear) {
            str = str + " Nauja knyga";
        }
        console.log(str);
    }
}



function allBooksInCategory(allBooks) {
    for (let bookObj of allBooks) {
        printBookInfo(bookObj)
    }
}



for (let catObj of inventory) {
    console.log(catObj.category + "----");
    allBooksInCategory(catObj.books);
}



inventory.forEach(category => {
    console.log(`Kategorija: ${category.category}`);
    
    category.books.forEach(book => {
        const totalValue = book.price * book.quantity;
        console.log(`Knygos "${book.title}" bendra vertė: $${totalValue}`);
    });
});



inventory.forEach(category => {
    let categoryTotalValue = 0; 

    category.books.forEach(book => {
        const totalValue = book.price * book.quantity;
        categoryTotalValue += totalValue; 
    });

    console.log(`Kategorijos "${category.category}" bendra vertė: $${categoryTotalValue}`);
}); 
const cats = ["Cats/pexels-kerber-774731.jpg",
    "Cats/pexels-kowalievska-1170986.jpg",
    "Cats/pexels-peng-louis-587527-1643457.jpg",
    "Cats/pexels-pixabay-45201.jpg",
    "Cats/pexels-septimiu-lupea-208604-669015.jpg",
    "Cats/pexels-vatius-127028.jpg"
];

let numCats = 0;

function viewCats() {
    const imgCat = document.getElementById("catImage");
    imgCat.src = cats[numCats];
}

function prevCat() {
    if (numCats <= 0) {
        viewCats();
    } else {
        numCats -= 1;
        console.log(numCats);
        viewCats();
    }
    return numCats;
}

function nextCat() {
    if (numCats === cats.length - 1) {
        viewCats();
    } else {
        numCats += 1;
        console.log(numCats);
        viewCats();
    }
    return numCats;
}
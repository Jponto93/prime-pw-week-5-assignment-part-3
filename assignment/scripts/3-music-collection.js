console.log('***** Music Collection *****')

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
  console.log('in addToCollection function');
  album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end inputs
  collection.push(album) //adding item to end of collection
} //end addToCollection

addToCollection('Daisy World','Tyler The Creator',2021);
console.log(collection[0]);
addToCollection('Man On The Moon','Kid Cudi',2009);
console.log(collection[1]);
addToCollection('So Far Gone','Drake',2009);
console.log(collection[2]);
addToCollection('Man On The Moon III','Kid Cudi',2020);
console.log(collection[3]);
addToCollection('Walking On A Dream','Empire of the Sun',2009);
console.log(collection[4]);
addToCollection('El Gato: The Human Glacier','Gucci Mane',2017);
console.log(collection[5]);
console.log(collection);

const showCollection = (arr) => {
  for (el of arr) {
    console.log(el);
  }
};

showCollection(collection);

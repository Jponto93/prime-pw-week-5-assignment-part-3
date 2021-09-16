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
addToCollection('Man On The Moon','Kid Cudi',2009);
addToCollection('So Far Gone','Drake',2009);
addToCollection('Man On The Moon III','Kid Cudi',2020);
addToCollection('Walking On A Dream','Empire of the Sun',2009);
addToCollection('El Gato: The Human Glacier','Gucci Mane',2017);
console.log(collection);

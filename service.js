app.factory('anguService', function(){
  var budget = 9;
  var movieArray = [
    {
      title: "Tarzan",
      year: "1999",
      description: "The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan.",
      image: "http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",
      remove: false,
      id: 0,
      price: 3
    },
    {
      title: "Lion King",
      year: "1994",
      description: "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
      image: "http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",
      remove: false,
      id: 2,
      price: 3
    },
    {
      title: "Beauty and the Beast",
      year: "1991",
      description: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love.",
      image: "http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",
      remove: false,
      id: 1,
      price: 3
    }
  ];
 
 var movieCart = [];

  return {
    movieArray: movieArray,
    movieCart: movieCart,
    budget: budget
  };

});
// 1. create click function for the parent div of movies, 
//that copies the item that was clicked on into the cart array

// 2. 
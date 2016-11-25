app.controller('anguControl', function($scope, anguService){
  $scope.movieArray = anguService.movieArray;
  $scope.movieCart = anguService.movieCart;
  $scope.budget = anguService.budget;

  $scope.years = [];
    for(var i = 1982; i <= 2016; i++){
      $scope.years.push(i);
    }



  $scope.addToCart = function(index, movie){
    removeFromBudget(movie.price, index);
    $scope.movieCart[index] = movie;
  };

  var removeFromBudget = function(price, index){
    // if movieCart doesn't include movie
    if (!angular.isObject($scope.movieCart[index])){
      $scope.budget -= price;
    }
    
  };

  $scope.arraySearch = '';
  $scope.movieSearch = '';

  $scope.removeMovie = function($index, movie){
    $scope.movieCart.splice($index, 1);
    $scope.budget += movie.price;
  };
});


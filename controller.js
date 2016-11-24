app.controller('anguControl', function($scope, anguService){
  $scope.movieArray = anguService.movieArray;
  $scope.movieCart = anguService.movieCart;

  $scope.addToCart = function(index){
  // function that adds selected movie to movieCart array
    anguService.movieCart.push(anguService.movieArray[index]);
    console.log($scope);
  };

  $scope.arraySearch = '';
  $scope.movieSearch = '';
});


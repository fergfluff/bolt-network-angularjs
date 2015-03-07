app.controller('MainController', ['$scope', function($scope) {
  $scope.programs  = {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
  };
  {
    series: "Broad City",
    series_img: "http://i.huffpost.com/gen/1619417/thumbs/o-BROAD-CITY-facebook.jpg",
    genre: "Comedy";
    season: 3,
    episode: "Coat Check",
    description: "Broad City follows two women throughout their daily lives in New York City, making the smallest and mundane events hysterical and disturbing to watch all at the same time.",
    datetime: new Date(2015, 03, 10, 00, 00, 00, 00),
  };
}]);
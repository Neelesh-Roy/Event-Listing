
var eventApp = angular.module('eventApp', ['ngRoute', 'eventControllers']);

var eventController = angular.module('eventControllers' , []);

eventApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/login',{
      templateUrl : 'views/login.html'
    }).
      when('/register',{
        templateUrl : 'views/register.html'
    }).
      when('/events',{
        templateUrl : 'views/events.html'
    });
}]);

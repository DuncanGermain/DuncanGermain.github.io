var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//TODO: Refactor with Mel
portfolioApp.config(function($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'partials/main.html',
      controller:  'MainController'
    }).when('/:field', {
      templateUrl: 'partials/field.html',
      controller:  'FieldController'
    }).otherwise({
      redirectTo: '/main'
    });
});

portfolioApp.controller('MainController', function($scope) {
});

portfolioApp.controller('FieldController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/' + $routeParams.field + '.json').success(function(data) {
      $scope.snippets = data;
    });
}]);

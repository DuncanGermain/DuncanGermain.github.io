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
    }).when('/:field/:project', {
      templateUrl: 'partials/project.html',
      controller:  'ProjectController'
    }).otherwise({
      redirectTo: '/main'
    });
});

portfolioApp.controller('MainController', function($scope) {
});

portfolioApp.controller('FieldController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.field = $routeParams.field;
    $http.get('json/' + $routeParams.field + '.json').success(function(data) {
      $scope.snippets = data;
    });
}]);

portfolioApp.controller('ProjectController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/' + $routeParams.project + '.json').success(function(data) {
      $scope.snippets = data;
    });
}]);

portfolioApp.controller('HeaderController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.fields = ['Art', 'Design', 'Apparel', 'Writing', 'Video', 'Code', 'About'];
  $scope.url = $routeParams;
}]);



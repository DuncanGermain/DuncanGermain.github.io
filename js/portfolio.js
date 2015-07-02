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

portfolioApp.controller('HeaderController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.fields = ['Art', 'Design', 'Apparel', 'Writing', 'Video', 'Code', 'About'];
  $scope.url = $routeParams;
}]);

portfolioApp.controller('FieldController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.field = $routeParams.field;
    $http.get('json/' + $routeParams.field + '.json').success(function(data) {
      $scope.snippets = data;
    });
}]);

portfolioApp.controller('ProjectController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce) {
    $http.get('json/projects/' + $routeParams.project + '.json').success(function(data) {
      $scope.projectEntries = data;
      $scope.contents = data[0];
      //      $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.url);
    });
    $scope.imageFilter = function(word) {
      return /imageURL[0-9]*/.test(word);
    };
    $scope.captionFilter = function(word) {
      return /caption[0-9]*/.test(word);
    };
    $scope.blurbFilter = function(word) {
      return /blurb[0-9]*/.test(word);
    };
}]);




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
    }).when('/about', {
      templateUrl: 'partials/about/about.html',
      controller:  'AboutController'
    }).when('/apparel', {
      templateUrl: 'partials/apparel/apparel.html',
      controller:  'ApparelController'
    }).when('/art', {
      templateUrl: 'partials/art/art.html',
      controller:  'ArtController'
    }).when('/code', {
      templateUrl: 'partials/code/code.html',
      controller:  'CodeController'
    }).when('/design', {
      templateUrl: 'partials/design/design.html',
      controller:  'DesignController'
    }).when('/video', {
      templateUrl: 'partials/video/video.html',
      controller:  'VideoController'
    }).when('/writing', {
      templateUrl: 'partials/writing/writing.html',
      controller:  'WritingController'
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

portfolioApp.controller('AboutController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsAbout.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a résumé and articles about Duncan.";
}]);

portfolioApp.controller('ApparelController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsApparel.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of apparel projects.";
}]);

portfolioApp.controller('ArtController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsArt.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of art projects.";
}]);

portfolioApp.controller('CodeController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsCode.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of code projects.";
}]);

portfolioApp.controller('DesignController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsDesign.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of design projects.";
}]);

portfolioApp.controller('VideoController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsVideo.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of video projects.";
}]);

portfolioApp.controller('WritingController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsWriting.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of writing projects.";
}]);

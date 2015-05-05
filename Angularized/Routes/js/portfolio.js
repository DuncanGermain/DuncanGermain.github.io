var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'partials/main.html',
      controller:  'MainController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller:  'AboutController'
    })
    .when('/apparel', {
      templateUrl: 'partials/apparel.html',
      controller:  'ApparelController'
    })
    .when('/art', {
      templateUrl: 'partials/art.html',
      controller:  'ArtController'
    })
    .when('/code', {
      templateUrl: 'partials/code.html',
      controller:  'CodeController'
    })
    .when('/design', {
      templateUrl: 'partials/design.html',
      controller:  'DesignController'
    })
    .when('/video', {
      templateUrl: 'partials/video.html',
      controller:  'VideoController'
    })
    .when('/writing', {
      templateUrl: 'partials/writing.html',
      controller:  'WritingController'
    })
    .otherwise({
      redirectTo: '/main'
    });
});

portfolioApp.controller('MainController', function($scope) {
    $scope.message = "I'll be a handful of cool icons.";
});

portfolioApp.controller('AboutController', function($scope) {
    $scope.message = "I'll be a résumé and articles about Duncan.";
});

portfolioApp.controller('ApparelController', ['$scope', '$http', function($scope, $http) {
    $http.get('json/snippetsApparel.json').success(function(data) {
      $scope.snippets = data;
    });
    $scope.message = "I'll be a list of apparel projects.";
}]);

portfolioApp.controller('ArtController', function($scope) {
    $scope.message = "I'll be a list of art projects.";
});

portfolioApp.controller('CodeController', function($scope) {
    $scope.message = "I'll be a list of code projects.";
});

portfolioApp.controller('DesignController', function($scope) {
    $scope.message = "I'll be a list of design projects.";
});

portfolioApp.controller('VideoController', function($scope) {
    $scope.message = "I'll be a list of video projects.";
});

portfolioApp.controller('WritingController', function($scope) {
    $scope.message = "I'll be a list of writing projects.";
});

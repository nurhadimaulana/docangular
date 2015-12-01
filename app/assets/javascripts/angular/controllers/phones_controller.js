//
// phoneListController version 2
//
phonecatApp.controller("phonesController", ["$scope", "$http",
  function($scope, $http){
    $scope.application_owner = "Hadi"
    $scope.orderProp = 'age';

    //
    // dynamic data fetch from application database
    //
    $http.get("http://localhost:3000/api/v1/phones/list").success(function(data){
      $scope.phones = data.splice(0, 5);
    });
  }
]);

//
// phoneListController version 1
//
// phonecatApp.controller("phoneListController", function($scope, $http){
//   $scope.application_owner = "Hadi"
//   $scope.orderProp = 'age';

//   //
//   // static data
//   //
//   // $scope.phones = [
//   //   {'name': 'Nexus S',
//   //    'snippet': 'Fast just got faster with Nexus S.',
//   //    'age': 1},
//   //   {'name': 'Motorola XOOM™ with Wi-Fi',
//   //    'snippet': 'The Next, Next Generation tablet.',
//   //    'age': 2},
//   //   {'name': 'MOTOROLA XOOM™',
//   //    'snippet': 'The Next, Next Generation tablet.',
//   //    'age': 3}
//   // ];

//   //
//   // dynamic data fetch from application database
//   //
//   $http.get("http://localhost:3000/api/v1/phones/list").success(function(data){
//     $scope.phones = data
//   });
// });
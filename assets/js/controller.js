var lighthouse = angular.module('lighthouse',[]);

lighthouse.factory('beaconFactory', ['$http', function($http) {
   var urlBase = '/Beacons';
   var update = urlBase + '/update';
   var beaconFactory = {};
   beaconFactory.getBeacons = function () {
        return $http.get(urlBase);
        };
   beaconFactory.updateBeacon = function(changedSettings) {
        return $http.put(urlBase + '/' + changedSettings.id, changedSettings);
        };
   beaconFactory.insertBeacon = function (beacon) { return $http.post(urlBase + '/create', beacon); };

   return beaconFactory;
}]);

lighthouse.controller('beaconController', ['$scope', 'beaconFactory','$http', function ($scope, beaconFactory,$http) {
$scope.beacons;
$scope.status;
$scope.newtag;
fetchBeacons();

function fetchBeacons() {
beaconFactory.getBeacons().success(function(be) { $scope.beacons = be; }).error(function (error) { $scope.status = "Error in beacon factory fetching " + error.message; }); }

$scope.updateBeacon = function(id) {
  var beac;
  for (var i = 0; i < $scope.beacons.length;i++) {
	var currBeac = $scope.beacons[i];
	if (currBeac.id === id) { beac = currBeac; break; } } // for loop ends
  beaconFactory.updateBeacon(beac).success(function () { $scope.status = "OK"; }).error(function (error) { $scope.status = "Problem updating beacon " + error.message; }); }; // update beacon ends

$scope.associateTag = function (beaconID) {
	alert("Which one? " + $scope.newtag + " ? To: " + getDescByID(beaconID));
}

function getDescByID(id) {
var beacon; for (var i=0; i< $scope.beacons.length;i++) {
 var thisBeacon = $scope.beacons[i];
 if (thisBeacon.id === id) { beacon = thisBeacon; break; } }
 return beacon.description;
}


$scope.insertBeacon = function () {
 var beacon = { uuid: 'UUID', description:'Description' };
 beaconFactory.insertBeacon(beacon).success(function () {
	$scope.status = "inserted new beacon";
	fetchBeacons(); }).error(function(error) { $scope.status = "problem making beacon" + error.message }); };

}]);

lighthouse.controller('hitController', ['$scope', '$http', function ($scope, $http) {
$scope.hits;
$http.get("/Hits").success(function(data) { $scope.hits = data; });
}]);

lighthouse.controller('regionHitsController', ['$scope', '$http', function ($scope, $http) {
$scope.regionHits;
$http.get("/RegionHits").success(function(data) { $scope.regionHits = data; });
}]);

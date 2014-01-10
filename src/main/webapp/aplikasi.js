HaloController = function($scope){
	$scope.daftarEmail = [
		"endy.muhardin@gmail.com"
	];

    $scope.tambahEmail = function(x){
        $scope.daftarEmail.push(x);
        $scope.email = "";
    };
}

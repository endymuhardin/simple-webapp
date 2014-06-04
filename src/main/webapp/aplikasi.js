HaloController = function($scope, $http){
	$scope.daftarEmail = [
		"endy.muhardin@gmail.com"
	];

    $scope.tambahEmail = function(x){
        $scope.daftarEmail.push(x);
        $scope.email = "";
    };

    $scope.hapus = function(x){
        var index = $scope.daftarEmail.indexOf(x);
        alert("Anda yakin ingin menghapus "+x+" yang ada di index "+ index +" ?");
        $scope.daftarEmail.splice(index, 1);
    };

    $scope.edit = function(x){
        $scope.email = x;
    };

    $scope.updateTanggal = function(){
        $http.get('halo')
        .success(function(data, status, headers, config){
            $scope.tanggal = data.tanggal;
        })
        .error(function(data, status, headers, config){
            alert("Error : "+status);
        });
    };
    
    $scope.updater = null;
    
    $scope.startUpdateWaktu = function(){
        var interval = 1000; // update setiap 1 detik
        $scope.updater = setInterval($scope.updateTanggal, interval);
        console.log("Updater Process : "+$scope.updater);
    };
    
    $scope.stopUpdateWaktu = function(){
        if($scope.updater){
            clearInterval($scope.updater);
            $scope.updater = null;
        }
    };
}

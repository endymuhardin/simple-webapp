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
    }

    $scope.edit = function(x){
        $scope.email = x;
    }

    $scope.updateTanggal = function(){
        $http.get('tanggal.json')
        .success(function(data, status, headers, config){
            $scope.tanggal = data.tanggal;
        })
        .error(function(data, status, headers, config){
            alert("Error : "+status);
        });
    }
}

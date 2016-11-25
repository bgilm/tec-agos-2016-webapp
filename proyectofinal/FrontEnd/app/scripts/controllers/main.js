'use strict';

/**
 * @ngdoc function
 * @name bancosFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bancosFrontApp
 */
angular.module('bancosFrontApp')
  .controller('MainCtrl', function ($scope,$http,$interval ,$log,$window,CuentaBancaria) {
        $scope.cuentas=[];
        

         $scope.incompleteCount = function () {
                var count = 0;
                angular.forEach($scope.cuentas.items, function (item) {
                    if (!item.done) { count++ }
                });
                return count;
            }

            $scope.warningLevel = function () {
                return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
            }


            $scope.login = function (username, password){
            	$http.post('http://localhost:8080/api/login',{
                	username: username,
                	password: password
                }).then(
                	function successCallback(response) {
                		$log.debug("usuario logeado")
  						  $window.sessionStorage.token = response.data.access_token;
  						  $scope.loginestatus  = "Bienvenido";
  						  $scope.logged = true;
                          
  					}
  					, function errorCallback(response) {
   						if(response.status==401){
   							$scope.loginestatus  = "Usuario o password invalido";
   						}else{
   							$scope.loginestatus = "algo paso mal";
   						}
  					}

                )
            }

            $scope.addNewItem = function (cuenta) {
            	$log.debug("add"+cuenta.numeroCuenta +"|"+cuenta.nombreCuenta);


            $http.post("http://localhost:8080/cuentas",{nombre:cuenta.nombreCuenta,numeroCuenta:cuenta.numeroCuenta})
                          .then(function(response) {
                            $log.debug("en el insert"+response.data)
                              $scope.cuentas = $http.get("http://localhost:8080/cuentas")
                                .then(function(response) {
                                $log.debug(" en la lista"+response.data.nombre)
                              $scope.cuentas = response.data;

                         
                        });       

                         
                        });  

    		    	//$scope.cuentas = CuentaBancaria.listas(); 
                    

			
            }

  });

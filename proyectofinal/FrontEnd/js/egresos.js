         var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

        var encodedString = Base64.encode('1:4hc-3cd13925d758704bffe4');
        //var username= document.getElementById("username").value;
        console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
        var app = angular.module("prueba", []);
        app.controller('MainCtrl', function ($scope,$http) {
              //$scope.consultarEgresos = function(){
                var req = {
                    method: 'GET',
                    url: 'http://localhost:8000/perfil/egreso/consultar/admin',
                    headers: {
                        'Authorization':'Basic '+encodedString
                    }
                    }
                $http(req).then(function(res){
           		   var data=res.data;
                    var egresos=[];
                    for(var i=0;i<data.length;i++){
                        egresos[i]=data[i].fields
                    }
           		   $scope.egresos=[]
                   
           		   console.log(egresos);
           		   $scope.egresos=egresos;
           		
                });
                
            //}
            $scope.altaEgreso = function(){                
        var req = {
            method: 'POST',
            url: 'http://localhost:8000/perfil/egreso/agregar',
              data:{username:'admin',
                          tarjeta:$scope.tarjeta,
                          nombre: $scope.nombre,
                          monto:$scope.monto,
                          recurrencia:$scope.recurrencia,
                          fijo:$scope.fijo,
                          tipo:$scope.tipo,
                          fecha:$scope.fecha,
                          financiado:$scope.financiado,
                          plazo:$scope.plazo    
                    },
           
            headers: {
                'Authorization':'Basic '+encodedString
            }
          
            }
             $http(req).then(function successCallback(response) {
                        console.log("Success"+response);
                  }, function errorCallback(response) {
                        console.log("Error"+response);
            });
            }
             
        });

    
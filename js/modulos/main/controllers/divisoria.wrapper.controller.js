angular.module('main.js')
    .controller('divisoria.wrapper.controller', 
        ['$scope', '_divisoria', 
 function($scope ,  _divisoria){

        //callback apos angular disponibilizar load
        angular.element(_divisoria.inicializar);
        
    }]);
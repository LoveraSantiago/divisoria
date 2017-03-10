angular.module('main.js')
    .directive('divisoria', function(){
        
        return{
            retrict: 'AE',
            templateUrl : 'views/modulos/main/componentes/divisoria.html',
            controller : 'divisoria.wrapper.controller'
        };
    })
    
    .directive('parteDeCima', function(){

        return{
            retrict: 'AE',
            templateUrl : 'views/modulos/main/componentes/parte-de-cima.html',
            controller : 'partedecima.wrapper.controller'
        };
    })
    
    .directive('parteDeBaixo', function(){

        return{
            retrict: 'AE',
            templateUrl : 'views/modulos/main/componentes/parte-de-baixo.html',
            controller : 'partedebaixo.wrapper.controller'
        };
    });
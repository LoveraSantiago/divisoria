angular.module('main.js')
     .controller('partedecima.wrapper.controller', 
        ['$scope', '__parteCima', 'hotRegisterer', '$timeout', '__confight', '__matriz', '__alinha',
 function($scope ,  __parteCima,   hotRegisterer ,  $timeout ,  __confight ,  __matriz ,  __alinha){
        
        let planCima;
        $scope.settingsInicial = __confight.getConfiguracao();
        $scope.matrizCima = { matriz : __matriz.getMatriz() };
        
        //chamado apos o onload
        var callBackOnLoad = function(){
            planCima = hotRegisterer.getInstance('planCima');
            __parteCima.registrarCallBackDivisoriaMovimentada(callBackDivisoriaMovimentada);
            __alinha.registrarHotTable(planCima);

            $timeout(function(){
                planCima.render();
            });
        };
        angular.element(callBackOnLoad);

        var callBackDivisoriaMovimentada = function(altura){
            planCima.updateSettings({ height : altura });
        };         
    }]);
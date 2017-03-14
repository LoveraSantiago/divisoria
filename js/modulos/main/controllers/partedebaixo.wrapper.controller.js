angular.module('main.js')
     .controller('partedebaixo.wrapper.controller', 
        ['$scope', '__parteBaixo', 'hotRegisterer', '$timeout', '__confight', '__matriz', '__alinha',
 function($scope ,  __parteBaixo ,  hotRegisterer ,  $timeout ,  __confight ,  __matriz ,  __alinha){
        
        let planBaixo;
        $scope.settingsInicial = __confight.getConfiguracao();
        $scope.matrizBaixo = { matriz : __matriz.getMatriz() };

        //chamado apos o onload
        var callBackOnLoad = function(){
            planBaixo = hotRegisterer.getInstance('planBaixo');
            __parteBaixo.registrarCallBackDivisoriaMovimentada(callBackDivisoriaMovimentada);
            __alinha.registrarHotTable(planBaixo);

             $timeout(function(){
                planBaixo.render();
            });
        };
        angular.element(callBackOnLoad);

         var callBackDivisoriaMovimentada = function(altura){
            planBaixo.updateSettings({ height : altura });
        };
    }]);
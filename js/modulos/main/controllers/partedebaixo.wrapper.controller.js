angular.module('main.js')
     .controller('partedebaixo.wrapper.controller', 
        ['$scope', '__parteBaixo', 'hotRegisterer', '$timeout', '__confight',
 function($scope ,  __parteBaixo ,  hotRegisterer ,  $timeout ,  __confight){
        
        let planBaixo;
        $scope.config;
        $scope.settingsInicial = { contextMenu: ['row_above', 'row_below', 'remove_row']};

        //chamado apos o onload
        var callBackOnLoad = function(){
            planBaixo = hotRegisterer.getInstance('planBaixo');
            __parteBaixo.registrarCallBackDivisoriaMovimentada(callBackDivisoriaMovimentada);

            __confight.configurar(planBaixo, 'planBaixo');

            $scope.config = planBaixo.configuracao;
            planBaixo.updateSettings($scope.config.settings, true);

             $timeout(function(){
                planBaixo.render();
            });
        };
        angular.element(callBackOnLoad);

         var callBackDivisoriaMovimentada = function(altura){
            planBaixo.updateSettings({ height : altura });
        };
    }]);
angular.module('main.js')
     .controller('partedecima.wrapper.controller', 
        ['$scope', '__parteCima', 'hotRegisterer', '$timeout', '__confight',
 function($scope ,  __parteCima,   hotRegisterer ,  $timeout ,  __confight){
        
        let planCima;
        $scope.config;
        $scope.settingsInicial = { contextMenu: ['row_above', 'row_below', 'remove_row']};
        
        //chamado apos o onload
        var callBackOnLoad = function(){
            planCima = hotRegisterer.getInstance('planCima');
            __parteCima.registrarCallBackDivisoriaMovimentada(callBackDivisoriaMovimentada);

            __confight.configurar(planCima, 'planCima');

            $scope.config = planCima.configuracao;
            planCima.updateSettings($scope.config.settings, true);

            $timeout(function(){
                planCima.render();
            });
        };
        angular.element(callBackOnLoad);

        var callBackDivisoriaMovimentada = function(altura){
            planCima.updateSettings({ height : altura });
        };         
    }]);
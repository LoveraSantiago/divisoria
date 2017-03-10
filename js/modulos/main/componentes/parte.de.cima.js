angular.module('main.js')
    .factory('__parteCima', function(){

        let divCima;
        let callBacksDivisoriaMovimentada = [];

        var __inicializar = function(){
            divCima = $('#parteCima');
        };

        var __registrarCallBackDivisoriaMovimentada = function(callbak){
            callBacksDivisoriaMovimentada.push(callbak);
        };

        var __listenerDivisoriaMovimentada = function(pCimaDivisoria){
            divCima.height(pCimaDivisoria);
            for(let i = 0; i < callBacksDivisoriaMovimentada.length; i++){
                callBacksDivisoriaMovimentada[i](divCima.height());
            };
        };

        return{
            inicializar : function(){
                return __inicializar();
            },
            listenerDivisoriaMovimentada : function(pCimaDivisoria){
                return __listenerDivisoriaMovimentada(pCimaDivisoria);
            },
            registrarCallBackDivisoriaMovimentada : function(callback){
                return __registrarCallBackDivisoriaMovimentada(callback);
            },
        };
    });
angular.module('main.js')
    .factory('_divisoria', function($window, __parteCima, __parteBaixo){

        let divisoria;

        var __inicializar = function(){
            divisoria = $('#divisoria');
            divisoria.on("mousedown", mouseClicado);

            angular.element($window).on('mouseup', mouseDesclicado);

            __parteCima.inicializar();
            __parteBaixo.inicializar();

            recuperarUltimaPosicao();
            movendoPartes();
        };

        var recuperarUltimaPosicao = function(){
            let ultimaPosicao = localStorage.getItem('posicaoBarra');
            if(ultimaPosicao){
                divisoria.css('top', Math.max(0, ultimaPosicao));
            };
        };

        var mouseClicado = function(e){
            angular.element($window).on('mousemove', movendoDivisoria);
        };

        var mouseDesclicado = function(){
            angular.element($window).off('mousemove', movendoDivisoria);
        };

        var movendoDivisoria = function(e){
            divisoria.css('top', Math.max(0, e.clientY));
            localStorage.setItem('posicaoBarra', e.clientY);
            movendoPartes();
        };

        var movendoPartes = function(){
            let posicao = divisoria.position();
            __parteCima.listenerDivisoriaMovimentada(posicao.top);
            __parteBaixo.listenerDivisoriaMovimentada(posicao.top - divisoria.height());
        };

        return{
            inicializar : function(){
                return __inicializar();
            }
        }
    });
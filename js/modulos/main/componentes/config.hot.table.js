angular.module('main.js')
    .factory('__confight', function(__alinha){

        var colorirLinha = function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.background = '#CEC';
        };

        var descolorirLinha = function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.background = '#FFF';
        };

        var __getConfiguracao = function(){
            return { 
                contextMenu: ['row_above', 'row_below', 'remove_row'], 

                afterSelection : function(r, c, r2, c2){
                    __alinha.setarLinhaSelecionada(r);
                },
            };
        };

        return{
            getConfiguracao : function(){
                return __getConfiguracao();
            }
        }
    });
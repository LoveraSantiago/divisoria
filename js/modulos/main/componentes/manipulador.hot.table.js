angular.module('main.js')
    .factory('__manipuladorht', function(){

        var __addManipulador = function(hotTable){
            hotTable.manipulador = {
                comprimentar : function(){
                    console.log('oi de dentro do manipulador');
                },
                colorirLinha : function(linha){                    
                    let tr = this.getTrDaLinha(linha);
                    tr.addClass('linhaAtiva');
                },
                descolorirLinha : function(linha){
                     let tr = this.getTrDaLinha(linha);
                     tr.removeClass('linhaAtiva');
                },

                getTrDaLinha : function(linha){
                    let cell = $(hotTable.getCell(linha, 0));
                    return $(cell.closest('tr'));
                }
            }
        };

        return{
            addManipulador : function(hotTable){
                return __addManipulador(hotTable);
            }
        }
    });
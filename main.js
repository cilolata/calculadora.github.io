$( function(){

   var valor1, valor2, operacao

    $(".btn").click(function(){
        $(".campo").val($(".campo").val() + $(this).val())
    });

    $(".C").click(function(){
        $(".campo").val(" ");
        $(".operacao").text(" ")
    });

    $(".soma").click(function(){
        if(!$(".campo").val() == " "){
            valor1 = parseFloat($(".campo").val());
            $(".campo").val('');
            operacao = "soma"
            $(".operacao").text($(this).val())
        }else {
            $(".campo").val("0");
        }
    });

    $(".igual").click(function(){
        if(!$(".campo").val() == " "){
            valor2 = parseFloat($(".campo").val());

           if(operacao == "soma"){
               $(".campo").val(valor1 + valor2)
           }
        }else {
            $(".campo").val("0");
        }
    });

        $(".subtracao").click(function(){
            if(!$(".campo").val() == " "){
                valor1 = parseFloat($(".campo").val());
                $(".campo").val('');
                operacao = "subtracao"
                $(".operacao").text($(this).val())
            }else {
                $(".campo").val("0");
            }
        });
    
        $(".igual").click(function(){
            if(!$(".campo").val() == " "){
                valor2 = parseFloat($(".campo").val());
    
               if(operacao == "subtracao"){
                   $(".campo").val(valor1 - valor2)
               }
            }else {
                $(".campo").val("0");
            }

      
    });

    $(".divisao").click(function(){
        if(!$(".campo").val() == " "){
            valor1 = parseFloat($(".campo").val());
            $(".campo").val('');
            operacao = "divisao"
            $(".operacao").text($(this).val())
        }else {
            $(".campo").val("0");
        }
    });

    $(".igual").click(function(){
        if(!$(".campo").val() == " "){
            valor2 = parseFloat($(".campo").val());

           if(operacao == "divisao"){
               $(".campo").val(valor1 / valor2)
           }
        }else {
            $(".campo").val("0");
        }
    });

        $(".multiplicacao").click(function(){
            if(!$(".campo").val() == " "){
                valor1 = parseFloat($(".campo").val());
                $(".campo").val('');
                operacao = "multiplicacao";
                $(".operacao").text($(this).val())
            }else {
                $(".campo").val("0");
            }
        })

        $(".igual").click(function(){
            if(!$(".campo").val() == " "){
                valor2 = parseFloat($(".campo").val());

            if(operacao == "multiplicacao"){
                $(".campo").val(valor1 * valor2)
            }
            }else {
                $(".campo").val("0");
            }

        
        });

        $(".porcentagem").click(function(){
            if(!$(".campo").val() == " "){
                valor1 = parseFloat($(".campo").val());
                $(".campo").val('');
                operacao = "porcentagem"
                $(".operacao").text($(this).val())
            }else {
                $(".campo").val("0");
            }
        });
    
        $(".igual").click(function(){
            if(!$(".campo").val() == " "){
                valor2 = parseFloat($(".campo").val());
    
               if(operacao == "porcentagem"){
                   $(".campo").val(valor1 * valor2 / 100)
               }
            }else {
                $(".campo").val("0");
            }
        });

});
  




        let atalho_button = document.querySelectorAll('.js-nota');
        let buttonsArray = Array.from(atalho_button);
    
        // SCRIPT DOS BOTÕES
        function change_nota (avaliacao) {
            
            buttonsArray.forEach((parametro, i) => {
                if (buttonsArray[i].classList.contains('selecionado')) {
                    buttonsArray[i].classList.replace('selecionado', 'hbt');
                }
            });
            atalho_button[avaliacao - 1].classList.replace('hbt', 'selecionado');

            //STORAGE VALOR

            let avaliacaotxt = JSON.stringify(avaliacao)

            localStorage.setItem('notaDada', avaliacaotxt)
            
        }
        
        

        //SCRIPT DA NOTA
        function valor_nota () {
            var nt
            buttonsArray.forEach((parametro, i) => {
                if (buttonsArray[i].classList.contains('selecionado')) {
                    nt = Number(buttonsArray[i].value);
                }
            });
            
            return nt
        }
    


        //SCRIPT DO SUBMIT
         function rediPagThx () {

            if (valor_nota() > 0) {
                location.href = "Thank_You_Page.html";
            }


         }

         //TEXTO DE AGRADECIMENTO
         function alterando_txt () {
            
         }

         
         
         
         


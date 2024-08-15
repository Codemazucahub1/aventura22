const avanca= document.querySelectorAll('.btn-proximo');

avanca.forEach(buttom=>{
    buttom.addEventListener('click', fuction){
        const atual = document.querySelection('.ativo');
        const proximoPasso='passo-'+this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add ('ativo')
    }
})
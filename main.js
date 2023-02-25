let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let campObg = document.querySelectorAll(".campObg")
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (input1.value == '' || input2.value == '') {
        for(let i = 0; i < campObg.length; i++) {
            campObg[i].innerHTML = "Campo Obrigatório"
            campObg[i].style.color = 'red'
        }
        alert('Não foi possível efetivar seu cadastro.');

    } else {
        for(let i = 0; i < campObg.length; i++) {
            campObg[i].innerHTML = ""
        }
        alert('Cadastro efetuado com sucesso.');

    }
});

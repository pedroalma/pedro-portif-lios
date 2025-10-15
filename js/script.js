//documento e a forma de referencia os elementos de 
// htmal no codigo para esse caso estamos chamando 
//a classe de "getElementBy"
//que vai buscar o elemento pelo id determinado dentro do html 
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let mensagem = document.getElementById("Mensagem")
let paragrafo = document.getElementById("MensagemObt");

emailjs.init('yjUoGTYvdUKGnu4QA');//inicializando o emailjs com API_KEY


// innerText adiciona umtexto no html atraves do js 
// paragrafo.innerText = "exemplo de texto";

function verificarCampos(event) {
    event.preventDefault();
    if(nome.value == '' || email.value == '' || telefone.value == '' || mensagem.value == '') {
        //alert("Preencha todos os campos !");
        paragrafo.innerText = "Preencha todos os campos !";
        paragrafo.style.color ="red";
        paragrafo.style.fontWeight = "bold";
        paragrafo.style.textAlign = "center";
    }else{
        paragrafo.innerText = "formulario enviado";
        paragrafo.style.color ="";
        paragrafo.style.fontWeight = "bold";
        paragrafo.style.textAlign = "center";

        emailjs.send('service_ossbdao' , 'template_po5jsk4',
            {
                to_name: nome.value,
                to_email: email.value,
                to_tel: telefone.value,
                to_message: mensagem.value 
            }
        );

        nome.value = '';
        email.value = '';
        telefone.value ='';
        mensagem.value ='';
    }
};

// function verificarCampos(event) {
//     event.preventDefault();
//     if(nome.value == '' || email.value == '' || telefone.value == '' ) {
//         //alert("Preencha todos os campos !");
//         paragrafo.innerText = "Preencha todos os campos !";
//         paragrafo.style.color ="red";
//     }else if(nome.value != '' || email.value != '' || telefone.value != '' ) {
//         //alert("Preencha todos os campos !");
//         paragrafo.innerText = "campo";
//         paragrafo.style.color = "#35b244";
//     }
// }
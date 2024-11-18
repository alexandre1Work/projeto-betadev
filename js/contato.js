const form = document.getElementById("form");
const username = document.getElementById("nome");
// const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    // const emailValue = email.value;
    const mensagemValue = mensagem.value;

    const url = ('https://wa.me/+5538998815385/?text= ' + 
        ' Nome: ' + usernameValue + '\n' + 
        // ' Email: ' + emailValue + '\n' +
        ' Mensagem:' + mensagemValue);

    const win = window.open(url, '_blank')
    win.focus()
})
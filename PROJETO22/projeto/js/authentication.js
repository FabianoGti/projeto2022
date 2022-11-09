const baseURL = "http://127.0.0.1:5500"

/**
 * loginFierebase
 * Realiza a autenticaçãpo do usuario no Firebase
 * @param {string} email - email do usuario 
 * @param {string} senha - senha do usuario 
 * @return {object} - o Objeto com o usuario logado
 */
function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    .catch(error => {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })

}   
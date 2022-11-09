
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
        let mensagemErro = ''
        switch(error.code) {
            case 'auth/invalid-email':
            mensagemErro = 'O e-mail informado é invalido'
            break;
            default:
                mensagemErro = error.message
        }
        alert(`Erro ao efetuar o login: ${error.code}`)
    })

}

/**
 * novo usuario.
 * Cria um novo usuario no Firebase
 * @param {string} email - email usuario
 * @param {string} senha - senha usuario
 * @return {object} - O usuario criado
 */
function novoUsuario( email, senha){
    firebase.auth().creatureUserWithEmailAndPassword(email, senha).then((result) => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        //Direcionamos o usuario para a tela inicial
        window.location.href= `${baseURL}/home.html`
    })
}

/**
 * verificaLogado
 * Verifica se o usuario esta logado no sistema
 * @return {null}
 */
function verificaLogado(){
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log('acesso invalido. Redirecionamento...')
            window.location.href = baseURL
        }
    })
}
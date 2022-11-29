// // sessão
// function validarSessao() {
//     // aguardar();

//     var nome = sessionStorage.NOME_USUARIO;
//     var sobrenome = sessionStorage.SOBRENOME_USUARIO;

//     var b_usuario_nome = document.getElementById("b_usuario_nome");
//     var b_usuario_sobrenome = document.getElementById("b_usuario_sobrenome");

//     if (nome != null && sobrenome != null) {
//         // window.alert(`Seja bem-vindo, ${nome}!`);
//         b_usuario_nome.innerHTML = nome;
//         b_usuario_sobrenome.innerHTML = sobrenome;

//         // finalizarAguardar();
//     } else {
//         window.location = "../login.html";
//     }
// }


function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

// const nome = "Gabi";

// try{
//     nome= "Damasceno";
// } catch (error) { 
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro"+ error);
// }

// console.log("Teste");

// nome= "Costa"; // quando você tenta executar um cod ilegal no java, ele interrompe na hora e não deixa continuar a execução do scripth

// console.log("teste2")

function verificarLogin() {
    let usuario = document.getElementById("txtLogin");//váriavel Login
    let senha = document.getElementById("txtSenha");// váriavel Senha
    try { // ele inicia a tentativa de execução que estiver no bloco try
        if (usuario.value !== "usuario123"){  // ele vai verificar o valor do usuario, se tem um ! é diferente
            throw new Error("Erro Usuario incorreta");//ele vai validar o usuario e lançar um novo erro
        }
        if (senha.value !== "senha123") { //quando tem exclamação significa que é diferente..
            throw new Error("Error: Senha incorreta.");//erro genérico 
            
        }
        console.log("Login realizado com sucesso."); // funciona se a senha estiver correta
    } catch (erro) { //encerrado do bloco de cod try e iniciamento do bloco catch
        console.error(erro.message); // envia uma mensagem de erro no console
    } // encerra o bloco de cod do catch
} // encerra o bloco de cod do fazer login
    

    

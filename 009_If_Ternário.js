const aprovado = true;
let mensagem = "";
//Modo no If tradicional
if (aprovado == true) {
    mensagem = 'Aprovado'
} else {
    mensagem = 'Reprovado'
}

//Modo ternário
//             condição      ? se verdadeiro : se falso;
mensagem = (aprovado == true) ? 'Aprovado': 'Reprovado';
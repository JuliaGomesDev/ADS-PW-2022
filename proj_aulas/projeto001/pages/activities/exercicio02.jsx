export default function start(){
    const subtitulo = "estou no subtítulo"
    const resposta = maior_idade(15);
    const conteudo = (
        <div>
            <h1>Olá mundo JSX</h1>
            <h1>{subtitulo}</h1>
            <h2>{3+3}</h2>
            <h2>{maior_idade(20)}</h2>
            <h2>Resposta: {resposta}</h2>
        </div>
    )
    return conteudo
}

// JAVASCRIPT

function maior_idade(idade){
    if(idade>=18){
        return "Vc é MAIOR de idade"
    } else {
        return "Vc é MENOR de idade"
    }
}
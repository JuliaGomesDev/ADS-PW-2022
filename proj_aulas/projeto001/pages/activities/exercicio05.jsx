import Constructor from "../../components/Constructor";

export default function init() {
  return (
    <>
      <Constructor
        principal="Pagina de cadastro"
        descricao="Página para gerenciar o cadastro"
        little={true}
      />
      <Constructor
        nome="Julia"
        idade="20 anos"
      />
    </>
  )
}
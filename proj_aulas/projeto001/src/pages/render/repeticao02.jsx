import listaProduto from "../../data/listaProduto";

export default function repeticao02() {
  function renderizarLinhas() {
    return listaProduto.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table>
        <caption>Tabela de Produtos</caption>

        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}

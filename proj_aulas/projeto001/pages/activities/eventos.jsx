const block = {
  display: "block",
  marginBottom: "10px",
};

function acao1() {
  alert("Que aula chata, Senhor!!");
}

export default function init() {
  function acao2() {
    alert("Meu Deus, arraque os meus olhos!!");
  }

  function acao5(e) {
    console.log(e);
  }

  return (
    <div>
      <button onClick={acao1} style={block}>
        Clique 1
      </button>
      <button onClick={acao2} style={block}>
        Clique 2
      </button>
      <button
        onClick={function () {
          alert("Estou te avisando");
        }}
        style={block}
      >
        Clique 3
      </button>
      <button onClick={() => alert("Alguém me tira daqui")} style={block}>
        Clique 4
      </button>
      <button onClick={acao5} style={block}>
        Clique 5
      </button>
      <button onClick={(e) => acao5(e.altKey)} style={block}>
        Clique 5 v2
      </button>
      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>
  );
}

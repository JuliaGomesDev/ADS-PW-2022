export default function _Style(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.number >= 0 ? "blue" : "red",
          color: "white",
        }}
      >
        Numero: {props.number}
      </h1>
    </div>
  );
}

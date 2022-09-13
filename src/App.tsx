interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button> {props.title} </button>;
}

function App() {
  return (
    <>
      <Button title="Teste 1"></Button>
      <Button title="Teste 2"></Button>
      <Button title="Teste 3"></Button>
      <Button title="Hellow World"></Button>
    </>
  );
}

export default App;

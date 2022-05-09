import "./App.css";

interface ILink {
  text?: string;
}

function Link(props: ILink) {
  return <h2>{props.text}</h2>;
}

function App() {
  return (
    <div className="App">
      <Link text="link 01" />
    </div>
  );
}

export default App;

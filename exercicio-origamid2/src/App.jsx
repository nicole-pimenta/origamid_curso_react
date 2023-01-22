import Home from "./components/Home";
import Produtos from "./components/Produtos";
import ListItem from "./components/ListItem";

function App() {
  const { pathname } = window.location;

  return (
    <div>
      <ul>
        <ListItem>Home</ListItem>
        <ListItem>Produtos</ListItem>
      </ul>
      {pathname === "/Produtos" ? <Produtos /> : <Home />}
    </div>
  );
}

export default App;

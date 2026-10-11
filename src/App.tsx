import ListGroup from "./Components/ListGroup";

function App() {

   let items = [
    "New York",
    "Kurunegala",
    "Polgahawela",
    "Point Fedro",
    "Mathara",
  ];

  return <div><ListGroup items={items} headding="Citys" /></div>
}

export default App;

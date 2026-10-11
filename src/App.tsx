import ListGroup from "./Components/ListGroup";

function App() {

   let items = [
    "New York",
    "Kurunegala",
    "Polgahawela",
    "Point Fedro",
    "Mathara",
  ];

  const onSelect = ()=> {
    console.log('Selected');
  }

  return <div><ListGroup items={items} headding="Citys" onSelectItem={onSelect} /></div>
}

export default App;

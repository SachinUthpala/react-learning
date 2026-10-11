import Alerts from "./Components/Alerts";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {

   let items = [
    "New York",
    "Kurunegala",
    "Polgahawela",
    "Point Fedro",
    "Mathara",
  ];

  const onSelect = (item :string) => {
    console.log(item);
  }

  return <div>
    <ListGroup items={items} headding="Citys" onSelectItem={onSelect} />

    <br />

    <Alerts>
      Hello <span>World</span>
    </Alerts>

    <Button buttonName="Exsercies Button" buttonType="warning" onclick={() => console.log("btn clicked")} />
  </div>
}

export default App;

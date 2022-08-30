import './App.css';
import {useState, useTransition} from "react";
import ItemList from "./ItemList";


function App() {
    const [isPending, startTransition] = useTransition();
    const [boxCount, setBoxCount] = useState();

    const handleUpdate = ({target}) => {
        // setBoxCount(target.value.length);
        startTransition(()=>{
            setBoxCount(target.value.length);
        });
    };
  return (
    <div className="App">
      <h2>React18</h2>
      <input type="text" onChange={handleUpdate} />
        {isPending && <h1>Pending...</h1>}
        <ItemList items={boxCount} />
    </div>
  );
}

export default App;

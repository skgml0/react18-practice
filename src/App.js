import './App.css';
import {useState, useTransition} from "react";
import ItemList from "./ItemList";


function App() {
   
    const [isPending, startTransition] = useTransition();
    const [boxCount, setBoxCount] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [message, setMessage] = useState();

    const handleUpdate = ({target}) => {
        // setBoxCount(target.value.length);
        startTransition(()=>{
            setBoxCount(target.value.length);
        });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(phoneNumber);
    }

    const handleChange = (event)=> {
      // set 과 시점차이가 존재한다.
      if (event.target.value.startsWith(0)) {
        setMessage('good');
        setPhoneNumber(event.target.value);
      }else if (event.target.value.length ===0){
        setPhoneNumber("");
        setMessage("");
      }
      else{
        setPhoneNumber('');
        setMessage('bad');
      }

    }
  return (
    <div className="App">
      <h2>React18</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <br />
        <input id="phone" onChange={handleChange} name="phone" value={phoneNumber}/>
        <button type="submit" disabled={ phoneNumber?.length ===0 || message !== "good"}>Submit</button>     
      </form>
      <h3>{message}</h3>
      <h3> {phoneNumber}</h3>
        <input type="text" onChange={handleUpdate} />

        {isPending && <h1>Pending...</h1>}
        <ItemList items={boxCount} />
    </div>
  );
}

export default App;

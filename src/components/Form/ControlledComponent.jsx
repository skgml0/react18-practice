import React,{useState} from 'react';

function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM");
    const [flavor, setFlavor] = useState("coconut");
    function handleChange(event){
        setName(event.target.value);
    }

    function handleSubmit(event){
        alert(`name : ${name}, essay : ${essay}, flavor : ${flavor}`);
        event.preventDefault();
    }

    function handleEssayChange(event){
        setEssay(event.target.value);
    }

    function handleFlavorChange(event){
        setFlavor(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Essay:
                <textarea value={essay} onChange={handleEssayChange} />
            </label>
            <br />
            <label>
              Pick your favorite flavor: 
              <select value={flavor} onChange={handleFlavorChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">lime</option>
                <option value="coconut">coconut</option>
                <option value="mango">mango</option>
              </select>
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default ControlledComponent;
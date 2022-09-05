import React,{useState} from 'react';
// html, react 기본 제공 name ="" 로 분류 가능/ 
// type=""에 따라서도 구분해서 동작가능 

// Controlled Component -> input의 value를 state로 관리
// 다중입력 -> event.target.name
// Uncontrolled Component -> form element 자체의 내부 상태 활용
// defaultValue, ref -> 기본값 / value 확인 

function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM");
    const [flavor, setFlavor] = useState("coconut");

    function handleChange(event){
        const name = event.target.name;
        if (name ==='name') {
            setName(event.target.value);        
        }
        if (name ==='essay'){
            setEssay(event.target.value);
        }
        if (name ==='flavor'){
            setFlavor(event.target.value);
        }
    }

    function handleSubmit(event){
        alert(`name : ${name}, essay : ${essay}, flavor : ${flavor}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <br />
            <label>
              Pick your favorite flavor: 
              <select name="flavor" value={flavor} onChange={handleChange}>
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
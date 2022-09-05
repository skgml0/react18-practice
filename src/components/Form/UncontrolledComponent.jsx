import React, {useRef} from 'react';
// Uncontrolled는 값 자체는 모른다. 
function UncontrolledComponent() {
    const fileInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Upload file: 
                    <input type="file" ref={fileInputRef} />
                </label>
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}

export default UncontrolledComponent;
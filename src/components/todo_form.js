import React from 'react';

const Form = ({ input, onChange, onKeyPress, onCreate }) => {
    return (
        <div className="todo-form">
            <input value={input} onChange={onChange} onKeyPress={onKeyPress} type="text" className="input" placeholder="Add Todos"></input>
            <input onClick={onCreate} type="submit" className="submit" value="Add"></input>
        </div>        
    );
}

export default Form;
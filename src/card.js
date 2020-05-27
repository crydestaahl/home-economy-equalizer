import React from 'react'
import ExpenceList from './ExpenceList'
const { useState, useEffect, useRef } = React; 

function Card({ name, getSallary }) {
    const [ currentName ] = useState(name);
    const [ childValue, setChildValue ] = useState(0); 
    const [ expences2, setExpences ] = useState();
    const [ yourSallary, setYourSallary ] = useState(0);

    const updateSum = (sum) => {
        setChildValue(parseInt(sum));
    }

    const getExpences = (value) => {
        setExpences(value);
    }

    const handleInputChange = e => {
        const newSallary = e.target.value;
        setYourSallary(newSallary);
        getSallary(newSallary);
    }

    useEffect(() => {
        const valueString = JSON.stringify(expences2)
        window.localStorage.setItem('Expences ' + currentName, valueString);
    },[expences2])

    return (
        <div className="card has-margin-1 has-padding-2 has-border-radius">
            <div class="media-content">     
                <div className="columns">
                    <div className="column">
                        <p class="title is-4">{currentName}</p>
                        <p class="title is-6">Du har kvar: {yourSallary - childValue}</p>     
                        <label className="label">Lön:</label>
                        <div className="control">
                                    <input 
                                        id={currentName} 
                                        key={currentName} 
                                        className="input is-small is-primary is-rounded" 
                                        type="text" 
                                        name="Lön"
                                        placeholder="Lön"
                                        onChange={handleInputChange} 
                                    />                                
                                </div>
                    </div>
                    <div className="column">
                        <p className="title is-6">Du betalar: {childValue}</p>
                    </div>
                </div>
                <ExpenceList updateSum={updateSum} getExpences={getExpences} name={currentName}/>
            </div>                  
        </div>
    )
}

export default Card; 
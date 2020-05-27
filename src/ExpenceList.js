import React from 'react'
import { useState, useEffect, useuseLayoutEffect } from 'react'
import updateSum from './card'
import bulma from 'bulma'
import { getValue } from '@amcharts/amcharts4/.internal/core/utils/Type'


function ExpenceList({ updateSum, getExpences, name }) {
    const savedEx = window.localStorage.getItem('Expences ' + name);
 
    const [sum, setSum] = useState(0)
    const [value, setValue] = useState({
        utlägg: '',
        räkningar: '',
        hus: '',
        bil: '',
        mat: '',
        resa: ''        
    })
    
    const expences = [ 'Expenses:', 'Bills:', 'House:', 'Car:', 'Car loan:', 'Food:', 'Travel:']

    const handleInputChange = e => {
        const newValue = e.target.value
        setValue({
            ...value,
            [e.target.name]: parseInt(newValue)
        })
        getExpences(value);
    }

    // The sum of the values 
    useEffect(() => {
        let newSum = 0;
        for (let key in value) {
            newSum += value[key]
        }
        setSum(newSum)
        updateSum(sum)
    })
      
    return(
        <div>
            {
                expences.map(expence => 
                    <div className="columns">
                        <div className="column">    
                            <div className="field">
                            <label className="label">{expence}</label>
                                <div className="control">
                                    <input 
                                        id={expence} 
                                        key={expence} 
                                        className="input is-small is-primary is-rounded" 
                                        type="text" 
                                        name={expence.toLowerCase().substring(0, expence.length -1)}
                                        placeholder={expence}
                                        onChange={handleInputChange} 
                                    />                                
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
} 

export default ExpenceList; 
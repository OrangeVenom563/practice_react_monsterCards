import React from 'react';
import './search-box.styles.css'

export const SerachBox = ({ph,handleChange}) => (
    <input 
    className="search"
    type="search" 
    placeholder={ph}
    onChange={handleChange}/>
);
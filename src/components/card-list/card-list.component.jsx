import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) =>
    <div className="card-list">
        {props.monsters.map((elt) =>
            <Card key={elt.id} monster={elt} />)}
    </div>
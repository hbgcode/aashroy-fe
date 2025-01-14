import React from 'react';
import { Link } from 'react-router-dom';
import './UserItems.css';

import Avatar from '../../shared/components/UIelements/Avatar';
import Cards from '../../shared/components/UIelements/Cards';
const UserItems = props  =>{
    return (
        <li className="user-item">
            <Cards className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    
                        <div className="user-item__image">
                            <Avatar image={props.image} alt={props.name} />
                        </div>
                        <div className="user-item__info">
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount}{props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                   
                </Link>
            </Cards>
        </li>
    )
};

export default UserItems
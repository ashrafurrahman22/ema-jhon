import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h2>this is Inventory compo</h2>
            <Link to='/about'>
                <button>go to about</button>
            </Link>
        </div>
    );
};

export default Inventory;
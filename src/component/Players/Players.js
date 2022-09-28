import React from 'react';
import './Players.css';
import SinglerPlayer from '../SinglePlayer/SinglerPlayer';


const Players = ({players ,cart,setCart}) => {
    
    return (
        <div>
            <div className="cart-container">
            {
                players.map(pd=><SinglerPlayer
                player={pd}
                key={pd?.idPlayer}
                cart={cart}
                setCart={setCart}
                ></SinglerPlayer>)
            }
            
            </div>
        </div>
    );
};

export default Players;
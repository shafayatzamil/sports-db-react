import React from 'react';
import './SinglePlayer.css';

const SinglerPlayer = ({player,cart,setCart}) => {
    // console.log(player);
    const {strDescriptionEN,strCutout,idPlayer,strNationality,strPlayer
    }=player;
    const handleAddToCart=()=>{
        const info={
            strDescriptionEN,
            strCutout,
            idPlayer,
            strPlayer,
            strNationality,
            price:115,
           
        }

        if(cart){
            const newPlayer=[...cart,info];
            setCart(newPlayer);
            // console.log(newPlayer);
        }


        // setCart(newPlayer);
    }

    const handleBookmark=()=>{
        const info={
            strDescriptionEN,
            strCutout,
            idPlayer,
            strPlayer,
            strNationality,
            quantity:1,
            bookmark:'true'
        }

        const previousBookmark= localStorage.getItem("bookmark");
        const oldBookmark=JSON.parse(previousBookmark);
        if(oldBookmark){
            const isExist=oldBookmark.find((p)=>p.idPlayer===idPlayer);
            if(isExist){
                // const updateQuantity= parseFloat(isExist.quantity);
                // const newUpdateQuantity=updateQuantity+1;
                // isExist.quantity=newUpdateQuantity;
                isExist.quantity=isExist.quantity +1;
                localStorage.setItem("bookmark",JSON.stringify(oldBookmark))
            }else{
                localStorage.setItem("bookmark",JSON.stringify([...oldBookmark,info]))
            }


            localStorage.setItem("bookmark",JSON.stringify([...oldBookmark,info]))
            // console.log('ache');

        }else{

            localStorage.setItem("bookmark",JSON.stringify([info]))

            
        }
    }
    return (
        <div className='card'>
            <img src={strCutout} className="player-img" alt="" />
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN?strDescriptionEN?.slice(0,50):'lorem20'}</p>
            <button className="card-btn">details</button>
            <button onClick={handleAddToCart} className="card-btn">Add to cart</button>
            <button  onClick={handleBookmark} className="card-btn">Bookmarks</button>
        </div>
    );
};

export default SinglerPlayer;
import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {

    const [search,setSearch]=useState("");
    const[players,setPlayers]=useState([]);
    const [cart,setCart]=useState([]);
    

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data?.player))
    },[search]);

    const handleDelet=(id)=>{
        const leftPlayers=cart.filter((pd) => pd.idPlayer!==id);
        setCart(leftPlayers);
        console.log(leftPlayers);
    }

    // console.log(players);

    return (
        <div>
            <div className="home-container">
                <div className="left-container">
                   <h2>all players</h2>
                   <input  onChange={(e)=>setSearch(e.target.value)} type="text"  className='search-input' placeholder='player name'/>
                   <button className='search-btn'>Search</button>
                   <div className="player-container">
                    <Players players={players} cart={cart} setCart={setCart}></Players>
                   </div>


                    </div>
                <div className="right-container">
                    <div className="cart">
                        <p>this is player cart</p>
                        {
                            cart.map((p) =>(
                                <div className="cart-info-container">
                                    <li>{p.strPlayer}</li>
                                    <button onClick={()=>handleDelet(p.idPlayer)} className='delet-btn'>X</button>
                                </div>
                            )
                            
                            )
                        }
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;
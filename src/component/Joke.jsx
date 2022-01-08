import axios from 'axios';
import React, { useState, Component, useEffect } from 'react';


const Joke = () => {
    const [joker, setJoker] = useState(initialJoke);
    useEffect(() => {
        axios.get('https://icanhazdadjoke.com/api',{headers:{Accept:'application/json'}})
    })
    return (
        
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    The Jokes
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">{joker}</p>
                    <a href="#" className="btn btn-primary">Get a new Jokee</a>
                </div>
                </div>
        </div>
    );
}

export default Joke;
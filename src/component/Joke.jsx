import axios from 'axios';
import React, { useState, Component, useEffect } from 'react';


const Joke = () => {
    const [joker, setJoker] = useState("joke");

    useEffect(() => {axiosRequest()}, [])
    const fetchJoke = () => { axiosRequest() }
    
      const axiosRequest = () => {
         axios
            .get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(res => setJoker(res.data))
            .catch(err => console.log(err))
    }
    return (
        
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    The Jokes
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">{joker.joke}</p>
                    <a href="#" className="btn btn-primary" onClick={fetchJoke} >Get a new Jokee</a>
                </div>
                </div>
        </div>
    );
}

export default Joke;
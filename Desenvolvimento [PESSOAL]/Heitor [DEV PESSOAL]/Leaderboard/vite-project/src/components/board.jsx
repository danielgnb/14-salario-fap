import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

    const [period, setPeriod] = useState('0');

    const handleClick = (e) => {
        setPeriod(e.target.dataset.id)
    }

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Dias</button>
                <button onClick={handleClick} data-id='30'>30 Dias</button>
                <button onClick={handleClick} data-id='0'>Geral</button>
            </div>

            <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

        </div>
    )
}

function between(data, between){
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Define today para o início do dia
    const previous = new Date();
    previous.setDate(today.getDate() - between);

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        userDate.setHours(0, 0, 0, 0); // Define userDate para o início do dia
        if (between == '0') return val;
        return userDate >= previous && userDate <= today;
    })

    // sort with descending order
    return filter.sort((a, b) => b.score - a.score);
}

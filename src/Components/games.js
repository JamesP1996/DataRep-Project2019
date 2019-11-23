import React from 'react';
import GameItem from './gameitem';

class Games extends React.Component {

    //Make A Game Map of Game Items

    render() {
        return this.props.myGames.map((game) => {
            return <GameItem key={game._id}
                game={game}></GameItem>

        });
    }
}
export default Games;
import React from 'react';
import GameItem from './gameitem';

class Games extends React.Component {

    render() {
        return this.props.myGames.map((game) => {
            return <GameItem key={game._id}
                game={game}></GameItem>

        });
    }
}
export default Games;
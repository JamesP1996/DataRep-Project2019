import React from "react";
import Games from './games'
import axios from 'axios';

export class Read extends React.Component {

    state = {
        games: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/games')
            .then((response) => {
                this.setState({ games: response.data.games })
            })
            .catch((error) => {
                console.log(error);
            });
    }



    render() {
        return (
            <div id="read">
                <h1>Read Component</h1>
                <Games myGames={this.state.games}></Games>
            </div>

        );
    }
}

export default Read;
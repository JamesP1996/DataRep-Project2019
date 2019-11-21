import React from "react";
import Games from './games'
import axios from 'axios';
import '../App.css';


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
                <h1><b>Game Reviews!!</b></h1>
                <div id="readData">
                    <Games myGames={this.state.games}></Games>
                </div>

            </div >

        );
    }
}

export default Read;
import React from "react";
import Games from './games'
import axios from 'axios';
import '../App.css';



export class ReadGame extends React.Component {
    //Make a Empty State Array of Games
    state = {
        games: []
    };
    //Grab Game Data from Server Once Component of Read has Mounted
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

                <div id="readData" >
                    <h1 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Game Reviews</h1>
                    <ul id="ListParent">
                        {/* Display the Individual Game Objects, 
                        Will Keep Adding New Games Until Database has been fully read of all it's Games*/}
                        <Games myGames={this.state.games}></Games>

                    </ul>

                </div >
            </div>

        );
    }
}

export default ReadGame;
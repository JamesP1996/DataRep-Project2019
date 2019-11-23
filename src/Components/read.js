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

                <div id="readData" >
                    <h1 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Game Reviews</h1>
                    <ul id="ListParent">

                        <Games myGames={this.state.games}></Games>

                    </ul>

                </div >
            </div>

        );
    }
}

export default Read;
import React, { Component } from "react";
import '../App.css'
import { TwitchStream } from 'react-twitch-stream';



const bg = {
    background: 'maroon',
    color: 'white'
};

export class Home extends Component {

    constructor() {
        super();
        this.state = { Stream: '' }
    }
    handleChange = (e) => {
        this.setState({ Stream: e.target.value });

    }


    render() {
        return (
            <div id="home" >
                <h1 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Geek Reviews!</h1>
                <h5 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Welcome to Geek Reviews, Your Latest Game Reviews!</h5>
                <div id="twitch">
                    <TwitchStream channelName={this.state.Stream} allowFullScreen autoPlay muted />
                </div>
                <h1>Twitch Stream Playing Above,{<br />} If It Does Not Display the Stream is Down </h1>
                <div>
                    <label>Enter Twitch Channel Name :</label>

                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                        maxLength="32"
                    ></input>
                    <p><i>eg. Lirik,Twitch,Twitch Rivals,Pokimane</i></p>
                </div>

            </div >

        );
    }

}
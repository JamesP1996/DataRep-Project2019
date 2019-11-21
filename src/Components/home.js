import React, { Component } from "react";


const bg = {
    background: 'maroon',
    color: 'white'
};

export class Home extends Component {


    render() {
        return (
            <div id="parent" >
                <h1>Geek Reviews!</h1>
                <h5>Welcome to Geek Reviews, Your Latest Game Reviews!</h5>
                <div style={bg}>


                </div>
            </div>

        );
    }

}
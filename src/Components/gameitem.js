import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import starpic from '../Assets/Star.png';
import '../App.css';

class GameItem extends React.Component {



    constructor() {
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }


    DeleteGame(e) {
        alert("Deleting Game ID: " + this.props.game._id + " " + this.props.game.title);
        axios.delete("http://localhost:4000/api/games/" + this.props.game._id)
            .then(window.location.reload(false))
            .catch(console.log("Game Item Could not Be Deleted"));

    }

    render() {
        return (
            <li>
                <div className="col-sm-12 col-lg-6">
                    <Card className="Card h-100" border="secondary" style={{ width: '25rem' }}>
                        <Card.Header id="CardHead">{this.props.game.title}</Card.Header>
                        <Card.Body className="Card h-100">
                            <blockquote className="blockquote mb-0">
                                <img id="covers" src={this.props.game.cover} alt="Game Cover"></img>
                                <footer className="border border-dark rounded">
                                    <p>{this.props.game.review}</p>
                                    <b>Release Year:</b> {this.props.game.year}
                                    <br></br>
                                    <b>Rating out of 5:</b>
                                    <br></br>
                                    <span id="span">{this.props.game.rating} <img id="rate" alt="star rating" src={starpic}></img></span>
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>
                        <Link to={"/edit/" + this.props.game._id} className="btn btn-warning">Edit</Link>
                    </Card>
                </div >
            </li>
        )
    }
}
export default GameItem;
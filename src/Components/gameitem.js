import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import starpic from '../Assets/Star.png';
import '../App.css';

class GameItem extends React.Component {


    //Setting Up Constructor Along With Delete Ability
    constructor() {
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }

    //Delete Game From Server Based off the Games Object ID
    DeleteGame(e) {
        alert("Deleting Game ID: " + this.props.game._id + " " + this.props.game.title);
        axios.delete("http://localhost:4000/api/games/" + this.props.game._id)
            .then(window.location.reload(false))
            .catch(console.log("Game Item Could not Be Deleted"));

    }

    render() {
        return (
            /* Create Card Object in a List Format so it can be put onto Read UL HTML 
            Propogate the JSX HTML Card Fields With Data From The Server and Then Have a Delete Button and Edit Button on The Bottom */
            < li >
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
            </li >
        )
    }
}
export default GameItem;
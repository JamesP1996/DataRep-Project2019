import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class GameItem extends React.Component {

    constructor() {
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }

    DeleteGame(e) {
        console.log("Deleting" + this.props.game._id);
        axios.delete("http://localhost:4000/api/games/" + this.props.game._id)
            .then()
            .catch(console.log("Game Item Could not Be Deleted"));

    }

    render() {
        return (
            <div>
                <Card border="secondary" style={{ width: '25rem' }}>
                    <Card.Header>{this.props.game.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.game.cover}></img>
                            <p>{this.props.game.review}</p>
                            <footer>
                                Release Year : {this.props.game.year}
                                Rating out of 5: {this.props.game.rating}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>
                    <Link to={"/edit/" + this.props.game._id} className="btn btn-warning">Edit</Link>
                </Card>
            </div>
        )
    }
}
export default GameItem;
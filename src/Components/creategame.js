import React from 'react';
import axios from 'axios';
import '../App.css'




export class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        //Create Game State Object
        this.state = {
            Title: '',
            Year: '',
            Cover: '',
            Review: '',
            Rating: ''
        };
        //Bind this Game Object to Handle's of the Various Fields on Change/Submit
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGameTitleChange = this.handleGameTitleChange.bind(this);
        this.handleGameYearChange = this.handleGameYearChange.bind(this);
        this.handleGameCoverChange = this.handleGameCoverChange.bind(this);
        this.handleGameReviewChange = this.handleGameReviewChange.bind(this);
        this.handleGameRatingChange = this.handleGameRatingChange.bind(this);
    }

    handleGameTitleChange(e) {
        this.setState({ Title: e.target.value });
    }

    handleGameYearChange(e) {
        this.setState({ Year: e.target.value });
    }

    handleGameCoverChange(e) {
        this.setState({ Cover: e.target.value });
    }

    handleGameReviewChange(e) {
        this.setState({ Review: e.target.value });
    }

    handleGameRatingChange(e) {
        this.setState({ Rating: e.target.value });

    }
    //Once Submitted Alert User of Fields Inputted
    handleSubmit(e) {
        alert(this.state.Title + "  " + this.state.Year + "  " + this.state.Cover + "  " + this.state.Review + "  " + this.state.Rating);
        e.preventDefault();

        //Create New Game Object
        const newGame = {
            title: this.state.Title,
            year: this.state.Year,
            cover: this.state.Cover,
            review: this.state.Review,
            rating: this.state.Rating
        };
        //Post to Server
        axios.post('http://localhost:4000/api/games', newGame)
            .then()
            .catch(console.log("Game Review Could Not Be Uploaded"));

        //Set State Object of Game
        this.setState({
            title: '',
            year: '',
            cover: '',
            review: '',
            rating: ''
        });

    }
    render() {
        return (
            <div id="create" >
                <h1 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Create a Game Review</h1>
                <form onSubmit={this.handleSubmit} id="form">

                    {/* Game Title */}
                    <div className='form-group'>
                        <label>Game Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.handleGameTitleChange}
                            maxLength="32"
                        ></input>
                    </div>

                    {/* Game Year */}
                    <div className='form-group'>
                        <label>Game Year</label>
                        <input
                            type='number'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.handleGameYearChange}
                            max="2020"
                            min="1958"
                        ></input>
                    </div>

                    {/* Game Cover */}
                    <div className='form-group'>
                        <label>Game Cover <i>url</i></label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.handleGameCoverChange}
                        ></textarea>
                        {/* Added Image to Display What URL image will show as user enters it. Helps User Understand What they are inputting as the Image */}
                        <img src={this.state.Cover} onChange={this.handleGameCoverChange} style={{ height: 150, width: 150, padding: 10 }}></img>
                    </div>

                    {/* Game Review */}
                    <div className='form-group'>
                        <label>Game Review</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Review}
                            onChange={this.handleGameReviewChange}
                            maxLength="250"
                        ></textarea>
                    </div>

                    {/* Game Rating Select */}
                    <div className='form-group'>
                        <label>Game Rating
                        <select id="rating" name="rating" value={this.state.value} onChange={this.handleGameRatingChange}>
                                <option value='1' className='form-control'>1</option>
                                <option value='2' className='form-control'>2</option>
                                <option value='3' className='form-control'>3</option>
                                <option value='4' className='form-control'>4</option>
                                <option value='5' className='form-control'>5</option>
                            </select>
                        </label>
                    </div>

                    {/* Game Submit */}
                    <div>
                        <input
                            type="submit"
                            value="Add Game"
                        ></input>
                    </div>

                </form>
            </div >
        );
    }
}

export default CreateGame;
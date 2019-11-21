import React from 'react';
import axios from 'axios';
import Glyphicon from 'react-bootstrap';


export class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Year: '',
            Cover: '',
            Review: '',
            Rating: ''
        };

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

    handleSubmit(e) {
        alert(this.state.Title + "  " + this.state.Year + "  " + this.state.Cover + "  " + this.state.Review + "  " + this.state.Rating);
        e.preventDefault();


        const newGame = {
            title: this.state.Title,
            year: this.state.Year,
            cover: this.state.Cover,
            review: this.state.Review,
            rating: this.state.rating
        };
        axios.post('http://localhost:4000/api/games', newGame)
            .then()
            .catch(console.log("Game Review Could Not Be Uploaded"));


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
            <div>
                <h1>Create Component</h1>
                <form onSubmit={this.handleSubmit}>

                    {/* Game Title */}
                    <div className='form-group'>
                        <label>Game Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.handleGameTitleChange}
                        ></input>
                    </div>

                    {/* Game Year */}
                    <div className='form-group'>
                        <label>Game Year</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.handleGameYearChange}
                        ></input>
                    </div>

                    {/* Game Cover */}
                    <div className='form-group'>
                        <label>Game Cover</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.handleGameCoverChange}
                        ></textarea>
                    </div>

                    {/* Game Review */}
                    <div className='form-group'>
                        <label>Game Review</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Review}
                            onChange={this.handleGameReviewChange}
                        ></textarea>
                    </div>

                    {/* Game Rating Select */}
                    <div className='form-group'>
                        <label>Game Rating</label>
                        <select>
                            <option value='1' onChange={this.handleGameRatingChange} className='form-control'>1</option>
                            <option value='2' onChange={this.handleGameRatingChange} className='form-control'>2</option>
                            <option value='3' onChange={this.handleGameRatingChange} className='form-control'>3</option>
                            <option value='4' onChange={this.handleGameRatingChange} className='form-control'>4</option>
                            <option value='5' onChange={this.handleGameRatingChange} className='form-control'>5</option>
                        </select>
                    </div>

                    {/* Game Submit */}
                    <div>
                        <input
                            type="submit"
                            value="Add Game"
                        ></input>
                    </div>

                </form>
            </div>
        );
    }
}

export default Create;
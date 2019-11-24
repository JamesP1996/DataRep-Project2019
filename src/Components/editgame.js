import React from 'react';
import axios from 'axios';
import '../App.css';


class EditGame extends React.Component {
    constructor(props) {
        super(props);
        //Make Empty Game Object Field State
        this.state = {
            Title: '',
            Year: '',
            Cover: '',
            Review: '',
            Rating: '',
            _id: ''
        };
        // Bind this state to Functions to Handle The Changes of Each Field
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGameTitleChange = this.handleGameTitleChange.bind(this);
        this.handleGameYearChange = this.handleGameYearChange.bind(this);
        this.handleGameCoverChange = this.handleGameCoverChange.bind(this);
        this.handleGameReviewChange = this.handleGameReviewChange.bind(this);
        this.handleGameRatingChange = this.handleGameRatingChange.bind(this);

    }
    // If Component Mounted Successfully grab Data from Server and Alert User of the Game Object ID they are editing
    componentDidMount() {
        alert("Editing Game ID: " + this.props.match.params.id);


        axios.get('http://localhost:4000/api/games/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Cover: response.data.cover,
                    Review: response.data.review,
                    Rating: response.data.rating
                })



            })
            .catch();

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
    //Submit the Changes That the Handle Functions Above Have Created
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

        axios.put('http://localhost:4000/api/games/' + this.state._id,
            newGame)
            .then()
            .catch();
        //Set State of Game Fields
        this.setState({
            Title: '',
            Year: '',
            Cover: '',
            Review: '',
            Rating: ''
        });

    }

    render() {
        return (
            <div id="edit">
                <h1 style={{ backgroundColor: 'rgba(128,0,0,0.8)' }}>Edit Game Review</h1>
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
                        {/* Added a IMG Tag to display if the Image URL has worked as you change it and To give user idea of picture they inputted */}
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
                            value="Submit Change"
                        ></input>
                    </div>

                </form>
            </div >

        )
    }
}

export default EditGame;
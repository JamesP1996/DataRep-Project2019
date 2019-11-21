import React from 'react';
import axios from 'axios';


class Edit extends React.Component {
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

    componentDidMount() {
        alert(this.props.match.params.id);

        axios.get('http://localhost:4000/api/games/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Titlle: response.data.title,
                    Year: response.data.year,
                    Cover: response.data.cover,
                    Review: response.data.review,
                    Rating: response.data.rating
                })
            })
            .catch(console.log("Could Not Gather Reponse"));
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

        axios.put('http://localhost:4000/api/movies' + this.state._id, newGame)
            .then()
            .catch();

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
                <h1>Edit Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Game Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.handleGameTitleChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Game Year</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.handleGameYearChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Game Cover</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.handleGameCoverChange}
                        ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Game Review</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Review}
                            onChange={this.handleGameReviewChange}
                        ></textarea>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="1"
                                checked={this.state.selectedOption === "1"}
                                onChange={this.handleGameRatingChange} />
                            1 Star
                    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="2"
                                checked={this.state.selectedOption === "2"}
                                onChange={this.handleGameRatingChange} />
                            2 Star
                    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="3"
                                checked={this.state.selectedOption === "3"}
                                onChange={this.handleGameRatingChange} />
                            3 Star
                    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="4"
                                checked={this.state.selectedOption === "4"}
                                onChange={this.handleGameRatingChange} />
                            4 Star
                    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="5"
                                checked={this.state.selectedOption === "5"}
                                onChange={this.handleGameRatingChange} />
                            5 Star
                    </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add Game"
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit;
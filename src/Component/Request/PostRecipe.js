import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            subtitle: '',
            list: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        axios.post('https://127.0.0.1:8000/api/recipes', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label>Titre</label>
                            <input
                                type='text'
                                name='title'
                                onChange={this.handleChange}
                                className='form-control' 
                                placeholder='Titre'
                                required="required"
                            />
                        </div>
                        <div className="col">
                            <label>Sous-titre</label>
                            <input
                                type='text'
                                name='subtitle'
                                onChange={this.handleChange}
                                className='form-control'
                                placeholder='Sous-titre'
                            />
                        </div>
                    </div>
                    <div className="col">
                        <label className='mt-2'>Liste</label>
                        <textarea
                            name='list'
                            onChange={this.handleChange}
                            className='form-control'
                            required="required"
                        >
                        </textarea>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <button type='submit' className="btn btn-success" href="/" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm

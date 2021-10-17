import React, { Component } from 'react';
import axios from 'axios';

class PutRecipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            title: this.props.title,
            subtitle: this.props.subtitle,
            list: this.props.list
        }
    }



    componentDidMount() {
        axios.get('https://127.0.0.1:8000/api/recipes/' + this.props.id_Recipe_Put)
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        axios.put('https://127.0.0.1:8000/api/recipes/' + this.props.id_Recipe, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    render() {
        const { data } = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <h3>Modification</h3>
                            <div className="row">
                                <div className="col">
                                    <label>Titre</label>
                                    <input type="text"
                                    name="title" 
                                    className='form-control' 
                                    defaultValue={data.title}
                                    onChange={this.handleChange}
                                    required="required" />
                                </div>
                                <div className="col">
                                    <label>Sous-titre</label>
                                    <input type="text" name="subtitle" 
                                        className='form-control' 
                                        defaultValue={data.subtitle} 
                                        onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col">
                                <label className='mt-2'>Liste</label>
                                <textarea className='form-control mt-2'
                                    name="list" 
                                    defaultValue={data.list} 
                                    onChange={this.handleChange}
                                    required="required" />
                            </div>
                        </div>
                    </div>
                    <div className ="row justify-content-center mt-2">
                        <button type='submit' className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PutRecipe

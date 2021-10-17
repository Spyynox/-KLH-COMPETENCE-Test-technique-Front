import React, { Component } from 'react';
import axios from 'axios';

class DeleteRecipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deletes: [],
        }
    }

    deleteRecipe(e) {
        axios.delete('https://127.0.0.1:8000/api/recipes/' + this.props.id_Delete, this.state)
            .then(response => {
                console.log(response)
                console.log(response.data)

                const deletes = this.state.deletes.filter(item => item.id !== this.props.id_Delete);
                this.setState({ deletes });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <button type="button" className="btn btn-danger ml-2" onClick={(e) => this.deleteRecipe(this.props.id_Delete, e)}>Supprimer</button>
        )
    }
}

export default DeleteRecipe

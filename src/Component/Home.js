import React, { Component } from 'react';
import axios from 'axios';
import './../index.css'
import Popup from './Popup';
import PostRecipe from './Request/PostRecipe';
import PutRecipe from './Request/PutRecipe';
import DeleteRecipe from './Request/DeleteRecipe';


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            openPost: false,
            openPut: false
        }
    }

    axiosFunc = () => {
        axios.get('https://127.0.0.1:8000/api/recipes')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }

    componentDidMount() {
        this.axiosFunc();
        this.interval = setInterval(this.axiosFunc, 100);
    }


    render() {
        const { data } = this.state
        return (
            <div className="App">
                <h1 className="bg-info text-white text-center">Mes recettes</h1>
                <div className="text-center mb-2">
                    <button onClick={() => this.setState({ openPost: true })} type="button" className="btn btn-primary text-center">
                        Ajouter
                    </button>
                </div>

                <Popup trigger={this.state.openPost} setTrigger={!this.state.openPost}>
                    <button onClick={() => this.setState({ openPost: false })} className="close-btn btn-danger">X</button>
                    <PostRecipe/>
                </Popup>
                
                {
                    data.map(recipe => 
                    <div key={recipe.id}>
                            <div className="card ml-auto mr-auto mb-3">
                                <div className="card-body" key={recipe.id}>
                                    <h2 className="card-title">{recipe.title}</h2>
                                    <h6 className="card-subtitle mb-2 text-muted">{recipe.subtitle}</h6>
                                    <p className="card-text">{recipe.list}</p>
                                    <button onClick={() => this.setState({ openPut: recipe.id })} type="button" className="btn btn-warning" id={"recipe-" + recipe.id} href="#">
                                        Modifier
                                    </button>
                                    <DeleteRecipe id_Delete={recipe.id} />
                                </div>
                            </div>



                            <Popup id={"popup_put-" + recipe.id} value={recipe.id} trigger={this.state.openPut === recipe.id} setTrigger={!this.state.openPut} id_recipe={recipe.id}>
                                <button onClick={() => this.setState({ openPut: false })} className="close-btn btn-danger">X</button>
                                <PutRecipe id_Recipe={recipe.id} id_Recipe_Put={recipe.id}></PutRecipe>
                            </Popup>
                    </div>)
                }
            </div>
        )
    }
}

export default Home

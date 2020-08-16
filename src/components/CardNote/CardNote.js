import React , {Component} from 'react';
import './card-note.css';

export default class CardNote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="card-note"> 
                <header >
                    <h3 className="card-note_titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-note_texto">{this.props.texto}</p>
            </section>
        );   
    }          
}
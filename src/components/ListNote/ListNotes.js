import React, {Component} from "react";
import CardNote from '../CardNote/CardNote';
import './list-note.css';

// export torna o componente utilizável/importavel por outras classes 

export default class ListNotes extends Component {

    render () {
        return (<ul className="lista-note">
        {this.props.notes.map((note, index) => {
            return (
                <li key={index} className="lista-note_item">
                    <div>{index}</div>
                    <CardNote titulo={note.titulo} texto={note.texto}></CardNote>
                </li>                
            )
        })}
      </ul>);

    }


}
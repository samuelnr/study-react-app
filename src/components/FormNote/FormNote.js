import React , {Component} from 'react';
import './form-note.css';

export default class FormNote extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleChangeTexto(evento) {
        this.texto = evento.target.value; 
    }

    _handleChangeTitle(evento){ 
        this.titulo = evento.target.value;
    }

    _createNote(evento){
        this.props.createNoteFromForm(this.titulo , this.texto);
        evento.preventDefault();
    }

    render () {
       return (
            <form className="form-note" onSubmit={this._createNote.bind(this)}>
                <input type="text" className="form-note_input" placeholder="titulo" onChange={this._handleChangeTitle.bind(this)} />
                <textarea rows={20} placeholder="noticia" className="form-note_input" onChange={this._handleChangeTexto.bind(this)}></textarea>
                 <button form-note_input form-note_submit>Criar Nota</button>
            </form>
        );
    }

}
import React, {Component} from 'react';
import ListNotes from './components/ListNote/ListNotes'
import FormNote from './components/FormNote/FormNote'
import "./assets/app.css";
import './assets/index.css';


// Os componentes so pdem devolver um único elemento pai nesse caso foi section
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      notes:[]
    };

  }

  createNoteFromForm(titulo, texto) {

    const newNote = {titulo, texto};
    const newArrayNotas = [...this.state.notes, newNote]

    this.setState({
      notes: newArrayNotas
    });

  }
  
  render () {

    return (

      <section className="conteudo">
        <FormNote createNoteFromForm={this.createNoteFromForm.bind(this)} />
        
        <ListNotes notes={this.state.notes} />
      </section>
  
    );
      // <ListNotes notes={this.notes} />
      // new ListNotes(notes:this.notes)

  } 
}
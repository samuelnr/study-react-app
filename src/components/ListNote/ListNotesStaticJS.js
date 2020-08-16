import React, {Component} from "react";
import CardNote from './CardNote/CardNote';

// export torna o componente utilizável/importavel por outras classes 

export default class ListNotesStaticJS extends Component {

    render () {
        return (<ul>
        {Array.of("Item 1", "item 2", "item 3").map((item) => {
            return (
                <li>
                    <div>{item}</div>
                    <CardNote></CardNote>
                </li>                
            )
        })}

      </ul>);

    }


}
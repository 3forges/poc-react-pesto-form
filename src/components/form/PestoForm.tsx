import { Component } from "preact"
import PestoMuiTree from './PestoMuiTree'
import PestoTwTree from "./PestoTwTree";
import PestoOmyTree from './PestoOmyTree'
import PestoOmyTreeFull from "./PestoOmyTreeFull";
import PestoJsToYaml from './../convert/PestoJsToYaml'
/**
 * Ok so this [initJsonTree], must be
 * constructed from the [JSON Schema]
 * fetched from the Pesto Rest API
 * 
 * Ok so this [initJsonTree], must be constructed from the [JSON Schema] fetched from the Pesto Rest API
 * 
 */
const initJsonTree = {
  name: "string",
  Diplomes: [
      {
          designation: "maitrise",
          description: "Ceci est un diplôme de Maîtrise",
          eecole: "Université Paris 6 Pierre & Marie Curie"
      },
      {
          designation: "maitrise",
          description: "Ceci est un diplôme de Maîtrise",
          eecole: "Université Paris 6 Pierre & Marie Curie"
      },
      {
          designation: "maitrise",
          description: "Ceci est un diplôme de Maîtrise",
          eecole: "Université Paris 6 Pierre & Marie Curie"
      },
      {
          designation: "maitrise",
          description: "Ceci est un diplôme de Maîtrise",
          eecole: "Université Paris 6 Pierre & Marie Curie"
      },
      {
          designation: "maitrise",
          description: "Ceci est un diplôme de Maîtrise",
          eecole: "Université Paris 6 Pierre & Marie Curie"
      },
  ]
}

export default class PestoForm extends Component {
    state = { value: '' };
  
    onSubmit = (e: { preventDefault: () => void; }) => {
      alert("Submitted a todo");
      e.preventDefault();
    }
  
    onInput = (e: any) => {
      const { value } = e.target;
      this.setState({ value })
    }
  
    render(_: any, { value }: any) {
      return (
        <form onSubmit={this.onSubmit}>
          <div>
            <PestoMuiTree />
          </div>
          <div>
            {// <PestoOmyTreeFull />
            }
          </div>
          <div className={`content-normal text-left`}>
          <PestoOmyTree name="Good for [PestoContent] + This one JSON editor does not allow adding new node" jsonTree={{...initJsonTree}} />
          </div>
          <div class="">
          <PestoTwTree name={`Best Editable JSON - Good for [PestoContentType] + `} jsonTree={{...initJsonTree}} />


          </div>

          <div>
          <PestoJsToYaml />

          </div>

          <input type="text" value={value} onInput={this.onInput} />
          <p>You typed this value: {value}</p>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
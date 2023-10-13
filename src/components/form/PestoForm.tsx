import { Component } from "preact"
import PestoMuiTree from './PestoMuiTree'
import PestoTwTree from "./PestoTwTree";
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
          <div class="">
          <PestoTwTree name={`bernard`} jsonTree={{
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
    }} />
          </div>
          <input type="text" value={value} onInput={this.onInput} />
          <p>You typed this value: {value}</p>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
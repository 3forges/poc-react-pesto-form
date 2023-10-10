import { Component } from "preact"
import PestoMuiTree from './PestoMuiTree'
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
          <input type="text" value={value} onInput={this.onInput} />
          <p>You typed this value: {value}</p>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
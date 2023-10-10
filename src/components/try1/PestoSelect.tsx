import { Component } from "preact"

class MySelect extends Component {
    state = { value: '' };
  
    onChange = (e: any) => {
      this.setState({ value: e.target.value });
    }
  
    onSubmit = (e: any) => {
      alert("Submitted " + this.state.value);
      e.preventDefault();
    }
  
    render(_: any, { value }: any) {
      return (
        <form onSubmit={this.onSubmit}>
          <select value={value} onChange={this.onChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      submit: 0,
    }
  }
  changeInput(event) {
    event.preventDefault(
    this.setState({value: event.target.value})
    )
  }

  calculate(){
    //I must calculate the mortgage monthly payment. I must know rate, balance and term.
    var rate = (this.state.rate)/12*100;
    console.log(rate);
  }


  render() {
    return (
      <div className='container'>
        <div name='input' id='input'>
          <input name='balance' type='number' value={this.state.balance} onChange={this.changeInput}/>
          <input name='rate' type="number" step='0.01' value={this.state.rate} onChange={this.changeInput}/>
          <select name="term" value={this.state.term} onChange={this.changeInput}>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
            <button name='submit' value={this.state.sumbit}>submit</button>

        </div>
        <div name='output' id ='output'>
        </div>
      </div>
    );
  }
}

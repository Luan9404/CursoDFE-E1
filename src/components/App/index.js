import React from "react";
import styles from './styles.module.scss'

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      firstNumber: null,
      secondNumber: null,
      sumNumbers: null,
      title: null,
    }

    this.handleFirstNumber = this.handleFirstNumber.bind(this);
    this.handleSecondNumber = this.handleSecondNumber.bind(this);
    this.handleSum = this.handleSum.bind(this);
  }

  componentDidMount(){
    this.setState({title: process.env.REACT_APP_TITLE})
  }
  
  handleFirstNumber(event){
    this.setState({firstNumber: event.target.value});
  }

  handleSecondNumber(event){
    this.setState({secondNumber: event.target.value});
  }

  handleSum(){
    let sum = Number(this.state.firstNumber) + Number(this.state.secondNumber);
    
    this.setState({sumNumbers: sum});
  }
  render(){
    const {title, sumNumbers} = this.state;
    return(
      <>
        <main className={styles.main}>
          <h1>{title}</h1>
          <div className={styles.inputContainer}>
            <input 
              type="number" 
              name="firstNumber" 
              id="firstNumber"
              onChange={this.handleFirstNumber} 
            />
            <input 
              type="number" 
              name="secondNumber" 
              id="secondNumber"
              onChange={this.handleSecondNumber} 
            />
          </div>

          <button 
            type="button" 
            name="sumButton" 
            id="sumButton"
            className={styles.sumButton}
            onClick={this.handleSum}
          >
          +
          </button>
          <div className={styles.sumResult}>{sumNumbers}</div>
        </main>
      </>
    )
  }
}
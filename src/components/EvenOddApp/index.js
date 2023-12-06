// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  evenOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <h1>Count {count}</h1>
        <p>{this.evenOdd()}</p>
        <button onClick={this.onIncrease}>Increment</button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

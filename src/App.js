import React from 'react'
import Counter from './components/Counter.js'
export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Counter store={this.props.store}/>
      </div>
    )
  }
}

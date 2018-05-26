import React, { Component } from 'react';
import fetchData from './Common'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.tmid = 0
  }

  componentDidMount() {
    this.loadData(this)
    this.tmid = this.hookReloadData()
  }
  
  componentWillUnmount() {
    clearInterval(this.tmid)
  }

  hookReloadData() {
    if (!this.tmid) setInterval(() => this.loadData(this), 5000)
  }
  
  async loadData (self) {
    const data = await fetchData('http://localhost:9487/dist/data/data.json')
    self.setState({
      data
    })
  }

  render() {
    if (this.state.data) {
      console.log(this.state.data)
      return (
        <div>{this.state.data.en}</div>
      )
   } else {
      return (
        <div>Loading ....</div>
      )
   }
  }
}

export default App;
  

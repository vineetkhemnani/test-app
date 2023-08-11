import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // Create state
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: 'Dummy name',
        login: 'Dummy login',
      },
    }
  }
  async componentDidMount() {
    // API calls
    const data = await fetch('https://api.github.com/users/vineetkhemnani')
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count!==prevState.count)
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo?.avatar_url} alt="" />
        <h3>Name: {this.state.userInfo?.name}</h3>
        <h3>Username: {this.state.userInfo?.login}</h3>
      </div>
    )
  }
}
export default Profile

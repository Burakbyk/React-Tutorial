import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => 
{
    switch(action.type)
    {
        case  "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user=> action.payload !== user.id)

            }
            default :
            return state
    }

}

// Provider ,Consumer

export  class UserProvider extends Component {
    state = {

        users: [
      
          {
              id :1,
              name : "Burak Büyük",
              salary : "14.000",
              departman : "Yazilim"
      
      
          },
          {
            id :2,
            name : "Gökçe Nur Büyük",
            salary : "14.000",
            departman : "Counting"
      
      
          },
          {
            id :3,
            name : "Bilge Nur Büyük",
            salary : "4.000",
            departman : "Counting-Yazilim"
          }
      
        ],
        dispatch : action =>
        {
            this.setState(state => reducer(state,action))
        }
      
     
      
      }
  render() {
    return (
     
<UserContext.Provider value={this.state}>

        {this.props.children}

</UserContext.Provider>

    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;



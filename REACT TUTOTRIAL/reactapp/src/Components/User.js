import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'

 class User extends Component {    
    state = 
    {
       isVisible : false

    } 

    static defaultProps = 
    {
        name      : "İsim Bilgisi Yok",
        salary    : "Maaş Bilgisi Yok",
        departman : "Departman Bilgisi Yok",
    

    }
   
    onClickEvent = (e) =>
    {
       
       this.setState({
        isVisible : !this.state.isVisible
       })

    }
    onDeleteUser = (dispatch,e) =>
    {
        const {id} = this.props;
        // Consumer Dispatch
        dispatch ({type : "DELETE_USER",payload:id});

    }
    // constructor(props)
    // {
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this); 
    //     this.state=
    //     {
    //       isVisible : false
    //     }
    // }
  render() {

    //Destructing

    const{name,departman,salary} = this.props;
    const{isVisible} = this.state;
    return (
    <UserConsumer>
        {value => {
            const {dispatch} = value;
            return (
                <div className='col-md-8  mb-4'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between' >
            
                        <h4 className='d-inline' onClick={this.onClickEvent} >{name}</h4>
                        <i onClick={this.onDeleteUser.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor:"pointer", color:"red"}}></i>
                     
                        </div>
                        {
                            isVisible ?              
                             <div className='card-body'>
                            <p className='card-text'>Maaş: {salary}</p>
                            <p className='card-text'>Departman: {departman}</p>             
                            </div> 
                                    : null
                        }
                            
            
            
                    </div>
                   
                </div>
                )
        }}
    </UserConsumer>)
   
  }

}
User.propTypes =
{
name:PropTypes.string.isRequired,
salary: PropTypes.string.isRequired,
departman : PropTypes.string.isRequired,
id : PropTypes.number.isRequired

}

// User.defaultProps = 
// {
//     name      : "İsim Bilgisi Yok",
//     salary    : "Maaş Bilgisi Yok",
//     departman : "Departman Bilgisi Yok",


// }



export default User;

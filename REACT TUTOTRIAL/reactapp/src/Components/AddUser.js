import React, { Component } from 'react'

 class AddUser extends Component {
  render() {
    return (
      <div className='col-md-8 mb-4'>
        
        <div className='card'>

        <div className='card-header'>
            <h4>Add User Form</h4>
        </div>
        <div className='card-body'>

            <form>

                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                    type='text'
                    name='name'
                    id='id'
                    placeholder='Enter Name'
                    class ="form-control"
                    
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='departman'>Departman</label>
                    <input 
                    type='text'
                    name='departman'
                    id='departman'
                    placeholder='Enter Departman'
                    class ="form-control"
                    
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='salary'>Salary</label>
                    <input 
                    type='text'
                    name='salary'
                    id='salary'
                    placeholder='Enter  Salary'
                    class ="form-control"
                    
                    />

                </div>

                <button className="btn btn-danger btn-block"type="submit">Add User</button>
            </form>

        </div>
        </div>


      </div>
    )
  }
}



export default AddUser;
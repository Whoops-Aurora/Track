import React from 'react';


const  CreateUsers = ()=>{
    return (
        <>
        <div className='container-fluid' style={{ width: '80%', alignItems: 'center' }}>
            <form>
                <div className='form-group'>
                    <label>Username:</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Duration:</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Date:</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Create Exercise Log' className='btn btn-primary' />
                </div>
            </form>
        </div>
    </>
    );
}


export default CreateUsers;

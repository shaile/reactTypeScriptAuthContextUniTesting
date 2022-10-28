import React from 'react'

const initialFormData = Object.freeze({
  email: '',
  password: '',
})

const AddUser = () => {
  const [formData, updateFormData] = React.useState(initialFormData)

  const handleChange = (e: any) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
    // ... submit to API or something
  }
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Add New User</h5>

          <form className='row g-3'>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='text'
                  name='firstName'
                  className='form-control'
                  id='firstName'
                  placeholder='First Name'
                  onChange={handleChange}
                />
                <label htmlFor='firstName'>First Name</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='text'
                  name='lastName'
                  className='form-control'
                  id='lastName'
                  placeholder='Last Name'
                  onChange={handleChange}
                />
                <label htmlFor='lastName'>Last Name</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='floatingEmail'
                  placeholder='Your Email'
                  onChange={handleChange}
                />
                <label htmlFor='floatingEmail'>Your Email</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='text'
                  name='phone'
                  className='form-control'
                  id='phone'
                  placeholder='Phone'
                  onChange={handleChange}
                />
                <label htmlFor='phone'>Phone</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='text'
                  name='photos'
                  className='form-control'
                  id='phone'
                  placeholder='Phone'
                  onChange={handleChange}
                />
                <label htmlFor='phone'>Photo</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='text'
                  name='dob'
                  className='form-control'
                  id='phone'
                  placeholder='dob'
                  onChange={handleChange}
                />
                <label htmlFor='phone'>Dob</label>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-floating'>
                <textarea
                  className='form-control'
                  placeholder='Address'
                  id='floatingTextarea'
                  name='address'
                  style={{ height: 100 }}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor='floatingTextarea'>Address</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-floating'>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                />
                <label htmlFor='floatingPassword'>Password</label>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-floating mb-3'>
                <select
                  className='form-select'
                  name='country'
                  id='floatingSelect'
                  aria-label='State'
                  onChange={handleChange}
                >
                  <option selected>New York</option>
                  <option value='1'>Oregon</option>
                  <option value='2'>DC</option>
                </select>
                <label htmlFor='floatingSelect'>Country</label>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-floating mb-3'>
                <select
                  className='form-select'
                  name='state'
                  id='floatingSelect'
                  aria-label='State'
                  onChange={handleChange}
                >
                  <option selected>New York</option>
                  <option value='1'>Oregon</option>
                  <option value='2'>DC</option>
                </select>
                <label htmlFor='floatingSelect'>State</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='col-md-12'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control'
                    name='city'
                    id='floatingCity'
                    placeholder='City'
                    onChange={handleChange}
                  />
                  <label htmlFor='floatingCity'>City</label>
                </div>
              </div>
            </div>

            <div className='col-md-2'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='floatingZip'
                  name='zip'
                  placeholder='Zip'
                  onChange={handleChange}
                />
                <label htmlFor='floatingZip'>Zip</label>
              </div>
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                Submit
              </button>
              <button type='reset' className='btn btn-secondary'>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser

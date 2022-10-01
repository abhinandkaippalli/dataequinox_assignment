import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './registration.css';


function Registration() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    // const [errors, setErrors] = useState(errorsObj);
   // let errorsObj = { firstname: '', lastname: '', email: ''};

    const dispatch = useDispatch()

    const register = () => {
        dispatch({
            type: 'REGISTER',
            payload: {
                id: (new Date).getTime(),
                firstname, lastname, email, selectedDate
            }
        })
        alert('Successfully Registered')
    }

   {/* function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorsObj = { ...errorsObj };

        if (firstname === '') {
            errorsObj.firstname = 'First Name is Required'
            error = true;
        }

        if (lastname === '') {
            errorsObj.lastname = 'Last Name is Required'
            error = true;
        }

        if (email === '') {
            errorsObj.email = 'Email is Required'
            error = true;
        }

        setErrors(errorsObj)

        if (!error) {
            console.log('form signup');
        }
    */
    }

    return (
        <form className='register'>
            <label className='label1'>First Name</label>
            <input type='text' placeholder='firstname' value={firstname} onChange={e => setFirstname(e.target.value)} required />
           {/* {errors.firstname && <div>{errors.firstname}</div>} */}

            <label className='label1'>Last Name</label>
            <input type='text' placeholder='lastname' value={lastname} onChange={e => setLastname(e.target.value)} required />
           {/* {errors.lastname && <div>{errors.lastname}</div>} */}

            <label className='label1'>Email</label>
            <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
           {/* {errors.email && <div>{errors.email}</div>} */}

            <label className='label1'>Date of Birth</label>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                dateFormat='dd/mm/yyyy' maxDate={moment().subtract(18, 'years')._d} placeholder='You age must be greater than 18!'
                isClearable
                showYearDropdown>
            </DatePicker>
            <input type='submit' value='register' onClick={register} />
        </form>
    )
}

export default Registration
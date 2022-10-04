import React, { useState } from 'react'

// import Valid from './Valid'

const SignUp = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",

    });
    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value,
        })
    }

    const [errors, setErrors] = useState({})
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        setErrors(Valid(values));

    }
    const Valid = (values) => {
        let errors = {};
        if (!values.fullname) {
            errors.fullname = "Name Is Required"
        }
        if (!values.email) {
            errors.email = "Email Is Required"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email Is InValid"
        }
        if (!values.password) {
            errors.password = "Password Is Required"
        } else if (values.password.length < 5) {
            errors.password = "Password  Must Be Five Character."
        }
        return errors;
    };


    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default SignUp

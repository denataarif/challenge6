import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import userSlice from "../store/user";
import imgcar from "./img/image-2.png"
import style from "./page.module.css"
import axios from "axios";

const Login = () => {
    const { register, handleSubmit, formState } = useForm()
    const {loginStatus, setloginStatus} = useState({
        success: false,
        message: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const formSubmitHandler = (data) => {
        const postData = {
            email: data.user_email,
            password: data.user_password,
            isAdmin: false
        }
        axios.post('http://localhost:4000/login', postData)
        .then( res => {
            if(typeof res.data.accsessToken !== 'undefined'){
                // menyimpan token di localstorage
                localStorage.setItem('challengeAccessToken', res.data.accessToken)
                // menyimpan user di redux store
                const user = jwtDecode(res.data.accessToken)
                axios.get(`http://localhost:4000/users/${user.sub}`)
                .then( res => {
                    dispatch( userSlice.actions.addUser({ userData: res.data }))
                    navigate('/')
                })
        }
        }).catch( err => {
            setloginStatus({
                success: false,
                message: 'Sorry, something is wrong. Try again later'
            })
        })
    }

    return(
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <img src={imgcar} className={style.imgFluid}/>
                    </div>
                    <div className={`col-md-3 ${style.contents} text-start`}>
                    <div className={`${style.box} mb-4`}></div>
                    <h3 className="mb-5">Welcome, Admin BCR</h3>
                        <form onSubmit={ handleSubmit(formSubmitHandler) }>
                            <div className="form-group first">
                                <label htmlFor="email" className="mb-3">Email</label>
                                <input type="email" className="form-control mb-3" id="username" name="email" {...register('user_email', {required: true})} autoComplete="true"/>
                                <p className="text-sm text-red-500 italic">{formState.errors.user_email?.type === 'required' && "Email is required"}</p>
                            </div>
                            <div className="form-group last mb-4">
                                <label htmlFor="user_password" className="mb-3">Password</label>
                                <input type="password" className="form-control mb-3" id="user_password" name="user_password" {...register('user_password',  {required: true})} autoComplete="true" />
                                <p className="text-sm text-red-500 italic">{formState.errors.user_password?.type === 'required' && "password is required"}</p>
                            </div>
                            <div>
                                <button type="submit" className={`${style.btn} btn-block btn-primary`} >Log In</button>
                            </div>
                            <p>Don't have an accout? <Link to="/register" className="text-blue-600">Register Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
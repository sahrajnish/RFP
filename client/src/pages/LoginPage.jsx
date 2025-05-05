import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        try {
            const res = await axios.post("/api/login", data);
            if(res.data.response === "error") {
                toast(res.data.error[0]);
            }
            if(res.data.response === "success") {
                toast("Login Successful");
                localStorage.setItem("user", JSON.stringify({...res.data}));
                navigate("/")
            }
        } catch (error) {
            if(error.response && error.response.data) {
                console.log(error.response.data)
                toast(`${error.response.data.error}`)
            }
        }
    }

    useEffect(() => {
        if(localStorage.getItem("user")) {
            navigate('/')
        }
    }, [navigate])

    return (
        <>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-soft-primary">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Welcome to RFP System!</h5>
                                            <p>Sign in to continue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div class="p-2">
                                    <form class="form-horizontal" onSubmit={handleSubmit}>
        
                                        <div class="form-group">
                                            <label for="username">Email</label>
                                            <input type="text" class="form-control" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        
                                        <div class="mt-3">
                                            <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                        </div>
            
                                        <div class="mt-4 text-center">
                                            <Link to="/registervendor" className="text-muted mdi mdi-lock mr-1">
                                                Register as Vendor
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <div>
                                <p>&copy; Copyright <i class="mdi mdi-heart text-danger"></i> RFP System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;
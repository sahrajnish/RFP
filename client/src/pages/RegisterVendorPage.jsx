import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const RegisterVendorPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [no_of_employees, setNo_of_employees] = useState();
    const [gst_no, setGst_no] = useState("");
    const [revenue, setRevenue] = useState("");
    const [pancard_no, setPancard_no] = useState("");
    const [mobile, setMobile] = useState("");
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: pass,
            confirmPassword: confirmPass,
            no_of_employees: no_of_employees,
            gst_no: gst_no,
            revenue: revenue.split(",").map(r => r.trim()).join(","),
            pancard_no: pancard_no,
            mobile: mobile,
            category: category.join(",")
        }

        try {
            const res = await axios.post('/api/registervendor', data);
            if(res.data.response === "error") {
                toast(res.data.error[0]);
            }

            if(res.data.response === "success") {
                toast("Registration successful");
                navigate("/login");
            }
        } catch (err) {
            console.log(err.response.data.error);
            if(err.response && err.response.data && Array.isArray(err.response.data.error)) {
                toast(err.response.data.error[0]);
            }
        }
    }

    useEffect(() => {
        if(localStorage.getItem("user")) {
            navigate('/')
        }
    }, [navigate])

    const handleCategoryChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        setCategory(selectedOptions);
    };

    return(
        <>
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-8">
                        <div className="card overflow-hidden">
                            <div className="bg-soft-primary">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Welcome to RFP System!</h5>
                                            <p>Register as Vendor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0"> 
                                <div className="p-4">
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="firstname">First name*</label>
                                                    <input type="text" className="form-control" id="firstname" placeholder="Enter Firstname" onChange={(e) => setFirstName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="lastname">Last Name<em>*</em></label>
                                                    <input type="text" className="form-control" id="lastname" placeholder="Enter Lastname" onChange={(e) => setLastName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="email">Email*</label>
                                                    <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="password">Password*</label>
                                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={(e) => setPass(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="password">Confirm Password*</label>
                                                    <input type="password" className="form-control" id="confirmpassword" placeholder="Enter Confirm Password" onChange={(e) => setConfirmPass(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-6 col-xl-6">   
                                                <div className="form-group">
                                                    <label for="revenue">Revenue (Last 3 Years in Lakhs)*</label>
                                                    <input type="text" className="form-control" id="revenue" placeholder="Enter Revenue" onChange={(e) => setRevenue(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="noofemployees">No of Employees*</label>
                                                    <input type="number" className="form-control" id="noofemployees" placeholder="No of Employees" onChange={(e) => setNo_of_employees(parseInt(e.target.value))}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="gstno">GST No*</label>
                                                    <input type="text" className="form-control" id="gstno" placeholder="Enter GST No" onChange={(e) => setGst_no(e.target.value.toUpperCase())}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="panno">PAN No*</label>
                                                    <input type="text" className="form-control" id="panno" placeholder="Enter PAN No" onChange={(e) => setPancard_no(e.target.value.toUpperCase())}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="phone">Phone No*</label>
                                                    <input type="text" className="form-control" id="phone" placeholder="Enter Phone No" onChange={(e) => setMobile(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6 col-xl-6">
                                                <div className="form-group">
                                                    <label for="Categories">Categories*</label>
                                                    <select className="form-control" multiple id="Categories" name="Categories" onChange={handleCategoryChange}>
														<option value="1">Software</option>
														<option value="2">Hardware</option>
														<option value="3">Office Furniture</option>
														<option value="4">Stationery</option>
													</select>
                                                </div>
                                            </div>

                                            <div className="p-2 mt-3">
                                                <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <div>
                                <p>&copy; Copyright <i className="mdi mdi-heart text-danger"></i> RFP System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default RegisterVendorPage;
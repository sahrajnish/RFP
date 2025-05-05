import React, { useState } from "react";
import { Link } from "react-router-dom";
import velocityLogo from "../assets/images/velocity_logo.png";
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddRFP = () => {
    const [item_name, setItem_name] = useState("");
    const [rfp_no, setRFP_no] = useState("");
    const [quantity, setQuantity] = useState("");
    const [last_date, setLast_date] = useState("");
    const [minimum_price, setMinimum_price] = useState("");
    const [maximum_price, setMaximum_price] = useState("");
    const [categories, setCategories] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [item_description, setItem_description] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        const data = {
            owner: loggedInUser.user_id,
            item_name: item_name,
            rfp_no: rfp_no,
            quantity: quantity,
            last_date: last_date,
            minimum_price: minimum_price,
            maximum_price: maximum_price,
            categories: categories,
            vendors: vendors,
            item_description: item_description
        }
        
        try {
            const res = await axios.post("/api/createrfp", data);
            if(res.data.response === "error") {
                toast(res.data.error[0]);
            }
            if(res.data.response === "success") {
                toast("RFP added successfully");
                clearInput();
            }
        } catch (err) {
            console.log(err.data);
            if(err.response && err.response.data && Array.isArray(err.response.data.error)) {
                toast(err.response.data.error[0]);
            }   
        }
    }

    const clearInput = () => {
        setItem_name("");
        setRFP_no("");
        setQuantity("");
        setLast_date("");
        setMinimum_price("");
        setMaximum_price("");
        setCategories([]);
        setVendors([]);
        setItem_description("");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        clearInput();
    }

    return (
        <div id="layout-wrapper">
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={velocityLogo} alt="logo" height="40" />
                                </span>
                                <span className="logo-lg">
                                    <img src={velocityLogo} alt="logo" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li>
                                <Link to="/" className="waves-effect">
                                    <i className="mdi mdi-file-document-box-outline"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/allrfp" className="waves-effect">
                                    <i className="mdi mdi-flip-vertical"></i>
                                    <span>RFP Lists</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/createrfp" className="waves-effect">
                                    <i className="mdi mdi-plus"></i>
                                    <span>Add RFP</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Add RFP</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Add RFP</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="validateJs" id="itemForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="item_name">Item Name<em>*</em></label>
                                                        <input type="text" className="form-control" id="item_name" name="item_name" value={item_name} data-rule-mandatory="true" onChange={(e) => setItem_name(e.target.value)}/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="rfp_no">RFP Number<em>*</em></label>
                                                        <input type="text" className="form-control" id="rfp_no" name="rfp_no" value={rfp_no} data-rule-mandatory="true" onChange={(e) => setRFP_no(e.target.value)}/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="quantity">Quantity<em>*</em></label>
                                                        <input type="number" className="form-control" id="quantity" name="quantity" value={quantity} data-rule-mandatory="true" onChange={(e) => setQuantity(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="last_date">Last Date<em>*</em></label>
                                                        <input type="date" className="form-control" id="last_date" name="last_date" value={last_date} data-rule-mandatory="true" onChange={(e) => setLast_date(e.target.value)}/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="item_description">Item Description<em>*</em></label>
                                                        <textarea className="form-control" id="item_description" name="item_description" value={item_description} rows="3" data-rule-mandatory="true" onChange={(e) => setItem_description(e.target.value)}></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="minimum_price">Minimum Price<em>*</em></label>
                                                        <input type="number" className="form-control" id="minimum_price" name="minimum_price" value={minimum_price}  data-rule-mandatory="true" onChange={(e) => setMinimum_price(e.target.value)}/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="maximum_price">Maximum Price<em>*</em></label>
                                                        <input type="number" className="form-control" id="maximum_price" name="maximum_price" value={maximum_price} data-rule-mandatory="true" onChange={(e) => setMaximum_price(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="categories">Categories (comma-separated)<em>*</em></label>
                                                        <input type="text" className="form-control" id="categories" name="categories" value={categories} data-rule-mandatory="true" onChange={(e) => setCategories(e.target.value)}/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="vendors">Vendors (comma-separated)<em>*</em></label>
                                                        <input type="text" className="form-control" id="vendors" name="vendors" value={vendors} data-rule-mandatory="true" onChange={(e) => setVendors(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mt-4 text-right">
                                                    <button type="submit" className="btn btn-primary mb-2 mt-1">Submit</button>
                                                    <button type="button" className="btn btn-secondary ml-2 mb-2 mt-1" onClick={handleCancel}>Cancel</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                2022 &copy; Copyright.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right d-none d-sm-block">
                                    Support Email: <a href="#" target="_blank" className="text-muted">support@velsof.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AddRFP;
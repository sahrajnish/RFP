import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import velocityLogo from "../assets/images/velocity_logo.png";
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import axios from "axios";


const ListRFP = () => {
    const [rfps, setRfps] = useState([]);

    useEffect(() => {
        getAllRfps();
    }, [])

    const getAllRfps = async () => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        try {
            const allrfps = await axios.post('/api/allrfp', loggedInUser);
            setRfps(allrfps.data.allrfp);
            console.log(rfps);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`
    }

    return (
        <>
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
                                        <h4 className="mb-0 font-size-18">RFP List</h4>
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active">RFP List</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div class="table-responsive">
                                <table class="table mb-0 listingData dt-responsive" id="datatable">
                                    <thead>
                                        <tr>
                                            <th>RFP No.</th>
                                            <th>RFP Title</th>
                                            <th>RFP Last Date</th>
                                            <th>Min Amount</th>
                                            <th>Max Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rfps.map((r, index) => (
                                            <tr key={index}>
                                                <td>{r.rfp_no}</td>
                                                <td>{r.item_name}</td>
                                                <td>{formatDate(r.last_date)}</td>
                                                <td>{r.minimum_price}</td>
                                                <td>{r.maximum_price}</td>
                                                <td><span class="badge badge-pill badge-success">Open</span></td>
                                                <td>
                                                    <a href="#" title="Close RFP" class="text-danger"><i class="mdi mdi-circle-off-outline"></i></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
        </>
    );
};

export default ListRFP;
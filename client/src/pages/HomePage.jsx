import React from "react";
import { Link, useNavigate } from "react-router-dom";
import velocityLogo from "../assets/images/velocity_logo.png";

// CSS imports
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import { toast } from "react-toastify";

const HomePage = () => {
    const navigate = useNavigate();

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        try {
            localStorage.removeItem('user');
            toast("Logout successful")
            navigate('/login');
        } catch (error) {
            toast(error.message);
        }
    }

    return (
        <div id="layout-wrapper">
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* LOGO */}
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

                    <div className="d-flex pr-2">
                        <div className="dropdown d-inline-block">
                            <span className="d-none d-xl-inline-block ml-1" key="t-henry">{loggedInUser.name}</span>&nbsp;&nbsp;
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ========== Left Sidebar Start ========== */}
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    {/*- Sidemenu */}
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
                    {/* Sidebar */}
                </div>
            </div>
            {/* Left Sidebar End */}

            {/* ============================================================== */}
            {/* Start right Content here */}
            {/* ============================================================== */}
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Dashboard</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript:void(0);">Home</a>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            Welcome to RFP System.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            Name: {loggedInUser.name}
                                        </div>&nbsp;&nbsp;
                                        <div>
                                            Email: {loggedInUser.email}
                                        </div>&nbsp;&nbsp;
                                        <div>
                                            User Type: {loggedInUser.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* container-fluid */}
                </div>
                {/* End Page-content */}

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
            {/* end main content*/}
        </div>
    );
};

export default HomePage;
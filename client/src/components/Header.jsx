import React from "react";

const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/velocity_logo.png" alt="" height="40" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/velocity_logo.png" alt="" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="d-flex pr-2">
                    <div className="dropdown d-inline-block">
                        <span className="d-none d-xl-inline-block ml-1" key="t-henry">Welcome Henry</span>&nbsp;&nbsp;
                        <a className="" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
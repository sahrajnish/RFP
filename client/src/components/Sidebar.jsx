import React from "react";

const Sidebar = () => {
    return (
        <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                    <a href="dashboard.html" className="waves-effect">
                        <i className="mdi mdi-file-document-box-outline"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="vendors.html" className="waves-effect">
                        <i className="mdi mdi-receipt"></i>
                        <span>Vendors</span>
                    </a>
                </li>
                <li>
                    <a href="rfp.html" className="waves-effect">
                        <i className="mdi mdi-flip-vertical"></i>
                        <span>RFP Lists</span>
                    </a>
                </li>
                <li>
                    <a href="users.html" className="waves-effect">
                        <i className="mdi mdi-apps"></i>
                        <span>User Management</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="waves-effect">
                        <i className="mdi mdi-weather-night"></i>
                        <span>Categories</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
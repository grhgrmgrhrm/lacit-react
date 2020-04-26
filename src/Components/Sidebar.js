import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
                <section id="sidebar">
                    <div className="sidebarContent">
                        <h5>Register as vendor</h5>
                        <p>Please submit your registration details below</p>
                        <form className="formStyle" action="/action_page.php">
                            <label htmlFor="country">Country</label>
                            <div className="select-wrapper">
                                <select id="country" name="country">
                                    <option value="pleaseselect"></option>
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                                <div className="select-arrow"></div>
                                <div className="select-arrow"></div>
                            </div>

                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="" />

                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="" />

                            <label htmlFor="cname">Company name</label>
                            <input type="text" id="cname" name="companyname" placeholder="" />

                            <label htmlFor="addr">Address</label>
                            <input type="text" id="addr" name="address" placeholder="" />

                            <label htmlFor="topbrands">Top 3 brands</label>
                            <input type="text" id="topbrands" name="top3brands" placeholder="" />

                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" id="telephone" name="telephone" placeholder="+1 999 000 00 00" />

                            <label htmlFor="email">Email address</label>
                            <input type="text" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="mail@example.com" />

                            <label htmlFor="confirmemail">Confirm Email address</label>
                            <input type="text" id="confirmemail" name="confirmemail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="mail@example.com" />

                            <label className="chekcontainer">
                                <input type="checkbox" />
                                    <span className="checkmark" />
                                    Accept agreement
                            </label>

                            <input type="submit" value="Register" />
                        </form>
                        <a className="sidebarBacktohome" href="#">Back to home</a>
                    </div>
                </section>
        );
    }
}

export default Sidebar;
import React from 'react'

const Navbar = (props) => {
    return (
        <div className="cont">
            <div className="container">
                <nav>
                    <a  href="#"><i className={props.icon}></i></a>
                    <a  href="#" >{props.title}</a>
                </nav>
            </div>

        </div>
    )
}

export default Navbar

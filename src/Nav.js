import './Nav.css';
import React, {useEffect,useState} from 'react'
import netflix from './Netflix_2015_logo.svg';

function Nav() {

const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);    
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`Nav ${show && "nav_black"}`}>
            <img className ="nav_logo"
            src= {netflix}
            //src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
            alt="Netflix Logo"
            />

<img className ="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"
            alt="Avatar"
            />
            
        </div>
    )
}

export default Nav

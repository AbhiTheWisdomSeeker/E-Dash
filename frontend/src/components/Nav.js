import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const Navigate = useNavigate();

    const auth = localStorage.getItem('user')
    const logout = () => {
        localStorage.removeItem('user')
        Navigate('/')
        window.location.reload()
        }

    return (
        <div className='nav-bor'>
            {auth?
            <ul className="nav-ul">
                <li ><Link to="/">Home</Link></li>
                <li><Link to="Products">Products</Link></li>
                <li><Link to="Update">Update</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Profile">Profile</Link></li>
                <li><Link onClick={logout}to="Login">Logout</Link></li>
                
                {/* <li>{auth?<Link onClick={logout}to="Logout">Logout</Link>:<Link to="SignUp">SignUP</Link>}</li> */}       
    

            </ul>
            :
            <ul className="nav-ul">
            <li><Link to="SignUp">SignUP</Link>
                    </li>
                    <li><Link to="Login">Login</Link></li>
                
            </ul>
            }
        </div>
    )

}


export default Nav;




// react-router-dom is a library that can be used for many purposes like
// routing, navigation, etc. It is used to create routes for the application.
// The Link component is used to create links between routes.
// The to attribute is used to specify the route that the link should navigate to.


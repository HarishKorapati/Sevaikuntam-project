//import SearchBar from "./searchbar";
import { Link } from 'react-router-dom';
import './App.css';
import { MenuItems } from './components/MenuItems';
import title from "./title.png"

// import Login from "./Login";
// import Signup from "./Signup";



const Navbar =()=>{
    
    return(
    <nav className="NavbarItems">
        <img src={title} alt="logo" style={{width: "100px",height:"80px",objectFit:"cover"}}></img>
        <h1 className="navbar-log"> SEVAIKUNTAM</h1>

            
            
            
            <ul className='nav-menu'>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName  } to ={item.url} >
                                <i className={item.icon}></i>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>
    </nav>
    );
}
export default Navbar

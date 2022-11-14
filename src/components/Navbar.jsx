import { Link } from "react-router-dom"

const  Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#b1a7a6"}}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-center"> 
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link to={"/"} className="nav-link" aria-current="page" style={{color: "white"}}>Home</Link>
                        <Link to={"/about"} className="nav-link" style={{color: "white"}}>About</Link>
                        <Link to={"/skills"} className="nav-link"  style={{color: "white"}}>Skills</Link>
                        <Link to={"/articles"} className="nav-link"  style={{color: "white"}}>Articles</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
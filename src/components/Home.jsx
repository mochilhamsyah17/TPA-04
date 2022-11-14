import aku from "../assets/aku.png"

const Home = () => {
    return (
        <>
            <a style={{padding: "30px"}}></a>
                <div className="d-flex justify-content-center">
                    <img src={aku} className="position-relative" style={{width: "12%", borderRadius: "70px", marginTop: "20px"}}/>
                </div>

            <div className="d-flex justify-content-center" style={{padding: "20px"}}>
                <h2>
                    Mochammad Ilhamsyah Maulana
                </h2>
            </div>

            <div className="d-flex justify-content-center">
                <h6>
                    Program Studi S1 Sistem Informasi | IBI Kesatuan Bogor
                </h6>
            </div>

            <div className="d-flex justify-content-center">
                <h6>Follow my media sosial below!</h6>
            </div>

            <div className="d-flex justify-content-center">
                <a href="https://github.com/mochilhamsyah17"  className="uil uil-github" style={{color: "#000000", marginRight: "20px", textDecoration: "none"}}></a>
                <a href="https://www.instagram.com/mochilhamsyah_/"  className="uil uil-instagram" style={{color: "#000000", textDecoration: "none"}}></a>
            </div>
        </>
    )
}

export default Home
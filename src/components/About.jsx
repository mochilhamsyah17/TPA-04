import aku from "../assets/aku.png"

const About = () => {
    return(
    <>
        <div>
            <a style={{padding: "30px"}}></a>
            <div className="d-flex justify-content-center">
                <img src={aku} className="position-relative d-flex justify-content-center" style={{width: "18%", marginTop: "50px", borderRadius: "20px"}}/>
            </div>
            <div style={{marginTop: "1%", marginLeft: "10%", marginRight: "10%", textAlign: "center"}}/><br/>
                <h4>
                <i>Hi, Hallo, Assalamualaikum, Shalom, Om Swastiyastu, Namo Budhaya, Salam Kebajikan!</i>
                </h4>
            <br/>
            <a style={{textAlign: "justify"}}/>
                    <h6>
                    Perkenalkan saya Mochammad Ilhamsyah Maulana, lulusan Teknik Komputer dan Jaringan SMK Negeri 3
                    Bogor tahun 2020. Saat ini Mahasiswa aktif S1 Sistem Informasi Institut Bisnis dan Informatika Kesatuan
                    Bogor.
                    </h6>
                <br/>
                    <h6>
                    Saya memasuki kuliah pada tahun virus Covid-19 mulai menyerang. Yap, betul pada tahun 2020 saya memasuki dunia
                    perkuliahan. Pada saat itu keadaan jalanan sangat sepi, dan kesehatan masyarakat sangat patut diperhatikan. Puluhan ribu
                    rakyat Indonesia meninggal dunia sebab virus tersebut. Jadi stay healthy ya gais!
                    </h6>
                <br/>
                    <h6>
                    Pada tahun 2020 tepatnya bulan Agustus saya diberikan kesempatan untuk mengikuti program Studi Independen Kampus Merdeka
                    di Skilvul. Dengan learing-track Front-End Web Development saya mulai belajar banyak hal-hal baru. Pertama dimulai dengan
                    Product Development membahas mengenai Product Innovation, bagaimana memprioritaskan fiitur dan membuat dokumentasi,
                    perkenalan mengenai UI/UX, Userflow dan menyusun konten, Menentukan karakter dan arah visual product, Layout design, Visual & UI Elements, hingga Prototyping. 
                    </h6>
                <br/>
                    <h6>
                    Dilanjutkan dengan Basic Coding yaitu membahas HTML, CSS, dan Javascript dasar. Lalu Web Development Basic yang membahas seputar UNIX CL, HTML, CSS, Algoritma,
                    Javascript tentang Conditional, Looping, Scope & Function, Data Type Built in Prototype & Method, dan DOM.
                    </h6>
                <br/>
                    <h6>
                    Lalu sekarang pada program Kampus Merdeka Studi Independen di Skilvul saya menjalani Web Development Advance yang sedang membahas Javascript Array,
                    Multidimensi Array, Object, Rekursif, Asynchronus, dan Web storage.
                    </h6>
                <br/>
                <br/>
                    <h6 style={{textAlign: "center"}}>
                    Follow media sosial saya dibawah ini ya!
                    </h6>
                    <h6 style={{textAlign: "center"}}>
                        <a href="https://github.com/mochilhamsyah17" className="uil uil-github" style={{color: "black", marginRight: "10px", textDecoration: "none"}}>github.com/mochilhamsyah17</a>
                        <a href="https://www.instagram.com/mochilhamsyah_/" className="uil uil-instagram" style={{color: "black", textDecoration: "none"}}>instagram.com/mochilhamsyah_</a>
                    </h6>
            </div>
        </>
    )
}

export default About
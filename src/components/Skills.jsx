const Skills = () => {
    return(
        <>
            <a style={{padding: "30px"}}></a>

            <div className="d-flex justify-content-center" style={{padding: "30px"}}>
                <h2>Skill yang saya kuasai</h2>
            </div>

            <div className="d-flex justify-content-center" >

                <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "18rem", marginRight: "20px"}}>
                    <div className="card-body">
                        <h5 className="card-title">Development</h5>
                        <p className="card-text">
                            <li>
                                HTML Basic
                            </li>
                            <li>
                                Javascript Basic
                            </li>
                            <li>
                                CSS Basic
                            </li>
                            <li>
                                Python Basic
                            </li>
                            <li>
                                PHP Basic
                            </li>
                            <li>
                                C++ Basic
                            </li>
                        </p>
                    </div>
                </div>

                <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Design</h5>
                        <p className="card-text">
                            <li>
                                Figma
                            </li>
                            <li>
                                Corel Draw
                            </li>
                            <li>
                                Adobe Premiere
                            </li>
                            <li>
                                Adobe Illustrator Basic
                            </li>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills

function AboutMe({cvData}){
    // console.log(cvData)
    return(
        <div  
            className="p-4"
            // className="tab-pane fade show active" 
            id="nav-aboutme" role="tabpanel" aria-labelledby="nav-aboutme-tab">
            <h1>About me</h1>
            <p>{cvData?.personalInfo[0].aboutMe}</p>
            <h1>Languages</h1>
            <ul>
                <li>Portuguese (native)</li>
                <li>English (advanced)</li>
            </ul>
            <h1>Hobbies</h1>
            <ul>
                <li>Guitar</li>
                <li>Violin</li>
                <li>Readings: scientific Fiction, non fiction</li>
                <li>DIY projects</li>
                {/* <li></li> */}
            </ul>
        </div>
    );
}

export {AboutMe}
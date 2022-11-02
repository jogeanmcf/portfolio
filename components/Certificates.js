

function Certificates({cvData}){
    return(
        <div 
            className="p-4"
            // className="tab-pane fade" // this className seem is not working, seem we need some show active
            id="nav-certificates" role="tabpanel" aria-labelledby="nav-certificates-tab">
            <h1>Courses</h1>
            {cvData.certificates.map((item,index) => {
                return <CertificateCard certification={item}/>
            })}
            {/* <h1>Academics</h1> */}
        </div>
        
    );
}

function CertificateCard({certification}){
    return(
        <div className="card w-auto m-4 bg-light">
            <div className="card-body">
                <h3 className="card-title">{certification.title}</h3>
                <p>{certification.institution}</p>
                
            </div>
        </div>
    );
}

export {Certificates}
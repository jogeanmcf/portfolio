import Link from "next/link";
import Image from "next/image";

function Projects({cvData}){
    return(
        <div 
            className="p-4"
            // className="tab-pane fade" // this className seem is not working, seem we need some show active
            id="nav-projects" role="tabpanel" aria-labelledby="nav-projects-tab">
        <h1>Front - End</h1>
        {cvData?.projects.map((project, index) => {
            return <ProjectCard project={project} key={index}/>
        })}
        <h1>Papers</h1>
        {cvData?.publications.map((publication,index) => {
            return <PublicationCard publication={publication} key={index}/>
        })}
        </div>
    );
}

function ProjectCard({project, key}){
    return(
        <div className="card w-auto mb-4 ml-2 bg-light" key={key}>
            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <Link href={project.link}>
                    <a target="_blank">
                        <Image src="/images/github.svg" width="24" height="24"></Image>
                    </a>
                </Link>
            </div>
        </div>
    );
}

function PublicationCard({publication, key}){
    return(
        
        <div className="card w-auto mb-4 bg-light" key={key}>
            <div className="card-body">
                <Link href={publication.link}>
                    <a className="link-secondary"><h5 className="card-title">{publication.title}</h5></a>
                </Link>
                    <p>{publication.description}</p>

            </div>
        </div>
        
    );
}



export {Projects}
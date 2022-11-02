
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import { Certificates } from './Certificates'


function Body({cvData}){
    
    const [tabIndex, setTabIndex] = useState(0)
    const tabs = [<AboutMe cvData={cvData} key={0}/>, <Projects cvData={cvData} key={1}/>, <Certificates cvData={cvData} key={2}/>]

    const string = "nav-link col-4"
    return (
        <div className="container">
        <div className='row'>
            <div className='col col-md-4 align-middle bg-light gap-4 text-center'>
                <div className="fs-3 m-2 text-primary">
                    <span className='fw-bold m-2'>Jogean</span>
                    <span>Carvalho</span>
                </div>
                
                <div className="col text-center">
                    <span className='m-auto'>
                        <p>Physicist | Data Scientist | Dev Front - End</p>
                    </span>
                
                    <ListTile info={"jogeanmcf@gmail.com"}></ListTile>
                    <ListTile info={"+55 (61) 99325-4151"}></ListTile>
                
            
                    <div className='col col-12 mt-4 mb-2'>
                        <Link href="https://github.com/jogeanmcf" >
                            <a target="_blank"  className='m-4'>
                                <Image src={'/images/github.svg'} width={24} height={24}></Image>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jogeanmcf/">
                            <a target="_blank" className='m-4'>
                            <   Image src={'/images/linkedin.svg'} width={24} height={24}></Image>
                            </a>
                        </Link>
                        <Link href="https://twitter.com/jogeanmcf">
                            <a target="_blank" className='m-4'>
                            <   Image src={'/images/twitter.svg'} width={24} height={24}></Image>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='col-md-8'>
                <nav>
                    <div className="nav nav-tabs w-auto col-12" id="nav-tab" role="tablist">
                        <button className={string} id="nav-aboutme-tab" data-bs-toggle="tab" type="button" 
                            role="tab" aria-controls="nav-aboutme" aria-selected={tabIndex===0}
                            onClick={()=> setTabIndex(0)}
                            style={{backgroundColor: tabIndex==0?"blue":"white", color: tabIndex==0 ? "white" : "blue"}}
                        >About Me
                        </button>
                        <button className={string} id="nav-projects-tab" data-bs-toggle="tab" type="button" 
                            role="tab" aria-controls="nav-projects" aria-selected={tabIndex===1}
                            onClick={()=> setTabIndex(1)}
                            style={{backgroundColor: tabIndex==1 ? "blue":"white", color: tabIndex==1 ? "white" : "blue"}}
                        >Projects
                        </button>
                        <button className={string} id="nav-certificates-tab" data-bs-toggle="tab"  type="button" 
                            role="tab" aria-controls="nav-certificates" aria-selected={tabIndex===2}
                            onClick={()=> setTabIndex(2)}
                            style={{backgroundColor: tabIndex==2?"blue":"white", color: tabIndex==2 ? "white" : "blue"}}
                        >Certificates
                        </button>
                    </div>
                </nav>
                {tabs[tabIndex]}
            </div>
            </div>  
        </div>
    );
}

function ListTile({info}){
    const copy = () => {
        navigator.clipboard.writeText(info)
    }
    return (
        <div className='row col-12 bg-secondaty text-center hover:bg-secondary'>
            <p className='w-auto m-auto'>{info}</p>
            <button className='btn w-auto m-auto' onClick={copy}>
                <Image src="/images/copyIcon.svg" width={24} height={24}></Image>
            </button>
           
                   
        </div>
    );
}

export {Body}
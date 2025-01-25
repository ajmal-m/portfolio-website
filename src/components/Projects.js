import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";
import ProjectCard from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";
import { useState } from "react";

const Projects = ()  => {


    const  [projects] = useState([
        {
            name:"Trip Book Website",
            detail:`
                This website is built using HTML, CSS, and JavaScript. The structure and content 
                are created with HTML, while CSS is used to style the page and ensure it is responsive 
                across various devices. JavaScript powers interactive elements such as form submissions and smooth transitions.`,
            image:{
                url:'/images/projects/book.png',
                alt:'Trip Book'
            },
            link:{
                github:'https://github.com/ajmal-m/tourist_app',
                view:'https://tourist-app-zeta.vercel.app'
            }
        },

        {
            name:"Real Estate Website",
            detail:`
                This website is built using HTML, CSS, and JavaScript. The structure and content 
                are created with HTML, while CSS is used to style the page and ensure it is responsive 
                across various devices. JavaScript powers interactive elements such as form submissions and smooth transitions.`,
            image:{
                url:'/images/projects/realestate.png',
                alt:'Real estate Book'
            },
            link:{
                github:'https://github.com/ajmal-m/real_estate_page',
                view:'https://real-estate-page-orcin.vercel.app'
            }
        },

        {
            name:"Real Estate Website",
            detail:`
                This website is built using HTML, CSS, and JavaScript. The structure and content 
                are created with HTML, while CSS is used to style the page and ensure it is responsive 
                across various devices. JavaScript powers interactive elements such as form submissions and smooth transitions.`,
            image:{
                url:'/images/projects/realestate.png',
                alt:'Real estate Book'
            },
            link:{
                github:'https://github.com/ajmal-m/real_estate_page',
                view:'https://real-estate-page-orcin.vercel.app'
            }
        }
    ])
    return (
        <div 
            className="
                bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
                bg-blue-shadow flex justify-center
                custom-scrollbar scroll-smooth
            "
        >
            <div className="max-w-[1200px]">
                <Navbar/>
                <section className="mt-[90px] px-[16px] pb-[15px]">
                    <div>
                        <AnimatedText>
                            <h1 className="text-4xl pb-1 py-1 font-bold text-white text-center mt-4 font-popinsMedium">Projects</h1>
                            <div className="h-1 bg-[#5255fa] w-7/12 mx-auto mt-5 rounded-lg"></div>
                        </AnimatedText>
                    </div>

                    <div className="flex flex-wrap gap-[16px] p-[24px]">
                        {
                            projects.map((project, index) => (
                                <AnimatedCard key={index}>
                                    <ProjectCard
                                        project={project}
                                    />
                                </AnimatedCard>
                            ))
                        }
                    </div>                  
                </section>
            </div>
        </div>
    )
}

export default Projects;
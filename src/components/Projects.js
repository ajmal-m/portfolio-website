import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";
import ProjectCard from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";
import { useState } from "react";

const Projects = ()  => {


    const  [projects] = useState([
         {
            name:"Next js E-commerce app",
            detail:`
               This e-commerce application is built with Next.js and uses shadcn/ui for a modern, responsive user interface. It integrates PayPal for secure payment processing and uses Prisma ORM to interact with a PostgreSQL database. The platform allows users to browse products, manage their shopping cart, place orders, and track purchases, while admins can easily manage products and orders through the dashboard.
                `,
            image:{
                url:'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png',
                alt:'Blog Application'
            },
            link:{
                github:'https://github.com/ajmal-m/Next-e-Commerce',
                view:'https://github.com/ajmal-m/Next-e-Commerce'
            }
        },
           {
            name:"Blog Application",
            detail:`
               The Blog Application is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It allows users to create, read, update, and delete blog posts. The application features blog post creation with the Tiptap editor, as well as the ability to add likes and comments.
                `,
            image:{
                url:'/images/projects/blog.png',
                alt:'Blog Application'
            },
            link:{
                github:'https://github.com/ajmal-m/Blog-front-end',
                view:'http://16.16.65.162/'
            }
        },
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
            name:"Recipe Finder App",
            detail:`
                A React.js web app that showcases a wide variety of food categories and displays 
                recipes for each food, along with videos of how to make them and the required ingredients, 
                is an excellent way to explore and discover new recipes from a diverse range of cuisines. 
                By utilizing the API provided by https://www.themealdb.com.`,
            image:{
                url:'/images/projects/reciepe.png',
                alt:'Recipe-finder-website'
            },
            link:{
                github:'https://github.com/ajmal-m/food-app.github.io',
                view:'https://react-food-recipes-app.web.app/menu'
            }
        },

        {
            name:"Mess Marking App",
            detail:`
                I've created an efficient MERN (MongoDB, Express, React, Node.js) application designed 
                to streamline meal planning for future dates. This platform enables seamless meal marking 
                and scheduling, enhancing user convenience and organization`,
            image:{
                url:'/images/projects/mess.png',
                alt:'Mess-app'
            },
            link:{
                github:'https://github.com/ajmal-m/mess_marking',
                view:'https://mess-marking-client.vercel.app/login'
            }
        },

        {
            name:"OLX Clone",
            detail:`
                OLX Clone project is a professional web application built using React.js, 
                featuring functionalities for both buying and selling products. The application 
                is complemented by a robust backend developed using Firebase, which handles data management, 
                storage, and authentication`,
            image:{
                url:'/images/projects/olx.png',
                alt:'olx-app'
            },
            link:{
                github:'https://github.com/ajmal-m/react_olx_clone',
                view:'https://react-olx-clone-d1ced.web.app/'
            }
        },

        {
            name:"Netflix clone",
            detail:`
                A React web app similar to Netflix, which shows a list of movies and TV series with different genres, 
                and utilizes the TMDB (The Movie Database) API to display the content, is a great way to create a streaming 
                platform-like user experience. By using the TMDB API, the app can fetch a wide variety of movies and TV shows, 
                along with their details.`,
            image:{
                url:'/images/projects/netflix.png',
                alt:'netflix-app'
            },
            link:{
                github:'https://github.com/ajmal-m/netflix-clone.github.io',
                view:'https://netflix-app-gamma.vercel.app/'
            }
        },
        {
            name:"E-commerce website",
            detail:`
                A responsive e-commerce app built using HTML, CSS, and JavaScript, designed for smooth and engaging user interactions.`,
            image:{
                url:'/images/projects/ecommerce.png',
                alt:'e-commerce-app'
            },
            link:{
                github:'https://github.com/ajmal-m/shop_page',
                view:'https://shop-page-two.vercel.app'
            }
        },
        {
            name:"Food Order App",
            detail:`
                A modern food ordering app built using HTML, CSS, and JavaScript, offering a seamless 
                user experience. The app features a dynamic and interactive interface with hover effects, 
                scrollbars, and smooth animations`,
            image:{
                url:'/images/projects/foodOrder.png',
                alt:'Mess-app'
            },
            link:{
                github:'https://github.com/ajmal-m/food_orderg',
                view:'https://food-order-ruddy-gamma.vercel.app'
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
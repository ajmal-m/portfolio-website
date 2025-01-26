import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";

const Contact = ()  => {
    return (
        <div
            className="
                bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
                bg-blue-shadow flex justify-center
                custom-scrollbar scroll-smooth
            "
        >
             <div className="max-w-[700px]">
                <Navbar/>
                <section className="mt-[90px] px-[16px] pb-[15px]">
                    <div>
                        <AnimatedText>
                            <h1 className="text-4xl pb-1 py-1 font-bold text-white text-center mt-4 font-popinsMedium">Contacts</h1>
                            <div className="h-1 bg-[#5255fa] w-7/12 mx-auto mt-5 rounded-lg"></div>
                        </AnimatedText>
                    </div>

                    <div className="flex flex-col gap-[16px] mt-[16px]">
                        <div>
                            <AnimatedText>
                            <h1 className="text-[white] text-red font-popinsMedium text-[20px]">Phone : <a href="tel:+916282139359">+91 62821 39359</a></h1>
                            </AnimatedText>

                            <AnimatedText>
                            <h1 className="text-[white] text-red font-popinsMedium text-[20px]">Email : <a href="mailto:ajmalm76774@gmail.com">Ajmalm76774@gmail.com</a></h1>
                            </AnimatedText>

                            <AnimatedText>
                            <h1 className="text-[white] text-red font-popinsMedium text-[20px]">Linkedin : <a href="https://www.linkedin.com/in/ajmal-m-b655811b2/" className="underline">ajmal m</a></h1>
                            </AnimatedText>

                            <AnimatedText>
                            <h1 className="text-[white] text-red font-popinsMedium text-[20px]">Github : <a href=" https://github.com/ajmal-m" className="underline">ajmalgithub</a></h1>
                            </AnimatedText>
                           
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact;
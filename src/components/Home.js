const Home = ()  => {
    return (
        <section className="mt-[90px] px-[16px]">
            <div className="flex flex-col gap-[24px] items-center justify-center">



                {/* Profile Image */}
                <div>
                    <img 
                        alt="profile-photo" 
                        src="/images/profile2.png" 
                        className="
                            rounded-[50%] w-[300px] h-[300px] 
                            object-cover border border-[#fff3] 
                            dark:border-[#fff3] shadow-img-shadow
                        "
                    />
                </div>
                {/* Profile image */}




                {/* Heading */}
                <div>
                    <h1 className="font-popinsMedium text-4xl lg:text-5xl text-white text-center lg:text-left">Hi, I'm <span className="text-nameColor">AJMAL</span></h1>
                </div>
                {/* Heading */}



                {/* paragraph */}
                <div>
                    <p className="text-center font-popinsMedium md:text-xl lg:text-2xl text-gray-300 text-center xs:text-sm">Innovative Software Developer with 2 Years of Full-Stack Expertise</p>
                </div>
                {/* paragraph */}



                {/* Resume btn */}
                <div>
                    <button type="button" 
                        className="
                            transition-all duration-300 ease-in-out
                            min-w-[172px] h-[40px] flex items-center 
                            justify-center border px-[16px]
                            gap-[0.5rem] rounded-[12px] border-dashed
                            hover:border-solid hover:bg-nameColor
                        "
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = './file/dsa.pdf'; 
                            link.download = 'resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#d1d5db">
                            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                        </svg>

                        <p className="text-[white] font-[400] font-popinsMedium text-[14px]">My resume</p>
                    </button>
                </div>
                {/* REsume btn */}


            </div>
        </section>
    )
}

export default Home;
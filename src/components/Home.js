import {  useState} from "react";

const Home = ()  => {


    const [ connectLinks  ] = useState([
        {
            name:'github',
            icon:`
                <svg height="26" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="26" data-view-component="true" class="octicon octicon-mark-github v-align-middle" fill="currentColor">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
                `,
            url:'https://github.com/ajmal-m'
        },
        {
            name:'linkedin',
            icon:`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="26" height="26" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                `,
            url:'https://www.linkedin.com/in/ajmal-m-b655811b2/'
        },
        {
            name:'leetcode',
            icon:`
                <svg width="26" height="26" viewBox="0 0 95 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none">
                    <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="currentColor">
                    </path>
                </svg>
                `,
            url:'https://leetcode.com/u/Ajmal124/'
        }
    ]);

    return (
        <section className="mt-[90px] px-[16px] pb-[15px]">
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


                {/* Connect With Me */}
                <div className="mt-[24px] flex flex-col items-center justify-center">
                    <h2 className="text-[#ffffff] dark:text-[#ffffff] text-[14px] font-[500] font-popinsMedium">Connect with me</h2>
                    <div className="flex items-center gap-[24px] mt-[16px]">
                        {
                            connectLinks.map((item) => (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[white] hover:text-nameColor font-popinsMedium">
                                    <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                                </a>
                            ))
                        }
                    </div>
                </div>
                {/* Connect With me */}



                {/* OR section start */}
                <div className="flex mt-[16px] flex-col gap-[8px] items-center">
                    <div>
                        <p className="text-[16px] text-[white] dark:text-[white] font-popinsMedium">Or</p>
                    </div>

                    <div className="flex items-center gap-[4px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2466f5">
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                        </svg>
                        <a className="text-[14px] text-[white] leading-[20px] font-popinsMedium" href="mailto:ajmalm76774@gmail.com">Ajmalm76774@gmail.com</a>
                    </div>

                    <div className="flex items-center gap-[4px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2466f5">
                            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                        </svg>
                        <a className="text-[14px] text-[white] leading-[20px] font-popinsMedium" href="tel:+916282139359">+91 62821 39359</a>
                    </div>
                </div>
                {/* OR section start */}


            </div>
        </section>
    )
}

export default Home;
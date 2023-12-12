
import { FaFileDownload } from "react-icons/fa";
import resume from '/src/assets/Text.pdf'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className='flex justify-between mx-auto h-screen items-center bg-[url("https://i.ibb.co/Hq7Hvgx/bg-new-1.png")] bg-no-repeat bg-cover w-full'>
            <div className='lg:ml-20 md:ml-20 ml-10'>
                <h1 className='text-white text-6xl font-semibold'>I'm R<span className='text-[#91ff00]'>o</span>man</h1>
                <div>
                    <div className='w-full mt-3 lg:text-xl md:text-base text-xs'>
                        <h3 className='text-white'>A Enthusiastic <span className='text-[#91ff00]'><Typewriter
            words={['Web Developer', 'Web Developer']}
            loop={10}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></h3>
                    

                    </div>
                    <div className='mt-6 text-center'>
                        <a href={resume} download={'resume.pdf'}>
                            <button type="button" className="bg-[#91ff00] border-2 border-[#91ff00] px-4 py-2 text-black font-semibold rounded hover:border-2 hover:border-[#91ff00] hover:bg-[#91ff00] hover:bg-opacity-10 hover:text-white flex items-center gap-2">
                                Resume <FaFileDownload />
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Banner;
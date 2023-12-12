import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
    return (
        <div className="mt-20 lg:mx-40 md:mx-20 mx-10">
            <div>
                <h1 className="text-3xl text-[#91ff00] font-bold text-center">Skills</h1>
            </div>

            <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-5">
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/kmVbC4z/pngwing-com.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={80}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/LkdJMFY/pngwing-com-8.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={70}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/L5q55tt/pngwing-com-1.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={85}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/F0WLWRZ/pngwing-com-9.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={65}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/18fJWM7/pngwing-com-2.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={70}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/t4WPTMb/pngwing-com-3.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={85}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/BGj0n1V/pngwing-com-4.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={90}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/h7gBpyn/pngwing-com-5.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={70}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/B3PJrsh/pngwing-com-6.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={76}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img className="w-12" src="https://i.ibb.co/g3hQ6FN/pngwing-com-7.png" alt="" />
                    <ProgressBar className="w-full"
                        completed={78}
                        bgColor='#91ff00'
                        labelColor='#010101'
                        labelAlignment='center'
                        baseBgColor='#272829'
                    />
                </div>

            </div>

        </div>
    );
};

export default Skills;
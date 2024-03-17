

const About = () => {
    return (
        <div className="mt-20 lg:mx-40 md:mx-20 mx-10">
            <div>
                <h1 className="text-3xl text-[#91ff00] font-bold text-center">About Me</h1>
                <p className="text-white text-sm text-center pt-5 w-1/2 mx-auto">Unveiling the Passion Behind Web Development</p>
            </div>
            <div className="lg:flex justify-between items-center mt-10 lg:gap-20">
                <div className="lg:w-1/2">
                    <img src="https://i.ibb.co/ZHLVnmb/Asset-4.png" alt="" />
                </div>
                <div className="lg:w-1/2 lg:mt-0 md:mt-10 mt-10">
                    <h1 className="text-3xl text-white font-bold">Web Developer</h1>
                    <p className="text-white text-sm text-justify mt-6">Hey there, I'm Roman, a passionate junior web developer with a love for crafting digital experiences. My expertise lies in the MERN stack—MongoDB, Express.js, React.js, and Node.js.</p>
                    <p className="text-white text-sm text-justify mt-6">What excites me most is the ability to bring ideas to life through code. Whether it's designing sleek user interfaces, optimizing back-end processes, or creating seamless interactions. </p>
                    <p className="text-white text-sm text-justify mt-6">Armed with a solid foundation in MERN, I enjoy the challenge of building scalable and efficient applications. </p>
                    <p className="text-white text-sm text-justify mt-6">Let's collaborate and turn your vision into a digital reality. Whether it's a sleek website or a robust web application, I'm here to bring creativity and functionality to the forefront.</p>
                    <img className="w-1/3 mt-3" src="https://i.ibb.co/mrKRMZv/Sign.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;
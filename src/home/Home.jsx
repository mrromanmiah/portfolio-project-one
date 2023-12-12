import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
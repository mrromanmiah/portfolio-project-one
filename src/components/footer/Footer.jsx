import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-[#91ff00] bg-opacity-10 text-white">
  <aside className="items-center grid-flow-col">
    <img className="w-8" src="https://i.ibb.co/nLBGhvQ/new-logo.png" alt="" />
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl text-[#91ff00]">
    <a href="https://www.linkedin.com/in/romanmiah/">
    <FaLinkedin></FaLinkedin>
    </a>
    <a href="https://twitter.com/SakirAhmedRoman">
    <FaSquareXTwitter />
    </a>
    <a href="https://www.facebook.com/sakirroman">
    <FaSquareFacebook />
    </a>
  </nav>
</footer>
    );
};

export default Footer;
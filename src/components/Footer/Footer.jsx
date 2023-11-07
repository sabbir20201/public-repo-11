import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>

          <Link to="/">
            <img className=" h-12 w-12 rounded-3xl" src="https://i.ibb.co/jJLdHFt/Benefits-of-online-marketing.png" />
          </Link>
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Graphic Branding</a>
          <a className="link link-hover">Web Design</a>
          <a className="link link-hover"> Digital Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
import React, {forwardRef} from "react";//+
import "./Footer.css"; // Add your custom CSS for styling
import insta from '../Assets/insta-logo.png';
import linkedin from '../Assets/linkedin-logo.png';
import youtube from '../Assets/youtube.png';
import x from '../Assets/X-logo.png';
import facebook from '../Assets/facebook-logo.png';

const Footer = forwardRef((props, ref) => {
    const color = (props.theme === "light") ? "rgb(253,204,3)" : "rgb(255, 87, 34)";

    return (
        <footer id="footer" className="lg:flex flex-wrap footer font-popp
            bg-[linear-gradient(111deg,theme(colors.secd)_0%,theme(colors.secd)_3%,theme(colors.text)_3%,theme(colors.text)_90%,theme(colors.secd)_90%,theme(colors.secd)_100%)]
            dark:bg-[linear-gradient(111deg,theme(colors.drks)_0%,theme(colors.drks)_3%,theme(colors.text)_3%,theme(colors.text)_90%,theme(colors.drks)_90%,theme(colors.drks)_100%)]
            " ref={ref}>
            <div className="contact-details basis-1/4 ml-4">
                <h3 className="text-secd dark:text-drks font-bold" style={{padding: "0 20px", margintop: "5px"}}>Contact
                    Address</h3>
                <p style={{marginTop: "-2%", fontSize: "17px", color: "white"}}>Velammal Engineering College (Autonomous)<br></br>Ambattur
                    Red-hills Road, Surapet,<br></br>Chennai – 600 066. Tamil Nadu, India.</p>
                <p style={{marginTop: "27px"}}>
                    Contact: <a className="text-secd dark:text-drks hover:text-prim font-bold" href="tel:+914426590758"
                                style={{textDecoration: "none"}}>044 – 26590758</a>
                </p>
                <p>
                    Student Affair: <a href="tel:+914426591771" className="text-secd dark:text-drks hover:text-prim font-bold"
                               style={{textDecoration: "none"}}>044 - 26591771</a>
                </p>
                <p>For Admissions: <a href="tel:+919123547550" className="text-secd dark:text-drks hover:text-prim font-bold"
                                      style={{textDecoration: "none"}}>9123547550</a> , <a
                    href="tel:+918939221120" className="text-secd dark:text-drks hover:text-prim font-bold" style={{textDecoration: "none"}}>
                    8939221120</a>
                </p>
                <div className="logo-container my-2">
                    <a href="https://www.instagram.com/vec_chennai/" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Insta"/>
                    </a>
                    <a href="https://www.linkedin.com/school/velammal-engineering-college/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                    <a href="https://x.com/VelammalEnggC" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="Twitter"/>
                    </a>
                    <a href="https://www.facebook.com/velammalengineeringcollege" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                </div>
                {/*mt-4 lg:mt-[-240px] lg:ml-[375px]">*/}
                {/*    <iframe className="w-[90%] h-[15%] lg:w-[25vw] lg:h-[30vh] 2xl:h-[20vh] lg:mt-[-15rem]*/}
            </div>
            <div className=" footer-map basis-1/3 h-[45vh] mt-10">
                <iframe className="px-3 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1757.9530530830932!2d80.19081618175407!3d13.149609328912868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e1!3m2!1sen!2sin!4v1723700873764!5m2!1sen!2sin"
                        width="400"
                        height="260"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                ></iframe>
            </div>
            <div className="quick-links basis-1/3 px-4 mt-4">
                <h3 className="text-secd dark:text-drks font-bold text-center md:text-left">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Profile & College Info */}
                    <div>
                        <h4 className="quick-head font-semibold text-lg text-center lg:text-left">Profile</h4>
                        <ul className="grid grid-cols-2 md:block gap-x-4 gap-y-1 text-left">
                            <li><a href="/abt-us">About Us</a></li>
                            <li><a href="/nba">NBA</a></li>
                            <li><a href="/naac">NAAC</a></li>
                            <li><a href="/nirf">NIRF</a></li>
                            <li><a href="/iic">IIC</a></li>
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h4 className="quick-head font-semibold text-lg text-center lg:text-left">Academics</h4>
                        <ul className="grid grid-cols-2 md:block gap-x-4 gap-y-1 text-left">
                            <li><a href="/departments">Departments</a></li>
                            <li><a href="/programs">Programmes</a></li>
                            <li><a href="/library">Library</a></li>
                            <li><a href="/nss">NSS</a></li>
                            <li><a href="/ncc">NCC</a></li>
                            <li><a href="/yrc">YRC</a></li>
                            <li><a href="/sports">Sports</a></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="quick-head font-semibold text-lg text-center lg:text-left">Important</h4>
                        <ul className="grid grid-cols-2 md:block gap-x-4 gap-y-1 text-left">
                            <li><a href="https://vecchennai.org/studentlogin/login.php?done=/studentlogin/" target="_blank">Student Login</a></li>
                            <li><a href="https://vecchennai.org/stafflogin/login.php?done=/stafflogin/" target="_blank">Faculty Login</a></li>
                            <li><a href="https://easycollege.in/vecengg/college/webpayindex.aspx" target="_blank">Fees Payment</a></li>
                            <li><a href="/grievances">Grievances</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>   
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
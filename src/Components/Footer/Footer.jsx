import "./Footer.css";
import logo from "/assets/mylogo.svg";
import {
  FaGithub,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
  FaTiktok,
  FaCopyright,
} from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="Box-column">
          <div className="Box-Row-1">
            <div className="Box-1">
              <img src={logo} alt="Techspardha_Icon" className="ts-logo2" />
            </div>
            <div className="Box-2">
              <div className="Part1">
              <div className="column1">
                <ul className="no-bullet">
                  <li>
                    <a href="#!" className="text-white">
                      Medical
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Emergency
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Memorial
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Charity
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sucess Stories
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      The readME Project
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              <div className="column2">
                <ul className="no-bullet">
                  <li>
                    <a href="#!" className="text-white">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Charity Fundraising
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Event Fundraising
                    </a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="Part2">
              <div className="column3">
                <ul className="no-bullet">
                  <li>
                    <a href="#!" className="text-white">
                      Children Future
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      COVID-19
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Vaccine Demand
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Coronavirus Fund
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Pandemic
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Comman Questions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column4">
                <ul className="no-bullet">
                  <li>
                    <a href="#!" className="text-white">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Inclusion
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Social Impact
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Countries
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <div className="Box-Row-2">
            <div className="ul1">
              <FaCopyright className="icons" />
              <p >2022HumanOfIndia</p>
              <p>Terms</p>
              <p>Privacy(Updated 08/2022)</p>
              <p>Legal</p>
            </div>
            <div className="footer-menu">
              <ul className="ul2" >
                <li>
                  <FaTwitter size={'1.3em'} className="icons" />
                </li>
                <li>
                  {" "}
                  <FaFacebookSquare size={'1.3em'} className="icons" />
                </li>
                <li>
                  {" "}
                  <FaLinkedinIn size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaYoutube size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaTiktok size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaGithub size={'1.3em'} className="icons" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
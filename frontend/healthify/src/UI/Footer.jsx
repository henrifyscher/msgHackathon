import React from "react";
import "../styles/footer.css";
import logo from "../assets/img/extended.png";

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <footer className="footer" data-aos-duration="1100" data-aos="fade-up">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>Healthify</h2>
            </div>
            <p>
              Life is too short to be unhealthy. Take care of your body and it will take care of you ৻(  •̀ ᗜ •́  ৻)
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Company</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Our Programs</a>
              </li>
              <li>
                <a href="#">Meal Plans</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Healthy Living</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Fitness</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Experts</a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>

            <ul className="footer__links">
              <li>
              <a href="/AdminsPage">About Us</a>              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright - {year} .msg hackthon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

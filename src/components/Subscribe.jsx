import React from "react";
import Card from './Card';
import ImgMobile from '../assets/illustration-sign-up-mobile.svg';
import ImgDesktop from '../assets/illustration-sign-up-desktop.svg';
import ListIcon from '../assets/icon-list.svg'
import './Subscribe.css';

const Subscribe = () => {
  return (
    <Card>
      <div className="img_container">
        <img className="img_mobile" src={ImgMobile} alt="" />
        <img className="img_desktop" src={ImgDesktop} alt="" />
      </div>

      <div className="text_box">
        <h1 className="title">Stay Updated!</h1>
        <h2 className="text">Join 60,000+ product managers receiving monthly updates on:</h2>

        <ul className="list_container">
          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">Product discovery and building what matters</p>
          </li>

          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">Measuring to ensure updates are a success</p>
          </li>

          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">And much more! </p>
          </li>
        </ul>

        <form className="subscribe_form">
          <label className="email_label" htmlFor="usermail">Email address</label>

          <input id="usermail" type="email" placeholder="email@company.com" />

          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </Card>
  );
}

export default Subscribe;
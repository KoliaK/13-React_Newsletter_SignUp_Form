import React from "react";
import Card from "./Card";
import IconSuccess from "../assets/icon-success.svg";
import './Success.css';

const Success = () => {
  return(
    <Card>
      <div className="text_box success_container">
        <img className="icon_success" src={IconSuccess} alt="" />
        <h1 className="title">Thanks for subscribing</h1>
        <h2 className="text">A confirmation email has been sent to <span className="email_span">ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</h2>
        <form className="success_form">
          <button>Dismiss message</button>
        </form>
      </div>
    </Card>
  );
}

export default Success;
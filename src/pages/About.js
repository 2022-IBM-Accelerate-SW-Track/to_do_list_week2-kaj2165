import React, { Component } from 'react';
import "./About.css";
import about_pic from "../assets/about_pic.jpeg"; 
export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_pic"
              src={about_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kelly Jones</div>
            <div className="brief_description">
              <p>
                I am a rising junior at Columbia majoring in Computer Science and minoring in Statistics. I am from Alexandria, Virginia and will be doing an internship in LA this summer. I enjoy reading and going for walks.
              </p>
            </div>
          </div>
        </div>
      </div> </p> 
      </div>
    )
  }
}
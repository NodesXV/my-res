import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Chinese & Japanese Restaurant</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Fine dining restaurants are known for delivering the highest level of customer service. Guests expect elegant ambiance, upscale table settings, and a menu with higher price points.</p>
      
      <a href="#menu">
      <button type="button" className="custom__button">Explore Menu</button>
      </a>
      
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;

import React, {useState} from 'react';

import './services.css';
import logo from '../../mangelo-logo-dark.png'

import wordpress from '../../media/1.png';
import shopify from '../../media/2.png';
import wix from '../../media/4.png';
import square from '../../media/5.png';
import elementor from '../../media/13.png';

import react from '../../media/6.png';
import python from '../../media/7.png';
import js from '../../media/8.png';
import vue from '../../media/3.png';

import css from '../../media/14.png';
import html from '../../media/11.png';

import figma from '../../media/12.png';
import flutter from '../../media/10.png';
import creativecloud from '../../media/15.png';

import id from '../../media/9.png';
import ai from '../../media/16.png';

import node from '../../media/17.png';
import php from '../../media/18.png';


import ecommerceLogo from '../../media/e_commerce.png';
import microLogo from '../../media/micro.png';
import customLogo from '../../media/custom.png';
import appLogo from '../../media/app.png';
import uiLogo from '../../media/ui.png';
import backLogo from '../../media/back.png';
import ServiceCard from './ServiceCard';

import bg from '../../media/bg_tmp.jpg';

function Services(){
    

    const eCommerceTitle = 'E-Commerce';
    const eCommerceSubtitle = 'E-commerce & e-shops';
    const eCommerceDescription = 'Reach your clients with a professional and easy to use website. ';
    const eCommerceSkills = [shopify,wix,square,wordpress];

    const customTitle = 'Custom Web';
    const customSubtitle = 'Custom Web design & development';
    const customDescription = 'Want to establish your presence on the web? do you need a portfolio? a landing page? a web app? We got you!';
    const customSkills = [react,python,js,vue];

    const microTitle = 'Microsites';
    const microSubtitle = 'Microsites and Landign Pages';
    const microDescription = 'Looking for a simple landing page?'
    const microSkills = [js,html,css,elementor]

    const backTitle = 'Beck-end dev.';
    const backSubtitle = 'Back-end development';
    const backDescription = 'You want to create a powerfull back end for your services';
    const backSkills = [node,php,python,js]

    const appTitle = 'APP DEV & DESIGN';
    const appSubtitle = 'Web/Mobile App development & Design';
    const appDescription = 'Mobile or Web, we can provide expertise from the design to the development step';
    const appSkills = [react,flutter,figma,creativecloud]

    const uiTitle = 'UI/UX';
    const uiSubtitle = 'UI & UX design';
    const uiDescription = 'Want to get a look and feel of your website before developing it? we can do that!';
    const uiSkills = [ai,id,figma]

    const item = {
        hidden: { scale: 0 },
        visible: {
          scale: 1
        }
      };
    
    const container = {
        visible: {
            transition: {
            delayChildren: 1.1,
            staggerChildren: 0.1
            }
        }
    };

    return(
        <div id='services' className="servicesContainer">
            <div className='serviceTitle'>
                <h1 
                style={{color:'#15433D'}}
                >SERVICES</h1>
            </div>
            <div className='serviceColumns'>
                <div className='descriptionColumn'>
                    <ServiceCard backgroundImg={ecommerceLogo} 
                        title={eCommerceTitle} 
                        subtitle={eCommerceSubtitle}
                        description={eCommerceDescription}
                        icons={eCommerceSkills}></ServiceCard>
                    <ServiceCard backgroundImg={customLogo} 
                        title={customTitle} 
                        subtitle={customSubtitle}
                        description={customDescription}
                        icons={customSkills}></ServiceCard>
                    <ServiceCard backgroundImg={microLogo} 
                        title={microTitle} 
                        subtitle={microSubtitle}
                        description={microDescription}
                        icons={microSkills}></ServiceCard>
                    
                </div>
                <div className='descriptionColumn'>
                    <ServiceCard backgroundImg={backLogo} 
                        title={backTitle} 
                        subtitle={backSubtitle}
                        description={backDescription}
                        icons={backSkills}></ServiceCard>
                    <ServiceCard backgroundImg={appLogo} 
                        title={appTitle} 
                        subtitle={appSubtitle}
                        description={appDescription}
                        icons={appSkills}></ServiceCard>
                    <ServiceCard backgroundImg={uiLogo} 
                        title={uiTitle} 
                        subtitle={uiSubtitle}
                        description={uiDescription}
                        icons={uiSkills}></ServiceCard>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Services
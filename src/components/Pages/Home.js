import React, { Component } from 'react';
import Header from '../Common/Header'
import image from '../assets/img/Home.jpg'


// Re-usable Component
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
class Home extends Component {
    render() {
        return (
            <div>
            <Header
              title="Welcome to our studio"
              subtitle="IT'S NICE TO MEET YOU"
              buttonText="Tell Me More"
              link="/services"
              showButton={true}
              image={image}
             />

             <Services />
             <Portfolio />
            </div>
        );
    }
}

export default Home
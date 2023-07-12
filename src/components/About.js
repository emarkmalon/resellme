import React from 'react'

import laptop from "../assets/abt-img1.png"
import Play from "../assets/play.png"
import Girl from "../assets/about.png"




const About = () => {


  const getCards = [
             {number:'1',img:require('../assets/register.png'), title:'Register', description:'To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.',id:1},
             {number:'2',img:require('../assets/client.png'), title:'Find Client', description:'Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.You take lead to buy the desired domain via ReSellMe for the client upfront.',id:2},
             {number:'3',img:require('../assets/money.png'), title:'Get Money!', description:'You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit.Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru',id:3},
            ]



  

  return (
    <div className='about'>
        <div className='laptop-img'>
            <img src={laptop} alt="laptop" />
            <div className='play'>
               <img  src={Play} alt="play" />
            </div>
        </div>

    <div className='wait'>
        <div className='wait-img'>
            <img src={Girl} alt="girl-img" />
        </div>

        <div className='wait-text'>

            <h2>Wait, What?</h2>
            <p>Resellme allows for you to purchase domains through our platform without 
                paying money upfront. All you need to do is have a client who will pay 
                
                for the domain and you get to keep the profit deducted from the domain 
                purchase price!</p>
                <p>Buying domains through the platforms is <span> SUPER CHEAP </span> </p>

                <button className='btn BLU-btn'>READ MORE</button>
         </div>
        </div> 

       <div className='started' >
         <h2>How To Get Started</h2>
         <div className="started-cards">
             {getCards.map((cards)=>(
                <div className="start-card">
                    <div className="number"> <p>{cards.number}</p> </div>
                    <img src={cards.img} alt="" />
                    <h3>{cards.title}</h3>
                    <p>{cards.description}</p>
                </div>
                ))}
              </div>

              <button className='btn star-btn'>GET STARTED</button>



       </div>




















    </div>
  )
}

export default About
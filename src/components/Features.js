import React from 'react'










const Features = () => {
    const featureItems = [
        {img:require('../assets/rates.png'), title:'Best Purchase Rates', description:'You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors',id:1},
        {img:require('../assets/instant.png'), title:'Instant Payouts', description:'USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? ',id:2},
        {img:require('../assets/date.png'), title:'No Monthly Commitments', description:'As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.',id:3},
        {img:require('../assets/automation.png'), title:'Business Automation', description:'Place your business on autopilot by making use of our plugins. Head over to our a plugins & intergrations panel to get started',id:4},
       ]




  return (
    <div className="features">
        <div className="sticky">
            <h2>Resellme’s Features</h2>
            <p>The Resellme platform has a wide range of features which make it stand out from all competitors. Here we have just a few of those.</p>
        </div>
        <div className="feature">
            {featureItems.map((feature)=>(
                <div className="terms">
                    <div className='icon'> <img src={feature.img} alt="icons" /></div>
                    <div className='icon-text'> 
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    </div>
                </div>
                ))}
          </div>
     </div>
  )
}

export default Features
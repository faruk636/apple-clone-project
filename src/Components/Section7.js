import React from 'react'
import Music from './content/Image/Icons/music classical.png'
import Card from './content/Image/Icons/Apple card.png'

function Section7() {
  return (
    <div>
    <section className="musicclassical-applecard-wrapper">
        <section className="music-classical-wrapper">
            <div className="music-classical-internal-wrapper">
                <div className="music-classical-logo"><img src={Music} alt=""/></div>
                <div className="music-classical-2texts">
                    <div className="music-classical-text1"><p>Introducing the app</p></div>
                    <div className="music-classical-text2"><p>designed for classical</p></div>
                </div>
                <div className="learn-buy">
                    <ul><li><a href="#">Learn more</a></li></ul>
                </div>
            </div>
        </section>
        <section className="apple-card-wrapper">
            <div className="apple-card-internal-wrapper">
                <div className="apple-card-logo"><img src={Card} alt=""/></div>
                <div className="apple-card-2 texts">
                    <div className="apple-card-text-1"><p>Get upto 3% Daily Cash back</p></div>
                    <div className="apple-card-wrapper-text-2"><p>with every purchase</p></div>
                </div>
                <div className="learn-buy">
                    <ul>
                        <li className="learn"><a href="#">Learn more</a></li>
                        <li><a href="#">Apply now</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </section>
    </div>
  )
}

export default Section7
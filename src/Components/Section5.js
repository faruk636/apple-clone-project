import React from 'react'
import Conference from "./content/Image/Icons/conference logo.png"

function Section5() {
  return (
    <div>
            <section className="conference-and-ipad-wrapper">
        <section className="conference-wrapper">
            <div className="conference-internal-wrapper">
            <div className="conference-image">
                <img src={Conference} alt="conference logo"/>
            </div>
            <div className="conference-text-wrapper">
                <div className="conference-text-1"><p>Apple Worldwide Developers Conference</p></div>
                <div className="conference-text-2"><p>Join us online June 5-9</p></div>
            </div>
            <div className="learn-buy"><ul>
                <li><a href="#">Learn more</a></li></ul></div>
            </div>
        </section>
        <section className="ipad-wrapper">
            <div className="ipad-text-1"><h1>iPAD</h1></div>
            <div className="ipad-text-2"><p>Lovable.Drawable.Magical.</p></div>
            <div className="learn-buy"><ul>
                <li className="learn"><a href="#">Learn more</a></li>
                <li><a href="#">Buy</a></li>
            </ul></div>
        </section>
    </section>
    </div>
  )
}

export default Section5
import React from 'react'
import WatchSeries from "./content/Image/Icons/Apple Watch series-8.png"

function Section4() {
  return (
    <div>
            <section className="iphone-watch-wrapper">
            <div className="watch-series-logo">
                <img src={WatchSeries} alt="watch series"/>
            </div>
            <div className="A-healthy-leap">
                <h3>A healthy leap ahead</h3>
            </div>
            <div className="learn-buy">
                <ul>
                    <li className="learn"><a href="#">Learn more</a></li>
                    <li><a href="#">Buy</a></li>
                </ul>
            </div>
    </section>
    </div>
  )
}

export default Section4
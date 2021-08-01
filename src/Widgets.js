import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const news = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>

            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {news("Liverpool tipped to win the league according to star Sadio Mane ", "Top news 50M readers")}
            {news("Covid-19 3rd wave in South Africa","10M reads")}
            {news("Riots in South Africa, Kwa Zulu-Natal","20M reads")}
            
        </div>
    )
}

export default Widgets

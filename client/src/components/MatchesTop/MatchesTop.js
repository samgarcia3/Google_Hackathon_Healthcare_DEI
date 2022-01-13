import React from 'react';
import MatchesTopItem from "../MatchesTopItem/MatchesTopItem";
import "./MatchesTop.scss";
import manulifeIcon from "../../assets/planIcon/Manulife.svg";
import kaiserIcon from "../../assets/planIcon/Kaiser.svg";
import humanaIcon from "../../assets/planIcon/Humana.svg";
import cvsIcon from "../../assets/planIcon/CVS.svg";
import wellcareIcon from "../../assets/planIcon/WellCare.svg";

export default function MatchesTop(props) {
    const temp = [
        {
            name: "Manulife",
            image: manulifeIcon,
            match: "85%"
        },
        {
            name: "Kaiser Health",
            image: kaiserIcon,
            match: "83%"
        },
        {
            name: "Humana",
            image: humanaIcon,
            match: "75%"
        },
        {
            name: "CVS",
            image: cvsIcon,
            match: "72%"
        },
        {
            name: "WellCare",
            image: wellcareIcon,
            match: "70%"
        },
    ];

    return (
        <div className="matches-top">
            <ul>
                {
                    temp.map(company => 
                        <li className="matches-top__list-item" key={company.name} onClick={() => props.redirectToShow(company.name)}>
                            <MatchesTopItem name={company.name} image={company.image} match={company.match} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

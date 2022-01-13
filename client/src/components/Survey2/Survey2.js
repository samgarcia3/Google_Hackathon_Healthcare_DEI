import React from 'react';
import "./Survey2.scss";
import tagIcon from "../../assets/svg/tag.svg";
import leftChevron from "../../assets/svg/left-chevron.svg";
import rightChevron from "../../assets/svg/right-chevron.svg";
import Selector from "../selector/Selector";

export default function Survey2(props) {
    const selections = [
        "AIDS",
        "Anxiety",
        "Cancer",
        "Cerebral Palsy",
        "Diabetes",
        "Hepatitis B, C, D",
        "High Blood Pressure",
        "Low Blood Pressure",
        "PCOD",
        "Schizophrenia",
        "Thyrois",
        "Other"
    ]

    return (
        <main className="survey-2">
            <div>
                <h2 className="survey-2__section-title">Do you have a history of any of the following?</h2>
                <ul className="survey-2__list">
                    {
                        selections.map(selection =>
                            <li key={selection} className="survey-2__selections">
                                <Selector title={selection} />
                            </li>
                        )
                    }
                </ul>
                <div className="survey-2__action">
                    <button type="click" className="survey__button" onClick={props.prevPage}>
                        <img src={leftChevron} alt="" />
                            BACK
                        </button>
                    <div className="survey-2__page-indicator">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle circle__active"></span>
                    </div>
                    <button type="click" className="survey-2__button" onClick={() => props.nextPage("/matches/coverage")}>
                        NEXT
                            <img src={rightChevron} alt="" />
                    </button>
                </div>
            </div>
        </main>
    )
}

import React from 'react';
import tagIcon from "../../assets/svg/tag.svg";
import leftChevron from "../../assets/svg/left-chevron.svg";
import rightChevron from "../../assets/svg/right-chevron.svg";
import Selector from "../selector/Selector";
import "./Survey1.scss";

export default function Survey1(props) {
    const selections = [
        "Dental",
        "Vision Care",
        "Presriptions",
        "Routine Examinations",
        "Additional Coverage (not listed above)"
    ]

    return (
        <section className="survey">
            <form>
                <div>
                    <h2 className="survey__section-title">Are you currently insured?</h2>
                    <label className="survey__radio">
                        <p>Yes</p>
                        <input type="radio" id="radio-is" name="radio-insured" className="survey__radio-item" />
                        <label htmlFor="radio-is" className="radio-styling"></label>
                    </label>
                    <label className="survey__radio">
                        <p>No</p>
                        <input type="radio" id="radio-isnt" name="radio-insured" className="survey__radio-item" />
                        <label htmlFor="radio-isnt" className="radio-styling"></label>
                    </label>
                </div>
                <div>
                    <h2 className="survey__section-title">What coverage are you looking for?</h2>
                    <ul>
                        {
                            selections.map(selection =>
                                <li key={selection} className="survey__selections">
                                    <Selector title={selection} />
                                </li>
                            )
                        }
                    </ul>
                    <div className="survey__action">
                        <button type="click" className="survey__button" onClick={() => props.prevPage("/")}>
                            <img src={leftChevron} alt="" />
                            BACK
                        </button>
                        <div className="survey__page-indicator">
                            <span className="circle"></span>
                            <span className="circle circle__active"></span>
                            <span className="circle"></span>
                        </div>
                        <button type="click" className="survey__button" onClick={props.nextPage}>
                            NEXT
                            <img src={rightChevron} alt="" />
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
import React from 'react';
import MatchesCompareItem from "../MatchesCompareItem/MatchesCompareItem";
import "./MatchesCompare.scss";
import manulifeIcon from "../../assets/planIcon/Manulife.svg";
import kaiserIcon from "../../assets/planIcon/Kaiser.svg";
import humanaIcon from "../../assets/planIcon/Humana.svg";
import cvsIcon from "../../assets/planIcon/CVS.svg";
import wellcareIcon from "../../assets/planIcon/WellCare.svg";

export default function MatchesCompare(props) {
    const temp = [
        {
            name: 'Manulife',
            image: manulifeIcon,
            match: '85%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', ' Maternity', ' Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'Kaiser Health',
            image: kaiserIcon,
            match: '83%',
            plan: 'MedSafe Plus Plan',
            premium: 450,
            deductible: 70,
            coverage: ['ER Visits', ' Maternity', ' Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'Humana',
            image: humanaIcon,
            match: '75%',
            plan: 'Personal Plan',
            premium: 300,
            deductible: 150,
            coverage: ['ER Visits', ' Maternity', ' Checkups'],
            notCovered: 'Travel'
        },
        {
            name: 'CVS',
            image: cvsIcon,
            match: '72%',
            plan: 'Personal Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', ' Maternity', ' Checkups'],
            notCovered: 'Travel'
        }, {
            name: 'WellCase',
            image: wellcareIcon,
            match: '70%',
            plan: 'Individual Plan',
            premium: 500,
            deductible: 50,
            coverage: ['ER Visits', ' Maternity', ' Checkups'],
            notCovered: 'Travel'
        }
    ];

    return (
        <div className="matches-compare">
            <ul>
                {
                    temp.map(company =>
                        <li className="matches-compare__list-item" key={company.name} onClick={() => props.redirectToShow(company.name)}>
                            <MatchesCompareItem
                                name={company.name}
                                image={company.image}
                                match={company.match}
                                plan={company.plan}
                                premium={company.premium}
                                deductible={company.deductible}
                                coverage={company.coverage}
                                notCovered={company.notCovered}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

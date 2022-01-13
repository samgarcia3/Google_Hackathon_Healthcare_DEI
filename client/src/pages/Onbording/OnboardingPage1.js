import './OnboardingPage.scss';
import doctorImage from '../../assets/svg/undraw_medicine_b1ol 1.svg';
import TopNavbar from "../../components/TopNavBar/TopNavBar";

function OnbordingPage1(props) {
    return (
        <>
            <TopNavbar title="Google Health" menuIcon="hamburger" />
            <main className='onboard'>
                <img className='onboard__image' src={doctorImage} alt='doctors' />
                <h1 className='onboard__header'>Insurance for everyone</h1>
                <h2 className='label onboard__label'>Find the best insurance plan for you</h2>
                <button className='onboard__button' onClick={() => props.history.push("/survey")}>GET STARTED</button>
                <div className='onboard__box'>
                    <span className="circle circle__active"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

            </main>
        </>
    );
}

export default OnbordingPage1;
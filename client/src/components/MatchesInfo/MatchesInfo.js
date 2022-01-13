import { Component } from 'react';
import { ReactComponent as ManulifeIcon } from '../../assets/planIcon/Manulife.svg';
import manImage from '../../assets/image/john-alvin-merin.png';
import './MatchesInfo.scss';

class Manulife extends Component {

    state = {
        headerImg: manImage,
        title: 'Manulife',
        subtitle: 'Individual Insurance',
        premium: 500,
        deductible: 50,
        copaymment: 20,
        description: ''
    }

    render() {
        const {onClickHandler} = this.props;
        return (
            <main className='matches-info'>
                <div className='matches-info__upper'>
                    <div className='matches-info__image-container'>
                        <img className='matches-info__image' src={manImage} alt='man' />
                    </div>

                    <div className='matches-info__container'>
                        <ManulifeIcon />
                        <div className='matches-info__box'>
                            <h2 className='matches-info__title'>{this.state.title}</h2>
                            <p className='label'>{this.state.subtitle}</p>
                        </div>
                    </div>

                    <p className='matches-info__price'>Premium: ${this.state.premium}</p>
                    <p className='matches-info__price'>Deductible: ${this.state.deductible}</p>
                    <p className='matches-info__price'><span onClick={onClickHandler} className='bold'>Copayment: </span>${this.state.copaymment}</p>
                </div>
                <p className='matches-info__text'> The policy requires that each covered person select a primary care physician who will be responsible for providing primary medical care and provide guidance for any care from other medical care providers.</p>
                <h2 className='matches-info__header-text'>USE OF IN-NETWORK PROVIDERS</h2>
                <p className='matches-info__text'>In-network providers agree to cover expenses at lower costs. A covered person must pay any <span onClick={onClickHandler} className='bold'>copayment</span>, deductible or coinsurance they owe to the in-network provider`</p>
                <button className='matches-info__button'>+ REGISTER</button>
            </main>
        );
    }
}

export default Manulife;
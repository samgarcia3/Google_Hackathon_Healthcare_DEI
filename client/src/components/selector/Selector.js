import { Component } from 'react';
import { ReactComponent as Select } from '../../assets/svg/select.svg'
import './Selector.scss';

class Selector extends Component {
    state = {
        click: false
    }
    onClick = () =>{
        this.setState({click:!this.state.click});
    }
    render() {
        const clickClass = (this.state.click)?'select__icon--clicked':''
        const { title } = this.props;
        return (
            <div className='select' onClick={this.onClick}>
                <Select className={`select__icon ${clickClass}`} />
                <p className='select__title'>{title}</p>
            </div>
        );
    }
}

export default Selector;
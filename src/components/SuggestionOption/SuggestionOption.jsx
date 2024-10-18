import { useNavigate } from 'react-router-dom';
import chevron from '../../assets/images/chevron.svg'
import heart from '../../assets/images/heart.svg'
import VoteForm from '../VoteForm/VoteForm';
import './SuggestionOption.scss'

function SuggestionOption({ suggestion }) {
    const handleOnClick = () => {
    };

    return (
        <div className='suggestion'>
            <button className='suggestion__vote suggestion__vote--likes'>
                <img className='suggestion__heart' src={heart} />
                {suggestion.votes}
            </button>
            <p className='suggestion__description'>{suggestion.suggestion}</p>
            <button className='suggestion__vote suggestion__vote--action' onClick={handleOnClick}>
                Vote
                <img className='suggestion__chevron' src={chevron} />
            </button>
        </div>
    );
}

export default SuggestionOption;
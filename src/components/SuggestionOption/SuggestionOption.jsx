import chevron from '../../assets/images/chevron.svg'
import heart from '../../assets/images/heart.svg'
import './SuggestionOption.scss'

function SuggestionOption() {
    return (
        <div className='suggestion'>
            <button className='suggestion__vote suggestion__vote--likes'>
                <img className='suggestion__vote-heart' src={heart} />
                784
            </button>
            <p className='suggestion__description'>Renovate children’s hospital</p>
            <button className='suggestion__vote'>
                Vote
                <img className='suggestion__vote-chevron' src={chevron} />
            </button>
        </div>
    );
}

export default SuggestionOption;
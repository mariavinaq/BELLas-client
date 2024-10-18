import logo from '../../assets/images/Bell_logo.svg'
import SuggestionOption from '../SuggestionOption/SuggestionOption';
import './Feed.scss';

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__hero'>
                <img className='feed__logo' src={logo} />
                <h1 className='feed__title'>Vote for change in your community</h1>
                <p className='feed__blurb'>Bell is committed to contributing to a better world, community, and workplace. Join us in this mission by voicing your opinion and voting for the change you want to see most in your community. We’ll then partner with a community organization that can make the idea with the most votes a reality.</p>
            </div>
            <div className='feed__filters'>
                <button className='feed__button'>Top</button>
                <button className='feed__button'>New</button>
                <button className='feed__button'>All</button>
            </div>
            <div className='feed__main'>
                <SuggestionOption />
            </div>
        </div>
    );
}

export default Feed;
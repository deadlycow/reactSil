import './Hero.css';
import { StoreButton, RoundMoreBtn } from '../Buttons/Buttons';
import twoPhones from '../../assets/images/two-phones.svg';

function Hero() {

  return (
    <div className='hero'>
      <h1>Manage All Your <br id='break'/>Money in One App</h1>
      <p>We offer you a new generation of the mobile banking.
        Save, spend & manage money in your pocket.</p>

      <img className='two-phones' src={twoPhones} alt="two-phones" />

      <div className='store-container'>
        <StoreButton src={'apple'} altText={'Apple Store'} />
        <StoreButton src={'google'} altText={'google-img'} />
      </div>

      <div className='more-container'>
        <a href='#'>
          <RoundMoreBtn />
          Discover more</a>
      </div>

    </div>

  );
};

export default Hero;
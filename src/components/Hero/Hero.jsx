import './Hero.css';
import { StoreButton, RoundMoreBtn } from '../Buttons/Buttons';
import twoPhones from '../../assets/images/two-phones.svg';
import { useTheme } from '../Theme/ThemeContext';

function Hero() {

  const { theme } = useTheme();

  return (
    <div className='hero wrapper'>
      <h1>Manage All Your <br id='break'/>Money in One App</h1>
      <p>We offer you a new generation of the mobile banking.
        Save, spend & manage money in your pocket.</p>

      <img className='two-phones' src={twoPhones} alt="two-phones" />

      <div className='store-container'>
        <StoreButton brand={'apple'} altText={'Apple Store'} theme={theme} />
        <StoreButton brand={'google'} altText={'google-img'} theme={theme} />
      </div>

      <div className='more-container'>
        <a href='#'>
          <RoundMoreBtn theme={theme} />
          Discover more</a>
      </div>

    </div>

  );
};

export default Hero;
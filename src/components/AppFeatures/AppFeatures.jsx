import React from 'react';
import './AppFeatures.css';
import phone from '../../assets/images/phone-creditcard.svg';
import icon_f1 from '../../assets/icons/credit-icon.svg';
import icon_f2 from '../../assets/icons/security-icon.svg';
import icon_f3 from '../../assets/icons/statistics-icon.svg';
import icon_f4 from '../../assets/icons/support-icon.svg';
import icon_f5 from '../../assets/icons/wallet-icon.svg';
import icon_f6 from '../../assets/icons/happy-icon.svg';


function AppFeatures() {
  return (
    <section className='section-appfeatures'>
      <h2>App Features</h2>
      <p>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin volutpat mollis egestas.
        Nam luctus facilisis ultrices. Pellentesque
        volutpat ligula est. Mattis fermentum, at nec
        lacus.</p>

      <div className='features-container'>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f2} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Data Security</h5>
            <p>Augue pulvinar justo, fermentum
              fames aliquam accumsan vestibulum
              non.</p>
          </div>
        </div>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f1} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Easy Payments</h5>
            <p>Id mollis consectetur congue egestas
              egestas suspendisse blandit justo.</p>
          </div>
        </div>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f3} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Cost Statistics</h5>
            <p>Mattis urna ultricies non amet, purus
              in auctor non. Odio vulputate ac nibh.</p>
          </div>
        </div>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f4} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Support 24/7</h5>
            <p>A elementum, imperdiet enim, pretium
              etiam facilisi in aenean quam mauris.</p>
          </div>
        </div>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f5} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Regular Cashback</h5>
            <p>Sit facilisis dolor arcu, fermentum
              vestibulum arcu elementum imperdiet
              eleifend.</p>
          </div>
        </div>
        <div className='features-container-item'>
          <div>
            <div className='item-image'>
              <img src={icon_f6} alt="icon" />
            </div>
          </div>
          <div>
            <h5>Top Standards</h5>
            <p>Faucibus cursus maecenas lorem
              cursus nibh. Sociis sit risus id. Sit
              facilisis dolor arcu.</p>
          </div>
        </div>
      </div>

      <div className='phone'>
        <img src={phone} alt="phone with creditcard on top" />
      </div>
    </section>
  )
};

export default AppFeatures;

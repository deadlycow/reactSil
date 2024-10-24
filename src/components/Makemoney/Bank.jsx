import React from 'react';
import './Bank.css';
import arrow from '../../assets/icons/arrow-icon.svg';
import credit from '../../assets/icons/credit-icon.svg';
import wallet from '../../assets/icons/wallet-icon.svg';


function Bank() {
  return (
    <div>
      <h2>Receive payment from <br/> international bank details</h2>
      <div className='bank-flex'>
        <div>
          <div className='bg-icon'>
            <img src={credit}/>
          </div>
          <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        </div>
        <div>
          <div className="bg-icon">
            <img src={wallet} />
          </div>
          <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        </div>
      </div>
      <button className='btn btn-more'>Learn more <img src={arrow}/></button>
    </div>
  )
}

export default Bank;

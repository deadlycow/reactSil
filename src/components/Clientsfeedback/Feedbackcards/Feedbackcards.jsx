import React from 'react';
import './Feedbackcards.css';
import star from '../../../assets/icons/star-filled-icon.svg';
import starEmpty from '../../../assets/icons/star-empty-icon.svg';
import quoteIcon from '../../../assets/icons/quotes-icon.svg';

function Feedbackcards({ users }) {
  return (
    <>
    { users.map(user => (
     <div key={user.id} className='card'>
      <div className="quote-icon"><img src={quoteIcon} /></div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            user.starRating > i ? (<img key={i} src={star} />) : (<img key={i} src={starEmpty} />)
          ))}
        </div>
        <p className="user-text">
          {user.comment}
        </p>
        <div className="user-information">
          <img src={user.avatarUrl} alt='profile-picture' />
          <div className="user-details">
            <h6>{user.author}</h6>
            <p className='proffesion'>{user.jobRole}</p>
          </div>
        </div>
      </div >
      ))};
    </>
  );
};

export default Feedbackcards;

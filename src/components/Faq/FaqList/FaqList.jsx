import React, { useState, useEffect } from 'react'
import './faqlist.css';
import { useTheme } from '../../Theme/ThemeContext';
import chevronLight from '../../../assets/icons/chevron-light.svg';
import chevronDark from '../../../assets/icons/chevron-dark.svg';

const chevrons = {
  light: chevronDark,
  dark: chevronLight,
};

function FaqList() {
  const { theme } = useTheme();
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) {
          throw new Error("No FAQs were found");
        }
        const data = await response.json();
        setFaq(data);
      }
      catch (err) {
        console.log(err.message);
      }
      finally {
        console.log('Klar');
      }
    }

    fetchData();
  }, []);


  const [open, setOpen] = useState(null);

  const toggleAnswer = (id) => {
    setOpen(open === id ? null : id);
  }

  return (

    <>
      {faq.map(item => (
        <div className={`bg-question ${open === item.id ? 'active' : ''}`} key={item.id}>
          <button className='question' onClick={() => toggleAnswer(item.id)}>
            <h3>{item.title}</h3>
           
          
            <span className={`${open === item.id ? 'rotate' : ''}`} >
              <img src={`${open === item.id ? chevrons.light : chevrons[theme]}`}/>
            </span>
          </button>
          <div className={`answer ${open === item.id ? 'open' : ''}`} >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </>
  )
};

export default FaqList;

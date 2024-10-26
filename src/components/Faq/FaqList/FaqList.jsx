import React, { useState, useEffect } from 'react'
import './faqlist.css';

function FaqList() {
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

  const toggleAnswer = (id) =>{
    setOpen(open === id ? null : id);
  }

  return (

    <>
      {faq.map(item => (
        <div key={item.id}>
          <button className='question' onClick={() => toggleAnswer(item.id)}>
            <h3>{item.title}</h3>
            <span>X</span>
          </button>
          {open === item.id && <div className='answer'>
            <p>{item.content}</p>
          </div>}
        </div>
      ))}
    </>
  )
};

export default FaqList;

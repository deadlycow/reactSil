import './HowItWorks.css';
import containerInlay from '../../assets/images/changePhone/container-inlay.svg';
import inlay1 from '../../assets/images/changePhone/inlay1.svg';

function HowItWorks() {
  return (
    <section className='section-howitworks'>
      <h3>How Does It Work?</h3>
      <div className='howitworks-image-container'>
        <img src={containerInlay} alt="" />
        <img src={inlay1} alt="" />
      </div>
      <h5>Transfer to people from <br /> your contact list</h5>
      <p>
        Proin volutpat mollis egestas. Nam luctus facilisis
        ultrices. Pellentesque volutpat ligula est. Mattis
        fermentum, at nec lacus.
      </p>
    </section>
  )
}

export default HowItWorks;

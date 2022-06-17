import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import HomeSection from './HomeSection';

const ContactPopup = () => {

  const formId = 'vxw46IwF';
  const formSparkUrl = `http://submit-form.com/${formId}`;

  return (

    <div className='contactContainer'>
      <h2 className='contactHeader'>Contact me!📨</h2>
      <p className='myemail'>💌: paytonfronczak@gmail</p>
      <div class="form-group col-md-7"> 
      <form action="https://submit-form.com/vxw46IwF">

        <label for="name"></label>
        <input class="form-control" type="text" id="name" name="name" placeholder="name" required="required" data-error="Please enter your first name!" />

        <label for="email"></label>
        <input class="form-control" type="email" id="email" name="email" placeholder="email" required="required" data-error="Please enter a valid email!"/>

        <label for="message"></label>
        <textarea class="form-control"
          id="message"
          name="message"
          placeholder="message"
          required="required"
        ></textarea>
        <button class="btn btn-secondary" type="submit">Send</button>
      </form>

      {/* <div class="form-group col-md-6">
        <label type="text" readonly class="form-control-plaintext">Email: paytonfronczak@gmail.com</label>

        <label type="text" readonly class="form-control-plaintext">Phone: paytonfronczak@gmail.com</label> */}


        <Link className='closeButton' style={{ textDecoration: 'none' }} to="/" onClick={e => {
          let home = <HomeSection />;
          home && home.scrollIntoView();
        }}
        >
          <button class="btn btn-dark"> Close </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactPopup;
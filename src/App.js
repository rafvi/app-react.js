import React from 'react';
import './App.css';

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function AppHeader() {
  return (
    <div>
      <nav>
        <li><img src="./image/contact.png" className="logo" alt="logo" /></li>
        <li>Lista Kontaktów</li>
        <li><button>Dodaj</button></li>
      </nav>
    </div>
  );
}

function GetAvatar({ login }) {
  const imgUrl = `./image/${login}.png`;
  if (validateEmail(login)) {
    return (
      <img src="https://lh3.googleusercontent.com/-ShcnTlMQ_Uw/UlXHDYiwjOI/AAAAAAAAAKA/s3uLVijoTp0nqQNcrF2fUJGEyT90OXPmwCEwYBhgLKs4DAMBZVoAXYLl4PiFKeKdy9t3mkDbkob19Q40YFDg1Xl9uC93wl6RX7ayaDUn2V5kDHMkNhy2gkP8Z2c0hKed1mL-XSx4uz7HKa9o8uW3e8DKh7GMPw7GRd5hivArZTucJFD_FTyeouq8kp--6x1ZNK_yycFisJ_rOvutNStSz8RZjJu1-iJnLyQ70pKTwfuaTFxc1kZ4vGrNVNJ0KeOlr5eJy81CcgoDOUeibewUe3pZ_dJq_ZLdAX6-jCaEnqtXm3L_L5bwIQ2Sjm1ZRQuzK7cAGHftJv69p1UIlYRd3QlBU3EDzbtdfopOsJ4z3t-XCqcM-h_wdO7AwmSeuRWykpdm_rk42rAmCfJaN_hAKRQQ3sN4CTqoRzsEmTXGryFXccUSib2QZOhwwDz9sMJ_0pft47qiOF3joM8bsyJim-DoISD_9hZ3FPA6ewaEvGfnyL_aICNQUmQa2dSIpmI7iGcKzTd4Twq21EFBjwDxw-o3EbNc-uZ5DAKC7j4L6gVziseo_fCy5KQxWmr0SCKM3z8Pm4J0Goc9fomhLPNB683rLE9c5NH-SieL09kPyCovND4LIrwMah_9k4R6cOLc7LIuv7Bkt7JtTdALApSMaMMnPjvQF/w140-h140-p/155241091.jpg" className="gravatar" alt="logo" />
    );
  } else {
    return (
      <img src={imgUrl} className="img-item" alt="login" />
    );
  }
}

function ContactItem({ login, name, description }) {
  return (
    <li className="item">
      <GetAvatar login={login} />
      <div className="content">
        <h4 className="name">{name}</h4>
        <div className="description">{description}</div>
      </div>
    </li>
  );
}
function ContactList() {
  return (
    <div>
      <ContactItem
        login="raffi.ssj@gmail.com"
        name="Raffi"
        description="SSJ"
      />
      <ContactItem
        login="contact-2"
        name="Dr. Strange"
        description="Stephen Strange"
      />
      <ContactItem
        login="contact-3"
        name="Spider-Man"
        description="Peter Benjamin Parker"
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContactList />
    </div>
  );
}

export default App;

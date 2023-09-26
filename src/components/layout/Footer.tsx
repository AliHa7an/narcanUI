import React from 'react';
import EmergentLogo from '../assets/images/emergent-logo.png';
import CheckMark from '../assets/images/check-mark.png';
import Emergent from '../assets/images/emergent-white-words.png';

const AboveFooter = () => {
  return (
    <div className="responsive-div">
      <p>
        For further information, or if you have any questions about a new or
        previous order, please contact <br />
        Emergent customer service at 1-844-898-0657 or
        customerservicecanada@ebsi.com.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-card">
      <AboveFooter />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="footer-left-content">
          <div className="first-footer-line">
            <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ textDecoration: 'underline' }}>
              General Terms and Conditions of Sale
            </span>
          </div>
          <br />
          <img
            src={EmergentLogo}
            style={{ height: 140, minWidth: 300, marginBottom: 10 }}
            alt="Icon Description"
            className="icon mb-5 footer-emergent-logo-appear"
          />
          <div className="other-footer-text mt-2 mb-2">
            Distributed by Emergent BioSolutions Canada Inc. Mississauga, ON L5N
            6M1
          </div>
          <div className="superscript text-alignment">
            <span className="footer-text-opacity">
              © 2023 Emergent BioSolutions Canada Inc., a wholly owned
              subsidiary of Emergent BioSolutions Inc.
              <br />
              <br />
              NARCAN® is a registered trademark of Emergent Operations Ireland
              Limited, which is a subsidiary of Emergent BioSolutions Inc.
              <br /> <br />
              Emergent® and any and all Emergent BioSolutions Inc. brands,
              products, services and feature names, logos and slogans are
              trademarks <br /> or registered trademarks of Emergent
              BioSolutions Inc. or its subsidiaries in the United States or
              other countries.
            </span>
            <span className="footer-emergent-logo-small-screen">
              <div className="mb-3 footer-text-opacity">
                PP-NAR4-CA-00164_08-2023 EN
              </div>
              <br /> <br />
              <img
                src={Emergent}
                style={{
                  height: 21,
                  minWidth: 177,
                  marginBottom: 10,
                }}
                alt="Icon Description"
                className="icon mb-5"
              />
            </span>
          </div>
        </div>

        <div className="footer-right-content">
          <img
            src={Emergent}
            style={{ height: 21, minWidth: 177, marginBottom: 10 }}
            alt="Icon Description"
            className="icon mb-5"
          />
          <img
            src={CheckMark}
            style={{ height: 41, minWidth: 53, marginBottom: 10 }}
            alt="Icon Description"
            className="icon mb-5 ml-3"
          />
          <div
            className="superscript mb-5 footer-text-opacity"
            style={{ marginTop: '35%', marginLeft: '25%' }}
          >
            PP-NAR4-CA-00164_08-2023 EN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

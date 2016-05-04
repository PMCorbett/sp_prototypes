import React, { PropTypes } from 'react';
import Translate from 'Translate';

const Footer = ({ navigation }) => {
  const {
    metadata: {
      support_email,
      website_url,
      website_link_text,
      copyright_agencies,
      copyright_period
    }
  } = navigation;

  return (
    <footer className="footer-navigation" data-role="footer">
      <div id="links">
        <div className="container">
          <div className="navbar">
            <ul className="nav pull-left" data-role="footer-links">
              <li>
                <a href={`mailto:${support_email}`} data-role="link-support">
                  <Translate id="support" />
                </a>
              </li>
              <li>
                <a href="/terms" data-role="link-terms">
                  <Translate id="terms" />
                </a>
              </li>
              <li>
                <a target="_blank" href={website_url} data-role="link-website">
                  {website_link_text}
                </a>
              </li>
            </ul>
            <ul className="nav pull-right" data-role="footer-copyright">
              <li>
                <Translate
                  id="meta.copyright"
                  values={{
                    agencies: copyright_agencies,
                    period: copyright_period
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  navigation: PropTypes.shape({
    metadata: PropTypes.shape({
      support_email: PropTypes.string.isRequired,
      website_url: PropTypes.string.isRequired,
      website_link_text: PropTypes.string.isRequired,
      copyright_agencies: PropTypes.string.isRequired,
      copyright_period: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Footer;

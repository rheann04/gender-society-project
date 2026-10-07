import React from 'react';

const ContactDetails = ({ agency }) => (
  <div className="contact-details">
    <div>
      <strong>Phone:</strong>
      {agency.phones.length > 0 ? (
        <ul className="contact-list">
          {agency.phones.map(phone => (
            <li key={phone.href}>
              <span>{phone.label}: </span>
              <a className="contact-link" href={phone.href} aria-label={`Call ${agency.name}`}>
                {phone.display}
              </a>
            </li>
          ))}
        </ul>
      ) : <span className="to-verify"> [TO VERIFY]</span>}
    </div>

    <div>
      <strong>Email:</strong>
      {agency.emails.length > 0 ? (
        <ul className="contact-list">
          {agency.emails.map(email => (
            <li key={email.href}>
              <a className="contact-link" href={email.href} aria-label={`Email ${agency.name}`}>
                {email.display}
              </a>
            </li>
          ))}
        </ul>
      ) : <span className="to-verify"> [TO VERIFY]</span>}
    </div>

    <div>
      <strong>Official website:</strong>{' '}
      {agency.website ? (
        <a
          className="contact-link"
          href={agency.website.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the official ${agency.name} website (opens in a new tab)`}
        >
          {agency.website.display}
        </a>
      ) : <span className="to-verify">[TO VERIFY]</span>}
    </div>
  </div>
);

export default ContactDetails;

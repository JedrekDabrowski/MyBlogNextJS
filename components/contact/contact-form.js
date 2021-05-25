import { useState, useEffect } from 'react';
import classess from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    setRequestStatus('pending');

    try {
      await sendContactData(newMessage);
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }
  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message send',
      message: 'Thanks for feedback!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classess.contact}>
      <h1>How can I help you?</h1>
      <form className={classess.form} onSubmit={sendMessageHandler}>
        <div className={classess.controls}>
          <div className={classess.control}>
            <label htmlFor='email'>Your email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classess.control}>
            <label htmlFor='name'>Your name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classess.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classess.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;

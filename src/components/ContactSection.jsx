// src/components/ContactSection.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <StyledContact>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding: 50px 20px;
  background: #f5f5f5;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

    input, textarea {
      padding: 15px;
      font-size: 16px;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      background: #ff7e5f;
      color: white;
      padding: 15px;
      border: none;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        background: #f95f37;
      }
    }
  }
`;

export default ContactSection;

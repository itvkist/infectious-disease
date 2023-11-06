import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const Button = styled.button`
    background-color: white;
    color: grey;
    font-size: 14px;
    padding: 5px 20px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`;


  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
    </div>
  );
}

export default LanguageSwitcher;
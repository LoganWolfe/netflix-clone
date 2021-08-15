import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqContainer } from '../containers/faq';
import { HeaderContainer } from '../containers/header';

export default function Signin() {
    return (
        <>
          <HeaderContainer />
          <JumbotronContainer />
          <FaqContainer />
          <FooterContainer />
        </>
      );
}
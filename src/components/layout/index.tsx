import React, { Fragment } from 'react';
import { ChildrenProps } from '../../interfaces/children-props';
import Header from '../header';
import Content from '../content';
import Footer from '../footer';

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment key="layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

export default Layout;

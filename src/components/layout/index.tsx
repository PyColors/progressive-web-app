import React, { Fragment } from 'react';
import { ChildrenProps } from '../../interfaces/children-props';
import Content from '../content';
import Footer from '../footer';

interface LayoutProps extends ChildrenProps {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment key="layout">
      <section id="app">
        <Content>{children}</Content>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Layout;

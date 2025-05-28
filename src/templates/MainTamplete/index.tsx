import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import React from 'react';
import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';

type MainTamplateProps = {
  children: React.ReactNode;
};

export function MainTamplate({ children }: MainTamplateProps) {
  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </div>
  );
}

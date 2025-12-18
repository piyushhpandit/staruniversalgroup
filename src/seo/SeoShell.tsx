import React from 'react';
import { Seo, type SeoProps } from './Seo';

type Props = SeoProps & {
  children: React.ReactNode;
};

export default function SeoShell({ children, ...seo }: Props) {
  return (
    <>
      <Seo {...seo} />
      {children}
    </>
  );
}



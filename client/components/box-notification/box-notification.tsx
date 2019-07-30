import React from 'react';
import { FunctionComponent, ReactElement } from 'react';

interface Props {
  message: string;
}

const BoxNotification: FunctionComponent<Props> = ({ message }: Props): ReactElement => (
  <section className="notification">
    <article>{message}</article>
  </section>
);

export default BoxNotification;

import {Card} from '@ui-kitten/components';
import React from 'react';
import { ICard } from '../../interfaces/ICard';

const SofkaCard = ({children, style, header, footer}: ICard) => {
  return <Card style={style} header={header} footer={footer}>{children}</Card>;
};

export default SofkaCard;

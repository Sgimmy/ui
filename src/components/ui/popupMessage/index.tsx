import React from 'react';
import styled from 'styled-components';
import { P } from '../Typography';
import { PopupMessageType } from '../../../constants/enum';
import { motion } from 'framer-motion';

interface PopupMessageProps {
  text?: string;
  type?: PopupMessageType;
}

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const PopupMessage: React.FC<PopupMessageProps> = ({ text }) => (
  <Container
    variants={container}
    initial="hidden"
    animate="show"
    whileHover={{ scale: 1.4 }}
  >
    <P>{text}</P>
  </Container>
);

export default PopupMessage;

const Container = styled(motion.div)`
  z-index: 100;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 32px 40px;
  min-width: 260px;
  height: 56px;
  padding: 16px 24px;
  align-items: center;
  background-color: ${props => props.theme.colors.background.lightGrey};
  color: ${props => props.theme.colors.text.black};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

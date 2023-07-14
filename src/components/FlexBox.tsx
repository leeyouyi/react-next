import React from 'react';
import { Box, type BoxProps, styled } from '@mui/material';

const StyledBox = styled(Box)((props) => {
  const { style } = props;
  return { ...style };
});

export enum EjustifyContent {
  center = 'center',
  start = 'flex-start',
  end = 'flex-end',
  around = 'space-around',
  between = 'space-between',
}

interface FlexBoxProps extends BoxProps {
  justifyContent?: EjustifyContent;
}

const FlexBox = (props: FlexBoxProps): JSX.Element => {
  const {
    justifyContent = EjustifyContent.start,
    style: flexBoxStyle,
    ...other
  } = props;

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent,
    ...flexBoxStyle,
  };
  return <StyledBox {...{ style, ...other }} />;
};

export default FlexBox;

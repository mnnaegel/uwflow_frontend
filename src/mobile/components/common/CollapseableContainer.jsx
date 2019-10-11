import React, { useState } from 'react';
import {
  ContainerWrapper,
  HeaderWrapper,
  HeaderTitleBox,
  HeaderTitleText,
  HeaderChevronBox,
  ContentWrapper,
} from './styles/CollapseableContainer';
import { ChevronDown } from 'react-feather';

export const HEADER_HEIGHT = 30;

const CollapseableContainer = ({
  title,
  renderContent,
  isInitiallyOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  return (
    <ContainerWrapper>
      <HeaderWrapper>
        <HeaderTitleBox>
          <HeaderTitleText>{title}</HeaderTitleText>
        </HeaderTitleBox>
        <HeaderChevronBox onClick={() => setIsOpen(!isOpen)}>
          <ChevronDown />
        </HeaderChevronBox>
      </HeaderWrapper>
      {isOpen && <ContentWrapper>{renderContent()}</ContentWrapper>}
    </ContainerWrapper>
  );
};

export default CollapseableContainer;

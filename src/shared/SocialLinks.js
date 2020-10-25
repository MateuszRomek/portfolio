import styled from 'styled-components'
export const SocialContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: ${({ isMobileNav }) => (isMobileNav ? '50%' : '50px')};
  transform: ${({ isMobileNav }) =>
    isMobileNav ? 'translateX(-50%)' : 'translateX(0)'};
  display: flex;
  flex-direction: ${({ isMobileNav }) => (isMobileNav ? 'row' : 'column')};
  justify-content: center;
  padding: 10px;
  z-index: ${({ isMobileNav }) => (isMobileNav ? '11' : '0')};
  & > a {
    margin: ${({ isMobileNav }) => (isMobileNav ? '0 15px 0 0' : '0 0 15px 0')};
  }

  @media (max-width: 805px) {
    display: ${({ isMobileNav }) => (isMobileNav ? 'flex' : 'none')};
  }
`
export const StyledIcon = styled.a`
  transition: transform 0.2s ease;
  & svg {
    fill: ${({ theme }) => theme.colors.buttonBg};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 50px 123px;
    

    > h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      margin-left: 123px;

    }
  }

`;

export const Button = styled(Link)`
    width: 207px;
    height: 48px;
    border-radius: 8px;
    border: none;
    margin-right: 106px;

    display: flex;
    justify-content: center;
    align-items: center;


    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.MOVIEINFO_BUTTON_TEXT};

      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    
`;

export const Content = styled.div`
  width: 100%;
  height: 716px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px 0px 0px;
  gap: 24px;

`;

export const TagGroup = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;

`;

export const FilmInfo = styled.div`
  padding: 32px;
  margin: 0 132px;
  gap: 15px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MYMOVIESCARDS};

  overflow-y: auto;
`;

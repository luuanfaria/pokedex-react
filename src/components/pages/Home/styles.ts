/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import styled, { css } from 'styled-components';
import colorType from '../../../assets/styles/theme/colorType';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #FFF;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
    outline: 0;
    padding: 0 16px;
    appearance: none;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex-grow: 1;
  width: 140px;
  background-color: #FFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-right: 16px;

  :hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2ms ease-in-out
  }

  .info {

    span {
      display: block;
      font-size: 14px;
      color: #333;
    }

    .pokemon-name {
      display: flex;
      align-items: center;
      margin: 8px 0;
    }

  }
`;

export const Type = styled.small`
  ${(props) => {
    switch (props.color) {
      case 'Grass':
        return css`
          background: ${colorType.background.grass};
        `;
      case 'Poison':
        return css`
          background: ${colorType.background.poison};
        `;
      case 'Fire':
        return css`
          background: ${colorType.background.fire};
        `;
      case 'Flying':
        return css`
          background: ${colorType.background.flying};
        `;
      case 'Water':
        return css`
          background: ${colorType.background.water};
        `;
      case 'Bug':
        return css`
          background: ${colorType.background.bug};
        `;  
      case 'Normal':
        return css`
          background: ${colorType.background.normal};
        `;
      case 'Electric':
        return css`
          background: ${colorType.background.electric};
        `;
      case 'Ground':
        return css`
          background: ${colorType.background.ground};
        `;
      case 'Fighting':
        return css`
          background: ${colorType.background.fighting};
        `;   
      case 'Psychic':
        return css`
          background: ${colorType.background.psychic};
        `; 
      case 'Rock':
        return css`
          background: ${colorType.background.rock};
        `;
      case 'Ice':
        return css`
          background: ${colorType.background.ice};
        `;
      case 'Dragon':
        return css`
          background: ${colorType.background.dragon};
        `;      
      default:
        return css`
          background: #333;
        `;    
    }
  }}
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px;
  border-radius: 4px;
  margin-right: 8px;
`;
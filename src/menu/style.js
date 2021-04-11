import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: absolute;
    top: 60px;
    bottom: 0;
    right: 0;
    padding-right: 4px;
    padding-bottom: 5px;
    text-align: right;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
    text-shadow: rgba(255,255,255,.5)1px 1px 3px;
`

export const MenuLink = styled.span`
    display: inline-block;
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 4px;
    border-bottom: 1px solid rgba(0,0,0,0);
    text-decoration: none;
    color: #57595a;
`
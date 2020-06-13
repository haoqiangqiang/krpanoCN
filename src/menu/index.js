import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MenuWrapper,
    MenuLink,
 } from './style';

function Menu() {
    return (
        <MenuWrapper>
            <Link to='/news/'>
            <MenuLink>新闻</MenuLink>
            </Link>
            <Link to='/examples/'>
            <MenuLink>案例</MenuLink>
            </Link>
            <Link to='/docu/xml'>
            <MenuLink>文档</MenuLink>
            </Link>
            <Link to='/download/'>
                <MenuLink>下载</MenuLink>
            </Link>
            <Link to='/buy/'>
                <MenuLink>购买</MenuLink>
            </Link>
            <MenuLink href="https://krpano.com/forum/wbb/index.php?l=2">论坛</MenuLink>
            <Link to='/contact/'>
                <MenuLink>联系</MenuLink>
            </Link>
        </MenuWrapper>
    );
}

export default Menu;
import React from "react";
import { Link } from "react-router-dom";
import { NavBox, Nav } from './styled'

const Navigation = () => {
    return (
        <NavBox>
            <Nav>
                <Link to='/news'>新闻</Link>
            </Nav>
            <Nav>
                <Link to='/examples'>案例</Link>
            </Nav>
            <Nav>
                <Link to='/documentation'>文档</Link>
            </Nav>
            <Nav>
                <Link to='/download'>下载</Link>
            </Nav>
            <Nav>
                <Link to='/buy'>购买</Link>
            </Nav>
            <Nav>
                <Link to='/forum'>论坛</Link>
            </Nav>
            <Nav>
                <Link to='/contact'>联系</Link>
            </Nav>
        </NavBox>
    )
}

export default Navigation
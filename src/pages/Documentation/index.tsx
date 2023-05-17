import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";
import Main from "../../components/Main";
import MenuBlock from "../../components/Menu";
import { documentationMenu } from "../../service/app/documentation";

export default () => {
    const Menu = () => {
        return (
            <MenuBlock menu={documentationMenu}></MenuBlock>
        )
    }
    const Content = () => {
        return (
            <Outlet></Outlet>
        )
    }
    return (
        <Layout>
            <Main leftMenu={Menu()} content={Content()}></Main>
        </Layout>
    )
}
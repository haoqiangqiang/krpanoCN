import React from "react";
import Layout from "../../components/Layout";
import Main from "../../components/Main";
import Title from "../../components/Title";

export default () => {
    const Menu = () => {
        return (
            <>    
            </>
        )
    }
    const Content = () => {
        return (
            <>
                <Title level={1}>krpano 全景查看器</Title>
            </>
        )
    }
    const Describe = () => {
        
    }
    return (
        <Layout>
            <Main leftMenu={Menu()} content={Content()}></Main>
        </Layout>
    )
}
import React from "react";
import Content from "../../../components/Content";
import Title from "../../../components/Title";
import Code from "../../../components/Code";
import LinkBox from "../../../components/Link";
export default () => {
    const script = `<script src="krpano.js"></script>`
    return (
        <>
            <Content id="top">
                <Title level={1}>嵌入到 HTML 中</Title>
                <Content>为了将 krpano 查看器嵌入到 HTML 页面中，需要包含<Code>krpano.js</Code>脚本文件（文件名可能不同）并调用<Code>embedpano（）</Code>函数。</Content>
            </Content>

            <Content>
                <Content>文档目录：</Content>
                <ul>
                    <li><LinkBox to="/documation/embedding#including">脚本内容</LinkBox></li>
                    <li><LinkBox to="/documation/embedding#syntax">嵌入查看器</LinkBox></li>
                    <li><LinkBox to="/documation/embedding#parameters">嵌入参数</LinkBox></li>
                    <li><LinkBox to="/documation/embedding#removing">删除查看器</LinkBox></li>
                </ul>
            </Content>

            <Content id="including">
                <Title level={2}>脚本内容</Title>
                <Content>krpano 脚本文件可以在 html 页面中的任何地方引入（须在 <Code>embedpano（）</Code>调用之前引入）。</Content>
                <Content>
                    <Code code={true}>{`<script src="krpano.js"></script>`}</Code>
                </Content>
                <Content>注意事项：</Content>
                <Content>
                    <ul>
                        <li>'krpano.js' 文件可以重命名。例如：当使用 MAKE PANO 或者 MAKE VTOUR droplets 时，脚本文件通常被重命名为'pano.js'或者'tour.js'。</li>
                        <li>文件本身包含 krpano 查看器，注册时还包含着许可证信息。</li>
                        <li>通常，所有全景图和游览图的文件始终相同（除非应用了自定义保护设置）。这意味着多个全景图和游览图可以使用和分享同一个文件<br/>
                            当托管多个全景图和游览图时，这甚至是一个推荐方式，让 krpano 查看器和插件文件使用一个全局的文件，所有的其他项目来引用他们，这能够使更新版本变得更加轻松。
                        </li>
                    </ul>
                </Content>
            </Content>

            <Content id="syntax">
                <Title level={2}>嵌入查看器</Title>
                <Content>嵌入查看器</Content>
            </Content>
        </>
    )
}
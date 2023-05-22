import React, { useEffect } from "react";
import Content from "../../../components/Content";
import Title from "../../../components/Title";
import Code from "../../../components/Code";
import LinkBox from "../../../components/Link";
import Function from "../../../components/Function";
import { useSearchParams } from "react-router-dom";
import Note from "../../../components/Note";
export default () => {
    const [search, setSearch] = useSearchParams();
    const id = search.get('id')
    useEffect(() => {
        if (id) {
            const viewDom = document.getElementById(id);
            viewDom && viewDom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    })
    return (
        <>
            <Content id="top">
                <Title level={1}>嵌入到 HTML 中</Title>
                <Content>为了将 krpano 查看器嵌入到 HTML 页面中，需要包含<Code>krpano.js</Code>脚本文件（文件名可能不同）并调用<Code>embedpano（）</Code>函数。</Content>
            </Content>

            <Content>
                <Content>文档目录：</Content>
                <ul>
                    <li><LinkBox to="/documentation/embedding?id=including">脚本内容</LinkBox></li>
                    <li><LinkBox to="/documentation/embedding?id=syntax">嵌入查看器</LinkBox></li>
                    <li><LinkBox to="/documentation/embedding?id=parameters">嵌入参数</LinkBox></li>
                    <li><LinkBox to="/documentation/embedding?id=removing">删除查看器</LinkBox></li>
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
                        <li>'krpano.js' 文件可以重命名。例如：当使用 MAKE PANO 或者 MAKE VTOUR droplets 时，脚本文件通常被重命名为 'pano.js' 或者 'tour.js'。</li>
                        <li>文件本身包含 krpano 查看器，注册时还包含着许可证信息。</li>
                        <li>通常，所有全景图和游览图的文件始终相同（除非应用了自定义保护设置）。这意味着多个全景图和游览图可以使用和分享同一个文件<br />
                            当托管多个全景图和游览图时，这甚至是一个推荐方式，让 krpano 查看器和插件文件使用一个全局的文件，所有的其他项目来引用他们，这能够使更新版本变得更加轻松。
                        </li>
                    </ul>
                </Content>
            </Content>

            <Content id="syntax">
                <Title level={2}>嵌入查看器</Title>
                <Content>在 html 页面的任意位置创建一个{`<div>`}元素来嵌入查看器，给这个 div 元素命名一个唯一的 'id' 名称，并通过 css 样式来设定大小。</Content>
                <Code code={true}>{`<div id='pano' style='width: 100%; height: 100%;'></div>`}</Code>
                <Content>创建{`<div>`}元素之后，再创建一个含有嵌入脚本代码的{`<script>`}元素，对于嵌入本身，有一个全局的 <LinkBox to="/documentation/embedding?id=embedpano">{`embedpano（）`}</LinkBox>函数：</Content>
                <Function id="embedpano" header={<Content><LinkBox to="/documentation/embedding?id=embedpano">embedpano</LinkBox><span>{`({...`}<LinkBox to="/documentation/embedding?id=parameters">嵌入参数</LinkBox>{`...})`}</span></Content>}>
                    <Content>
                        <ul>
                            <li>embedpano（）函数需要一个带有<LinkBox to="/documentation/embedding?id=parameters">嵌入参数</LinkBox>的对象。</li>
                            <li>
                                <Content>完整示例</Content>
                                <Code code={true}>
                                    <Content>{`<script src='krpano.js'></script>`}</Content>
                                    <Content>{`<div id='pano' style='width: 600px; height: 400px;'></div>`}</Content>
                                    <Content>{`<script>\nembedpano({xml: 'pano.xml', target: 'pano'})</script>`}</Content>
                                </Code>
                            </li>
                        </ul>
                    </Content>
                </Function>
            </Content>

            <Content id="parameters">
                <Title level={2}>嵌入参数</Title>
                <Content>embedpano（）函数需要一个 javascript 对象作为参数，该对象可以通过 参数名: 值 （key: 'value'）的形式来传递所有的参数（以随机顺序）。几乎所有的参数（target 参数除外）都是可选的，当没有进行配置时，将使用默认值。</Content>
                <Content>参数提供以下配置项：</Content>
                <Function id="xml" header={<Content><LinkBox to="/documentation/embedding?id=xml">xml</LinkBox><span>{`: 'krpano.xml'`}</span></Content>}>
                    <Content>
                        <ul>
                            <li>启动 xml 文件的名称和路径（相对于 html 文件）。</li>
                            <li>如果启动时不需要加载任何的 xml 文件，则不要设置该值或者使用<Code>null</Code>。</li>
                            <li>向后兼容：如果没有设置项但是设置了 swf 文件的路径，则需要使用 swf 文件的文件名（例如：设置 'krpano.swf' 为 'krpano.swf'）。</li>
                        </ul>
                    </Content>
                </Function>
                <Function id="target" header={<Content><LinkBox to="/documentation/embedding?id=target">target</LinkBox><span>{`: '...'`}</span></Content>}>
                    <ul>
                        <li>设置应该嵌入全景图查看器的目标 html 元素。</li>
                        <li>可以是 html 元素的 id 或者 html 元素本身。</li>
                        <li>当没有设置 target 或者找不到相应 id 的 html 元素时，将会出现 javascript alert（） 错误。</li>
                    </ul>
                </Function>
                <Function id="bgcolor" header={<Content><LinkBox to="/documentation/embedding?id=bgcolor">bgcolor</LinkBox><span>{`: '#000000'`}</span></Content>}>
                    <ul>
                        <li>查看器的背景颜色（html 颜色格式）。</li>
                        <li>默认背景色为<Code>#000000</Code>（黑色）。</li>
                        <li>可选值<Code>transparent</Code>可用于查看全景图背后的内容（网站，<LinkBox to="/docimentation/xml#layerParent">bglayer</LinkBox>层）</li>
                    </ul>
                    <Content><Note>注意：当使用透明背景时，仅支持正常的交叉淡入淡出<LinkBox to="/docimentation/actions#loadpanoBlend">全景混合</LinkBox></Note></Content>
                </Function>
                <Function id="vars" header={<Content><LinkBox to="/documentation/embedding?id=vars">vars</LinkBox><span>{`: {...}`}</span></Content>}>
                    <ul>
                        <li>传递携带 krpano <Note>变量：值</Note>对的 javascript 对象</li>
                        <li>变量将在 xml 文件加载和解析之后设置。<br />因此，这些变量可以用于添加新设置或者覆盖 xml 中已经定义好的设置。</li>
                        <li>
                            示例：<br />
                            <Code code={true}>
                                <Content>{`var settings = {};`}</Content>
                                <Content>{`settings["onstart"] = "trace('on start...')";`}</Content>
                                <Content>{`settings["view.hlookat"] = 30;`}</Content>
                                <Content>{`embedpano({xml:"pano.xml", target:"pano", vars:settings});`}</Content>
                            </Code>
                        </li>
                    </ul>
                </Function>
            </Content>
        </>
    )
}
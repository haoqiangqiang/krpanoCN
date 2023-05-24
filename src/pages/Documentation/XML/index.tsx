import React from "react";
import Title from "../../../components/Title";
import Content from '../../../components/Content';
import LinkBox from "../../../components/Link";
import Code from "../../../components/Code";
import Note from "../../../components/Note";
export default () => {
    return (
        <>
            <Content id="top">
                <Title level={1}>Krpano XML 参考</Title>
                <Content>krpano 使用简单的 xml 文件来存储 krpano 的配置项，这些文件可以用任何常用的文本编辑器来编写，但是要注意的是，在编写 xml 代码的过程中，需要遵守 xml 的语法规则。这些基本规则对所有的 xml 文件都是相同的，并不特定于 krpano。</Content>
            </Content>

            <Content>有关 xml 语法的更多信息，请查看:</Content>
            <LinkBox arrow={true} to="/documation/xml/syntaxrules">基本 XML 语法规则</LinkBox>

            <Title level={2}>关于本文档</Title>
            <Content>本文档是关于 krpano xml 结构的，关于所有 krpano xml 元素、属性和值以及它们到动态 krpano 变量名称的映射。</Content>
            <Content>文档主题：</Content>
            <Content>
                <ul>
                    <li><LinkBox to="/documation/xml?id=xmlstructure">krpano XML 结构</LinkBox></li>
                    <li><LinkBox to="/documation/xml?id=xmlspecial">特殊的 krpano XML 元素和属性</LinkBox></li>
                    <li><LinkBox to="/documation/xml?id=xmlnodes">XML 元素/属性/值/变量</LinkBox></li>
                </ul>
            </Content>

            <Content>对于 krpano 变量和 actions 的动态使用，请查看：</Content>
            <LinkBox arrow={true} to="/documation/actions">krpano ActionsScripting 参考</LinkBox>

            <Content id="xmlstructure">
                <Title level={2}>krpano XML 结构</Title>
                <Content>以下所示是所有 krpano xml 元素的结构化列表：（单击元素以获取更多信息）</Content>
                <Code code={true}>
                    <Content><LinkBox to="/document/xml?id=krpano">{`<krpano>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=include">{`<include>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=preview">{`<preview>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=image">{`<image>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageCube">{`<cube>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageCubestrip">{`<cubestrip>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageSphere">{`<sphere>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageCylinder">{`<cylinder>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageFlat">{`<flat>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageFisheye">{`<fisheye>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=imageDepthmap">{`<depthmap>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=image">{`</image>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=view">{`<view>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=area">{`<area>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=display">{`<display>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=control">{`<control>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=cursors">{`<cursors>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=autorotate">{`<autorotate>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=plugin">{`<plugin>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=layer">{`<layer>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;<LinkBox to="/document/xml?id=layer">{`<layer>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;&emsp;&emsp;{`...`}</Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=layer">{`</layer>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=hotspot">{`<hotspot>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=style">{`<style>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=events">{`<events>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=action">{`<action>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=contextmenu">{`<contextmenu>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=network">{`<network>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=memory">{`<memory>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=security">{`<security>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=textstyle">{`<textstyle>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=data">{`<data>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=scene">{`<scene>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=set">{`<set>`}</LinkBox></Content>
                    <Content>&emsp;&emsp;<LinkBox to="/document/xml?id=debug">{`<debug>`}</LinkBox></Content>
                    <Content><LinkBox to="/document/xml?id=krpano">{`</krpano>`}</LinkBox></Content>
                </Code>

                <Content>
                    <ul>
                        <li>xml 文件的根元素需要是 <LinkBox to="/document/xml?id=krpano">{`<krpano>`}</LinkBox> 元素，其他所有的元素都必须放到该元素中。</li>
                        <li>krpano xml 的所有 xml 元素和属性都是可选的，并且可以以任何顺序定义多次，当相同的元素被再次定义两次或更多次时，后面的声明将会覆盖掉前面的声明。</li>
                        <li>也可以在 <LinkBox to="/document/xml?id=krpano">{`<krpano>`}</LinkBox> 根元素中定义额外的 <LinkBox to="/document/xml?id=krpano">{`<krpano>`}</LinkBox> 元素，以在 krpano 范围内声明额外的设置。</li>
                        <li>xml 本身只是一种<Note>传输格式</Note> - 这意味着它将仅用于传输 krpano 查看器所需要的数据。当解析完 xml 之后，xml 元素将会被转化和映射到 krpano 内部数据结构中。这意味着在解析之后内部不再有 xml 数据。</li>
                    </ul>
                </Content>
            </Content>
        </>
    )
}
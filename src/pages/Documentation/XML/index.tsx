import React from "react";
import Title from "../../../components/Title";
import Content from '../../../components/Content';
import LinkBox from "../../../components/Link";
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
                    <li><LinkBox to="/documation/xml/#xmlstructure">krpano XML 结构</LinkBox></li>
                    <li><LinkBox to="/documation/xml/#xmlspecial">特殊的 krpano XML 元素和属性</LinkBox></li>
                    <li><LinkBox to="/documation/xml/#xmlnodes">XML 元素/属性/值/变量</LinkBox></li>
                </ul>
            </Content>

            <Content>对于 krpano 变量和 actions 的动态使用，请查看：</Content>
            <LinkBox arrow={true} to="/documation/actions">krpano ActionsScripting 参考</LinkBox>
        </>
    )
}
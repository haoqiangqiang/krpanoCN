import React from "react";
import Layout from "../../components/Layout";
import Main from "../../components/Main";
import Title from "../../components/Title";
import ContentBox from '../../components/Content';
import { Link } from "react-router-dom";

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
                <ContentBox>krpano是一款小巧且非常灵活的高性能软件，用于在网络上显示各种全景图像。它可用于非常详细的高分辨率图像、交互式虚拟游览、定制设计的用户界面等等。</ContentBox>
                <ContentBox>
                    <p>krpano 的一些关键特性：</p>
                    <ul>
                        <li><u>图像质量</u> - krpano 工具的图像生成算法和 krpano 查看器的渲染算法试图以尽可能最好的图像质量呈现图像，具有高细节和清晰度。</li>
                        <li><u>性能</u> - 针对快速图像渲染和快速加载进行了优化，同时尝试使用尽可能少的系统资源。</li>
                        <li><u>跨设备/跨浏览器支持</u> - krpano 支持最常见的浏览器和设备，甚至为某些设备限制和浏览器错误的解决方法提供特殊解决方案。旧系统和浏览器版本也得到很好的支持。</li>
                        <li><u>灵活和可定制</u> - krpano 提供了一个内置的布局和脚本系统以及几个用于外部定制解决方案的 API。查看器可以完全自定义，几乎所有内容都有设置和界面。</li>
                        <li>支持多种<u>全景图像格式</u> - 球形、立方体、圆柱形、平面图像，直接使用鱼眼图像。图像可以平铺和多分辨率，以实现更快、更高效的加载和内存管理。 <u>视频</u>也可以用作全景图像的来源。</li>
                        <li>不同的交互式<u>查看投影</u>（例如小行星视图） - 允许以新的有趣方式探索和查看全景图像。</li>
                        <li>几乎<u>没有限制</u> - 使用尽可能高分辨率的图像并加载尽可能多的全景图像。</li>
                        <li><u>VR 支持</u> - 内置和无缝的 VR 支持。可以随时切换到 VR，不需要额外的查看器或软件。还特别针对移动设备进行了优化。</li>
                        <li><u>小文件大小</u> - 即使有很多功能，也会不断优化以保持文件大小尽可能小，以实现更快的加载和更快的启动。</li>
                        <li><u>稳定的 API </u> - krpano 被设计为向上兼容。使用旧版本创建的内容在大多数情况下应该可以在新版本中使用而无需任何更改。</li>
                        <li><u>没有外部依赖</u> - 所有代码都是在内部开发和维护的。</li>
                    </ul>
                </ContentBox>

                <Title level={2}>最新动态</Title>
                <ContentBox>
                    <p>一个简短的视频播放列表(共7个视频)，其中包含一些最新的 krpano 功能(1.20 版)</p>
                    <audio></audio>
                </ContentBox>

                <Title level={2}>简单使用 - Droplets & Virtual Tour Editor</Title>
                <ContentBox>
                    <p>krpano 的主要使用案例之一是构建自定义解决方案，例如自己的自定义虚拟游览用户界面，但也包含几个辅助程序，用于快速构建简单且随时可用的虚拟游览。这里有一些使用视频：</p>
                    <audio></audio>
                </ContentBox>

                <Title level={2}>高级用法 - XML 和操作 API</Title>
                <ContentBox>
                    <p>对于更高级的用法，krpano 将与其布局和脚本 API 一起使用。这可以使用 krpano XML 系统和 krpano 动作脚本或 Javascript 来完成，也可以使用 HTML/CSS 和 Javascript 来完成。从这里开始，请查看包含<Link to='/examples'>示例</Link>的 xml 文件，并在此处查看 <Link to='/documentation/xml'>XML 参考</Link>和<Link to='/documentation/actions'>操作/脚本</Link>文档</p>
                </ContentBox>
            </>
        )
    }
    return (
        <Layout>
            <Main leftMenu={Menu()} content={Content()}></Main>
        </Layout>
    )
}
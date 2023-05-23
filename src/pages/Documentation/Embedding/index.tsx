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

                <Function id="initvars" header={<Content><LinkBox to="/documentation/embedding?id=initvars">initvars</LinkBox><span>{`: {...}`}</span></Content>}>
                    <ul>
                        <li>传递携带 krpano <Note>变量：值</Note>对的 javascript 对象。</li>
                        <li>这与 <LinkBox to="/documentation/embedding?id=vars">vars</LinkBox> 设置基本相同，但这些变量需要在加载和解析 xml <Note>之前</Note>设置。</li>
                        <li>该设置的主要用途是设置自定义路径变量，这些变量可用于 xml 文件中 <LinkBox to="/documentation/xml?id=urlNotes">url_paths</LinkBox>内的<LinkBox to="/documentation/xml?id=urlNotes">placeholders</LinkBox>, 或设置可在<LinkBox to="/documentation/xml?id=include">{`<include>`}</LinkBox>元素的 <LinkBox to="/documentation/xml?id=if">xml-if-checks</LinkBox>中使用的变量</li>
                        <li>
                            <Content>示例：</Content>
                            <Code code={true}>{`embedpano({..., initvars: {mypath: './panos1/'}});`}</Code>
                            <Content>XML:</Content>
                            <Code code={true}>{`url='%$mypath%image.jpg'`}</Code>
                        </li>
                        <li>
                            <Content>为了能够直接在 html 文件的 url 处通过 <LinkBox to="/documentation/xml?id=passQueryParameters">http_queries</LinkBox> 来传递 <LinkBox to="/documentation/embedding?id=initvars">initvars</LinkBox> 变量，需要使用以下语法：</Content>
                            <Code code={true}>{`tour.html?initvars.variable=value`}</Code>
                        </li>
                    </ul>
                </Function>

                <Function id="basepath" header={<Content><LinkBox to="/documentation/embedding?id=basepath">basepath</LinkBox><span>{`: ...`}</span></Content>}>
                    <li>设置用于解析相对于 krpano 查看器 url 路径的自定义路径。</li>
                    <li>注意：更改此项参数会影响<Code>{`%VIEWER%`}</Code> url 占位符。</li>
                </Function>

                <Function id="consolelog" header={<Content><LinkBox to="/documentation/embedding?id=consolelog">consolelog</LinkBox><span>{`: false`}</span></Content>}>
                    <ul>
                        <li>一个布尔值设置项，用于定义 kepano 日志/跟踪消息是否也应该发送到浏览器 javascript 控制台。</li>
                    </ul>
                </Function>

                <Function id="mwheel" header={<Content><LinkBox to="/documentation/embedding?id=mwheel">mwheel</LinkBox><span>{`: true`}</span></Content>}>
                    <ul>
                        <li>用于控制鼠标滚轮支持的布尔设置项</li>
                        <li>当设置为 true （默认值）时，鼠标滚轮事件将被捕获并可在查看器中使用（例如用于缩放）。</li>
                        <li>当设置成 false 时，任何鼠标滚轮的使用都将会被忽略，浏览器将执行其默认的鼠标滚轮处理（通常是滚动网页）。</li>
                        <li>也可以在运行时使用 <LinkBox to="/documentation/xml?id=controlDisablewheel">control.disablewheel</LinkBox> 设置更改鼠标滚轮支持。</li>
                    </ul>
                </Function>

                <Function id="capturetouch" header={<Content><LinkBox to="/documentation/embedding?id=capturetouch">capturetouch</LinkBox><span>{`: true`}</span></Content>}>
                    <ul>
                        <li>用于控制触摸事件捕获的布尔设置项</li>
                        <li>当设置为 true （默认值）时，触摸事件将被捕获并可在查看器中使用（例如用于平移和缩放）。</li>
                        <li>当设置成 false 时，触摸事件本身仍将会被查看器使用，但它们的默认事件处理不会停止。这意味着在这种情况下，浏览器可能会平移或缩放网页。</li>
                        <li>也可以在运行时使用 <LinkBox to="/documentation/xml?id=controlCapturetouch">control.capturetouch</LinkBox> 设置更改触摸事件支持。</li>
                    </ul>
                </Function>

                <Function id="focus" header={<Content><LinkBox to="/documentation/embedding?id=focus">focus</LinkBox><span>{`: true`}</span></Content>}>
                    <ul>
                        <li>一个布尔值设置，用于启动时为查看器提供 input/keyboard 焦点。</li>
                        <li>未设置时，设置将根据查看器大小自动设置 - 当查看器覆盖整个网页时，焦点将设置为 true，否则设置为 false。</li>
                    </ul>
                </Function>

                <Function id="webgl" header={<Content><LinkBox to="/documentation/embedding?id=webgl">webgl</LinkBox><span>{`: true`}</span></Content>}>
                    <ul>
                        <li>使用 <LinkBox to="">WebGL</LinkBox> 进行渲染（推荐）。</li>
                        <li>可以使用 <LinkBox to="">CSS 3D-transforms</LinkBox> 代替 WebGL 来渲染全景图，但与使用 WebGL 相比，这会有很多限制。</li>
                        <li>
                            <Content>设置项：</Content>
                            <ul>
                                <li><Code>true</Code> - 仅使用 WebGL （默认）</li>
                                <li><Code>false</Code> - 不使用 WebGL，始终使用 CSS 3D-transforms。</li>
                                <li><Code>{`auto`}</Code> - 在可以使用 WebGL 时使用 WebGL，否则使用 CSS 3D-transforms。</li>
                            </ul>
                        </li>
                        <li>当 WebGL 和 CSS 3D-transform 都不可用时，将显示一个<LinkBox to="/documentation/embedding?id=onerror">错误</LinkBox></li>
                        <li>
                            <Content>注意 - <Note>如果没有WebGL</Note>，这些功能将不可用：</Content>
                            <ul>
                                <li><LinkBox to="/documentation/xml?id=imageType">Spherical, Cylindrical and Fisheye Panos</LinkBox>（仅立方体和平面图）</li>
                                <li><LinkBox to="/documentation/plugins/videoPlayer">Video-Panos</LinkBox></li>
                                <li><LinkBox to="/documentation/xml?id=vireDistortion">Viewing Projections</LinkBox>（小行星视图）</li>
                                <li><LinkBox to="/documentation/xml?id=depthmap">Depthmap / 3D-Model Panos</LinkBox></li>
                                <li><LinkBox to="/documentation/actions?id=loadpanoBlend">Pano-blending modes</LinkBox></li>
                                <li><LinkBox to="/documentation/xml?id=displayMipmapping">Mipmapping</LinkBox></li>
                                <li><LinkBox to="/documentation/plugins/postprocessing">Postprocessing</LinkBox></li>
                                <li><LinkBox to="/documentation/xml?id=hostpotChromakey">Chromakey</LinkBox> 和 <LinkBox to="/documentation/xml?id=hostpotAlphachannel">alphachannel</LinkBox> 热点</li>
                                <li><LinkBox to="/documentation/xml?id=hostpotBlendmode">Hotspot blendmodes</LinkBox></li>
                                <li><LinkBox to="/documentation/plugins/webvr">VR</LinkBox> 和 <LinkBox to="/documentation/xml?id=displayStereo">Stereo</LinkBox> 支持</li>
                            </ul>
                        </li>
                        <li>
                            <Content>注意 - 取决于浏览器和设备，单个网页上的 WebGL 元素数量是有限的（例如，只有 8 个 WebGL 元素）。当请求更多 WebGL 元素时，最近最少使用的元素将被释放。</Content>
                            <Content>在一个网页上放置多个全景图时需要考虑这一点。对于简单的 panos/tours，可以选择为此用例禁用 WebGL。</Content>
                        </li>
                <Function id="webglsettings" header={<Content><LinkBox to="/documentation/embedding?id=webglsettings">webglsettings</LinkBox><span>{`: {preserveDrawingBuffer: false, depth: true, stencil: true, ...}`}</span></Content>}>
                    <ul>
                        <li>为 WebGL 上下文的创建传递具有特殊参数设置的对象</li>
                        <li>WebGL 上下文将会在启动的时候创建并且在运行中无法更改，所以这些设置需要在 embedding 期间指定。</li>
                        <li>可用设置：
                            <ul>
                                <li>
                                    <Content><LinkBox to="">webgl2</LinkBox> - 尝试使用可用的 WebGL 2.0 API。目前默认设置为 false, 因为仍处于实验阶段，尚未在所有的系统上进行全面测试。</Content>
                                    <Content>目前 WebGL2 在 krpano 上应用的优势：</Content>
                                    <Content>
                                        <ul>
                                            <li>非二次方纹理也可以使用 mipmapping。</li>
                                            <li>非二次方纹理无需着色器解决方案也可以使用可重复的纹理坐标（某些 .obj 3D-Models 需要）</li>
                                        </ul>
                                    </Content>
                                </li>
                                <li>
                                    <Content><LinkBox to="">preserveDrawingBuffer</LinkBox> - 保留绘图缓存区的内容。在某些浏览器中通过 toDataURL 或 readPixels 获取 WebGL canvas 屏幕截图时需要启用。默认情况下设置为 false 以获取更好的性能。</Content>
                                </li>
                                <li><Content><LinkBox to="">depth</LinkBox> - 创建一个深度缓存区，需要深度图支持和 3d-object 渲染。默认设置为 true, 不需要的时候可以禁用。</Content></li>
                                <li><Content><LinkBox to="">stencil</LinkBox> - 创建一个模板缓存区，当使用 alpha 透明线条边框颜色去正确的绘制多边形热点线条时需要。默认设置为 true, 不要要的时候可以禁用。</Content></li>
                                <li><Content><LinkBox to="">faillfMajorPerformanceCaveat</LinkBox> - 当渲染性能明显低于本机应用程序的 OpenGL 渲染性能时，不要使用 WebGL。默认设置成 false。</Content></li>
                                <li>
                                    <Content><LinkBox to="">antialias</LinkBox> - 设置是否抗锯齿。 true 或者 false。</Content>
                                    <Content>如果未设置，krpano 将自行决定最佳性能，因为一些 设备/浏览器/gpu 组合在启用抗锯齿的情况下性能表现的特别糟糕（例如：半帧率）。<Note>此设置应仅应用于内部测试或者特别特殊的情况。</Note></Content>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Function>

                <Function id="webxr" header={<Content><LinkBox to="/documentation/embedding?id=webxr">webxr</LinkBox><span>{`: 'auto'`}</span></Content>}>
                    <ul>
                        <li>控制<LinkBox to="/documentation/plugins/webvr">WebXR API</LinkBox>的支持。</li>
                        <li>为了使用 WebXR API，需要在启动时执行几个初始化设置，因此在嵌入查看器的时候需要定义 WebXR API 的使用。</li>
                        <li>
                            <Content>可用设置：</Content>
                            <ul>
                                <li>
                                    <Content><Code>auto</Code>（默认）</Content>
                                    <ul>
                                        <li>仅在桌面浏览器和专用 VR 系统/浏览器中使用 WebXR API。在 Android 移动设备中，可代替的 krpano MobileVR 支持目前具有更好和更广泛的设备支持</li>
                                        <li>当 WebVR API 和 WebXR API 同时可用时，则首选 WebVR API。截至目前为止，WebVR API 仍然是更好的选择，它允许通过采样来获得更好的图像质量和特定于设备的性能优化。WebXR API 目前无法事项这两种功能，最终未来的 API 版本和浏览器可能会变得更好。</li>
                                    </ul>
                                </li>
                                <li>
                                    <Content><Code>preferwebvr</Code></Content>
                                    <ul>
                                        <li>当 WebVR API 和 WebXR API 同时可用时，首选 <Note>WebVR API</Note>。</li>
                                    </ul>
                                </li>
                                <li>
                                    <Content><Code>prefer</Code> 或者 <Code>true</Code></Content>
                                    <ul>
                                        <li>当 WebVR API 和 WebXR API 同时可用时，首选 <Note>WebXR API</Note>。</li>
                                    </ul>
                                </li>
                                <li>
                                    <Content><Code>no</Code> 或者 <Code>false</Code></Content>
                                    <ul>
                                        <li>禁用 WebXR API，始终使用 WebVR API 或者 krpano MobileVR 支持显示 VR 显示。</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Function>

                <Function id="mobilescale" header={<Content><LinkBox to="/documentation/embedding?id=mobilescale">mobilescale</LinkBox><span>{`: 1.0`}</span></Content>}>
                    <ul>
                        <li>为移动设备选择使用不同全局比例的设置。</li>
                        <li>另请参阅 xml <LinkBox to="/documentation/actions?id=stagescale">stagescale</LinkBox>设置。</li>
                    </ul>
                </Function>

                <Function id="safearea" header={<Content><LinkBox to="/documentation/embedding?id=safearea">safearea</LinkBox><span>{`: 'auto'`}</span></Content>}>
                    <ul>
                        <li>启用或禁用一般<LinkBox to="/documentation/xml?id=displaySafeArea">Safe-Area</LinkBox>支持（适用于带槽口的 ios 设备）。</li>
                        <li>
                            <Content>可用设置：</Content>
                            <ul>
                                <li>
                                    <Content><Code>auto</Code>（默认）- 当查看器嵌入全屏 html 元素时，自动启用安全区域支持。</Content>
                                </li>
                                <li>
                                    <Content><Code>true</Code> - 始终启用安全区域支持，当嵌入目标 html 元素在嵌入期间不是全屏大小时也可以使用。</Content>
                                </li>
                                <li>
                                    <Content><Code>false</Code> - 禁用安全区域支持。</Content>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Content><Note>注意：在 html 文件中，需要在 {`<head>`} 元素中设置此 {`meta`} 才能够使用安全区域</Note></Content>
                            <Code code={true}>
                                <Content>{`<meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover'>`}</Content>
                            </Code>
                        </li>
                        <li>更多信息请查看：<LinkBox to="">krpano Forum Post</LinkBox></li>
                    </ul>
                </Function>

                <Function id="touchdevicemousesupport" header={<Content><LinkBox to="/documentation/embedding?id=touchdevicemousesupport">touchdevicemousesupport</LinkBox><span>{`: true`}</span></Content>}>
                    <ul>
                        <li>用于选择性地禁用触摸设备上的鼠标支持的设置。</li>
                    </ul>
                </Function>

                <Function id="fakedevice" header={<Content><LinkBox to="/documentation/embedding?id=fakedevice">fakedevice</LinkBox><span>{`: ''`}</span></Content>}>
                    <ul>
                        <li>伪造 krpano <LinkBox to="/documentation/xml?id=devicesNotes">device</LinkBox>检测设置</li>
                        <li>可用设置：'mobile', 'tablet', 'desktop'。（手机，平板电脑，电脑）</li>
                        <li><Note>注意：此设置仅用于内部测试，切勿在生产环境中使用。</Note></li>
                    </ul>
                </Function>

                <Function id="onready" header={<Content><LinkBox to="/documentation/embedding?id=onready">onready</LinkBox><span>{`: ...javascript-Callback-Function...`}</span></Content>}>
                    <ul>
                        <li>onready 设置可用于设置回调函数，以便再嵌入完成后且 krpano 查看器准备好使用时能够得到通知。</li>
                        <li>将通过使用 <LinkBox to="/documentation/plugins?id=krpanoInterface">krpano 接口对象</LinkBox>作为参数来调用所给出的函数。</li>
                        <li>
                            <Content>示例：</Content>
                            <Code code={true}>
                                <Content>{`embedpano({target: 'id-of-your-div', onready: function(krpano) {`}</Content>
                                <Content>&emsp;{`console.log('krpano is ready - version =' + krpano.version);`}</Content>
                                <Content>&emsp;{`krpano.actions.loadpano('pano.xml', null, null, null, function(){`}</Content>
                                <Content>&emsp;&emsp;{`var hs = krpano.addhotspot();`}</Content>
                                <Content>&emsp;&emsp;{`hs.type = 'text';`}</Content>
                                <Content>&emsp;&emsp;{`hs.html = 'Test Hotspot';`}</Content>
                                <Content>&emsp;&emsp;{`hs.ath = 20;`}</Content>
                                <Content>&emsp;&emsp;{`hs.atv = 10;`}</Content>
                                <Content>&emsp;&emsp;{`hs.onclick = function() {`}</Content>
                                <Content>&emsp;&emsp;&emsp;{`alert('Test'); `}</Content>
                                <Content>&emsp;&emsp;{`}`}</Content>
                                <Content>&emsp;{`})`}</Content>
                                <Content>{`}})`}</Content>
                            </Code>
                        </li>
                    </ul>
                </Function>

                <Function id="onerror" header={<Content><LinkBox to="/documentation/embedding?id=onerror">onerror</LinkBox><span>{`: ...javascript-Callback-Function...`}</span></Content>}>
                    <ul>
                        <li>onerror 设置可用于设置自定义嵌入错误处理函数。</li>
                        <li>将使用错误消息字符串作为参数调用指定函数。</li>
                    </ul>
                </Function>
            </Content>
        </>
    )
}

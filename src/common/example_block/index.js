import React, { useEffect } from 'react';

import {
    ExampleBlock,
    ExampleTitle,
    ExampleContainer,
    ExampleCover,
    ExampleImage,
    XmlList,
    XmlItems,
    XmlItem,
    ExampleContent,
} from './style'

function Example(props) {
    const data = props.data;
    console.log('daya is', data);
    return (
        <ExampleBlock>
            <ExampleTitle>{data.title}</ExampleTitle>
            <ExampleContainer>
                <ExampleCover>
                    <ExampleImage src={data.imgUrl}></ExampleImage>
                </ExampleCover>
                <XmlList>
                    xml:
                    <XmlItems>
                        {
                            data.xml.map((xml) => <XmlItem key={xml.id}>{xml.title}</XmlItem>)
                        }
                    </XmlItems>
                </XmlList>
                {
                    data.content.map((content) => <ExampleContent key={content.id}>{content.content}</ExampleContent>)
                }
            </ExampleContainer>
        </ExampleBlock>
    )
}

export default Example;
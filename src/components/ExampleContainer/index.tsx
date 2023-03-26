import React, { FC } from "react";
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

const ExampleBox: FC<any> = ({example}) => {
    return (
        <ExampleBlock>
            <ExampleTitle>{example.title}</ExampleTitle>
            <ExampleContainer>
                <ExampleCover>
                    <ExampleImage src={example.imgUrl}></ExampleImage>
                </ExampleCover>
                <XmlList>
                    xml:
                    <XmlItems>
                        {
                            example.xml.map((xml: any) => <XmlItem key={xml.id}>{xml.title}</XmlItem>)
                        }
                    </XmlItems>
                </XmlList>
                {
                    example.content.map((content: any) => <ExampleContent key={content.id}>{content.content}</ExampleContent>)
                }
            </ExampleContainer>
        </ExampleBlock>
    )
}

export default ExampleBox
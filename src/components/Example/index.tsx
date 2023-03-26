import React, { FC } from "react";
import { Example } from "../../interfaces/example.interface";
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

interface Props {
    example: Example
}

const ExampleBox: FC<Props> = ({ example }) => {
    return (
        <ExampleBlock>
            <ExampleTitle>{example.title}</ExampleTitle>
            <ExampleContainer>
                <ExampleCover>
                    <ExampleImage src={example.imgUrl} alt={example.title}></ExampleImage>
                </ExampleCover>
                <XmlList>
                    xml:
                    <XmlItems>
                        {
                            example.xml.map((xml) => <XmlItem key={xml.id}>{xml.title}</XmlItem>)
                        }
                    </XmlItems>
                </XmlList>
                {
                    example.content.map((content) => <ExampleContent key={content.id}>{content.content}</ExampleContent>)
                }
            </ExampleContainer>
        </ExampleBlock>
    )
}

export default ExampleBox
import React, { FC } from "react";
import { Container, Content, LeftMenu } from "./style";

interface Props {
    leftMenu: React.ReactNode,
    content: React.ReactNode,
}

const Main: FC<Props> = ({ leftMenu, content }) => {
    return (
        <Container>
            <LeftMenu>{leftMenu}</LeftMenu>
            <Content> {content}</Content>     
        </Container>
    )
}

export default Main;
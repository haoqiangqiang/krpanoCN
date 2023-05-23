import React, { FC, ReactNode } from "react";
import { LinkContainer, LinkIcon } from "./styled";
import { useNavigate } from "react-router-dom";

interface Props {
    out? : boolean;
    arrow? : boolean;
    to: string;
    children?: ReactNode | string;
}

const LinkBox: FC<Props> = ({ out, arrow, to, children }) => {
    const navigate = useNavigate();
    const linkTo = (to: string) => {
        navigate(to)
    }
    return (
        <LinkContainer onClick={() => linkTo(to)}>
            {arrow && <LinkIcon></LinkIcon>}
            <a>{children}</a>
        </LinkContainer>
    )
}

export default LinkBox
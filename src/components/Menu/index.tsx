import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../interfaces/common.interface";
import { MenuItem, MenuTitle } from "./styled";

interface Props {
    menu: Menu[]
}

const MenuBlock: FC<Props> = ({ menu }) => {
    return (
        <>
            {
                menu.map((menuItem) => (
                    <>
                        <MenuTitle>{menuItem.label}</MenuTitle>
                        {menuItem.child && menuItem.child.map((menuChildItem) => (
                            <Link to='menuChildItem.link'><MenuItem>{menuChildItem.label}</MenuItem></Link>
                        ))}
                    </>
                ))
            }
        </>
    )
}

export default MenuBlock;

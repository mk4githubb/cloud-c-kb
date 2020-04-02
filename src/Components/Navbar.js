import React, {useState} from "react";
import {
    Menu,
    MenuItem,
    Responsive,
    Image,
    DropdownMenu,
    Button,
    DropdownItem,
    Dropdown,
    MenuMenu, Divider, Container, GridColumn, Grid, Visibility, GridRow, Header
} from "semantic-ui-react";
import Acquired from "./Acquired";
import css_config from "./css_config";

const Navbar = (props) => {

    const [menuFixed, setMenuFixed] = useState(false);

    const [navbarHeight, setNavbarHeight] = useState(125)

    const options = [
        { key: 1, text: 'AWS', value: 1 },
        { key: 2, text: 'AZURE', value: 2 },
        { key: 3, text: 'Google Cloud', value: 3 },
    ];

    return(
        <div>
            <Responsive>
            <Grid verticalAlign={"middle"}>
                <GridRow  verticalAlign={"middle"} columns={1} centered>
                    <Menu vertical borderless fluid fixed={'top'} >
                        <MenuItem fitted={'horizontally'}>
                            <Acquired/>
                        </MenuItem>
                        <MenuItem>
                            <Menu size={"massive"} borderless fluid style={{height:50+'px'}}>
                                <MenuMenu position={"left"}>
                                    <Image src={require('../resources/logo-trend-micro-conformity-a9f2ff7ece6ba93793cec22de96daeba86528b2f2b937e8efdebae20db47ffa5.svg')}
                                           size={navbarHeight<100?'medium':'large'} verticalAlign={"middle"}/>
                                </MenuMenu>

                                <MenuMenu widths={6} position={"right"}>
                                    <MenuItem>Knowledge Base </MenuItem>

                                    <Dropdown item openOnFocus={true} text='Solutions' icon={'angle down'} floating simple scrolling>
                                        <Dropdown.Menu >
                                            <Dropdown.Item><Header image={require('../resources/logo-product-aws-fe0bb3dcdf02e650014a823f03b13263b55b39a1ed4bc2449e01a74f7bf3d2d5.svg')} size={"huge"}/></Dropdown.Item>
                                            <Dropdown.Item><Header image={require('../resources/logo-product-azure-25e59d27a8303021a6b7cfb01c4a25d9fa05c4b2c529bb2ee6364c771d119f41.svg')} size={"huge"}/></Dropdown.Item>
                                            <Dropdown.Item>Google cloud</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <MenuItem>About</MenuItem>
                                    <MenuItem>Pricing</MenuItem>
                                    <MenuItem><Divider vertical/></MenuItem>
                                    <MenuItem>Sign in</MenuItem>
                                    <MenuItem><Button content={'Free trial'} style={css_config.coralColorButton}/></MenuItem>
                                </MenuMenu>
                            </Menu>
                        </MenuItem>
                    </Menu>

                </GridRow>

            </Grid>
            </Responsive>
        </div>

    )
};
export default Navbar;
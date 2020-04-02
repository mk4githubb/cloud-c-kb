import React from "react";
import {Button, Grid, GridColumn, GridRow, Header, Image, Table} from "semantic-ui-react";
import css_config from "./css_config";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

const PartSix = () => {

    const init_Azure_table = () => {
        let i = 0;
        const array = [];

        for (i ; i < 3; i++) {
            array.push(
                <Table.Row key={i}>
                    <Table.Cell>
                        <Header style={css_config.table_Cell_Heading}>
                            Access Control
                            <HeaderSubHeader style={css_config.table_Cell_text}>
                                Microsoft Azure Active Directory Access Control (also known as Access Control Service or ACS) is a cloud-based service that provides an easy way of authenticating and authorizing users to gain access to your web applications and services
                            </HeaderSubHeader>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header style={css_config.table_Cell_Heading}>
                            Active Directory
                            <HeaderSubHeader style={css_config.table_Cell_text}>
                                Azure Active Directory provides an identity platform with enhanced security, access management, scalability, and reliability for connecting users with all the apps they need.                            </HeaderSubHeader>
                        </Header>
                    </Table.Cell>
                </Table.Row>
            );
        }

        return array;

    };


    return(
        <div>
            <div style={{marginTop:'50px'}}>
                <Grid centered textAlign={"center"} verticalAlign={"middle"}>
                    <GridRow columns={1}>
                        <GridColumn verticalAlign={"middle"} textAlign={"center"} width={7}>
                            <Header content={'Service coverage for AWS'} size={"huge"} style={css_config.purple_color_sub_Heading}/>
                            <Image  src={require('../resources/logo-square-azure-59bb73b7a7a100098b296fc1be20241e242659e98bd20e0dec07487cba4ad490.png')} size={"huge"}/>
                            <Button content={'View all Azure rules'} style={css_config.coralColorButton} size={"huge"} />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>

            <div style={{marginTop:'50px'}}>
                <Table columns={2} basic={"very"}>
                    <Table.Body>
                        {init_Azure_table()}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )

};

export default PartSix;
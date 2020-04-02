import React from "react";
import {Button, Grid, GridColumn, GridRow, Header, Image, Table} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import css_config from "./css_config";

const AWS_Services = () => {

    const init_AWS_table = () => {
        let i = 0;
        const array = [];

        for (i ; i < 12; i++) {
            array.push(
                <Table.Row key={i}>
                    <Table.Cell>
                        <Header style={css_config.table_Cell_Heading}>
                            AWS Certificate Manager
                            <HeaderSubHeader style={css_config.table_Cell_text}>
                                To easily provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources
                            </HeaderSubHeader>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header style={css_config.table_Cell_Heading}>
                            AWS Health
                            <HeaderSubHeader style={css_config.table_Cell_text}>
                                Provides ongoing visibility into the state of your AWS resources, services, and accounts
                            </HeaderSubHeader>
                        </Header>
                    </Table.Cell>
                </Table.Row>
            );
        }
        return array;
    };

    return(
        <div >
            <div style={{marginTop:'50px'}}>
                <Grid centered textAlign={"center"} verticalAlign={"middle"}>
                    <GridRow columns={1}>
                        <GridColumn verticalAlign={"middle"} textAlign={"center"} width={7}>
                            <Header content={'Service coverage for AWS'} size={"huge"} style={css_config.purple_color_sub_Heading}/>
                            <Image  src={require('../resources/logo-square-aws-b7740d9db437e8f3e88b05d346db4eefbc8ed8a3fa69509dccd51feb6bc9f880.png')} size={"huge"}/>
                            <Button content={'View all AWS rules'} style={css_config.coralColorButton} size={"huge"} />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>

            <div style={{marginTop:'50px'}}>
                <Table columns={2} basic={"very"}>
                    <Table.Body>
                        {init_AWS_table()}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )


};

export default AWS_Services;
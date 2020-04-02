import React from "react";
import {
    Card,
    CardContent,
    Grid,
    GridColumn,
    GridRow,
    Icon,
    Image,
    List,
    ListHeader,
    ListItem,
    ListList
} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

const Footer = () => {

    return(

        <div style={{marginTop:'100px'}}>
            <Divider/>
            <Grid columns={4} padded={"horizontally"} relaxed={"very"} centered>
                <GridColumn width={3} >
                    <Grid>
                        <GridRow>
                            <Image src={require('../resources/aws-badge-156cf61e0b1747e489436be0082f82f31c9780e0acb3c926f2a0a9a06bc21aff.png')} size={"small"}/>
                        </GridRow>

                        <GridRow columns={1}>
                            <h4>© 2016 - 2020 <br/>
                            Cloud Conformity Inc. <br/>
                            Website version: v2.0.48<br/>
                            Last update: 25 February 2020</h4>
                        </GridRow>

                        <GridRow>
                            <Grid padded>
                                <GridRow>
                                    <Icon name={'linkedin'} circular/>
                                    <Icon name={'youtube'} circular/>
                                    <Icon name={'twitter'} circular/>
                                    <Icon name={'github'} circular/>
                                </GridRow>
                            </Grid>
                        </GridRow>
                    </Grid>
                </GridColumn>

                <GridColumn width={3} >

                    <GridRow>
                        <List>
                            <ListHeader style={{fontWeight:'bold'}}>PRODUCTS</ListHeader>
                            <ListItem style={{marginTop:'1em'}}>cloud conformity for AWS</ListItem>
                            <ListItem >cloud conformity for Azure</ListItem>
                            <ListItem >cloud conformity for Google Cloud</ListItem>
                            <ListItem >Auto-Remediation</ListItem>
                            <ListItem >Pricing</ListItem>
                        </List>
                    </GridRow>

                    <GridRow style={{marginTop:'2em'}}>
                        <List>
                            <ListHeader style={{fontWeight:'bold'}}>COMPLIANCE STANDARDS</ListHeader>
                            <ListItem style={{marginTop:'1em'}}>CIS</ListItem>
                            <ListItem >GDPR</ListItem>
                            <ListItem >HIPAA</ListItem>
                            <ListItem >PCI-DSS</ListItem>
                            <ListItem >NIST-800-53 (Rev.4)</ListItem>
                        </List>
                    </GridRow>

                </GridColumn>

                <GridColumn width={3}>

                    <GridRow>
                        <List>
                            <ListHeader style={{fontWeight:'bold'}}>HELP</ListHeader>
                            <ListItem style={{marginTop:'1em'}} >Start a conversation</ListItem>
                            <ListItem >Frequently Asked Questions</ListItem>
                            <ListItem >Self Help</ListItem>
                            <ListItem >Knowledge Base</ListItem>
                            <ListItem >API Documentation</ListItem>
                        </List>
                    </GridRow>

                    <GridRow style={{marginTop:'2em'}}>
                        <List>
                            <ListHeader style={{fontWeight:'bold'}}>Privacy and Protection</ListHeader>
                            <ListItem style={{marginTop:'1em'}}>Terms and Conditions</ListItem>
                            <ListItem >Privacy Policy</ListItem>
                            <ListItem >SaaS Agreement</ListItem>
                            <ListItem >Commitment to GDPR</ListItem>
                            <ListItem >Report a security vulnerability</ListItem>
                        </List>
                    </GridRow>

                </GridColumn>

                <GridColumn width={3}>

                    <GridRow>
                        <List>
                            <ListHeader style={{fontWeight:'bold'}}>COMPANY</ListHeader>
                            <ListItem style={{marginTop:'1em'}}>About Us</ListItem>
                            <ListItem >Careers</ListItem>
                            <ListItem >Contact Us</ListItem>
                            <ListItem >Customers</ListItem>
                        </List>
                    </GridRow>

                </GridColumn>



            </Grid>
        </div>

    )


};

export default Footer;
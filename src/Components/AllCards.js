import React from "react";
import {Button, Card, CardGroup, Header, Image} from "semantic-ui-react";
import css_config from "./css_config";


const AllCards = () => {

    return (
        <div style={{marginTop: '7em'}}>
            <CardGroup stackable items={3} itemsPerRow={3}>
                <Card fluid>
                    <Image
                        src={require('../resources/logo-square-aws-b7740d9db437e8f3e88b05d346db4eefbc8ed8a3fa69509dccd51feb6bc9f880.png')}
                        wrapped ui={false}/>
                    <Card.Content>
                        <Button content={'AWS supported services'} style={css_config.coralColorButton} size={"huge"}/>
                        <Header content={'view all service rules'} style={css_config.coralColorLink}
                                textAlign={"center"}/>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Image
                        src={require('../resources/logo-square-azure-59bb73b7a7a100098b296fc1be20241e242659e98bd20e0dec07487cba4ad490.png')}
                        wrapped ui={false}/>
                    <Card.Content>
                        <Button content={'Azure supported services'} style={css_config.coralColorButton} size={"huge"}/>
                        <Header content={'view all service rules'} style={css_config.coralColorLink}
                                textAlign={"center"}/>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Image
                        src={require('../resources/logo-square-trend-micro-conformity-5debb7bc01be6e756cc098cf5472388ddaecfd13d00d4fb6488eabc3067ee5b4.png')}
                        wrapped ui={false}/>
                    <Card.Content>
                        <Button content={'Cloud Conformity best practices'} style={css_config.coralColorButton}
                                size={"large"}/>
                    </Card.Content>
                </Card>
            </CardGroup>
        </div>
    )


};

export default AllCards;
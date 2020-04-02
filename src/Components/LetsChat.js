import React from "react";
import {Button, Container, Grid, GridRow, Header} from "semantic-ui-react";
import css_config from "./css_config";

const LetsChat = () => {

    return (
        <div style={{marginTop: '100px'}}>
            <Container text>
                <Grid centered textAlign={"center"} verticalAlign={"middle"} stackable>
                    <GridRow>
                        <Header style={css_config.table_Cell_text}>
                            Whether your AWS exploration is just starting to take shape, you’re mid-way through a
                            migration or you’re already running complex workloads in the cloud, Cloud Conformity offers
                            full visibility of your infrastructure and provides continuous assurance it’s secure,
                            optimized and compliant.
                        </Header>
                    </GridRow>
                    <GridRow style={{marginTop: '25px'}}>
                        <Header style={css_config.table_Cell_text}>
                            <span style={css_config.chatWithUs}>Chat with us </span> to set up your onboarding session
                            and start a free trial.
                        </Header>
                    </GridRow>
                    <GridRow style={{marginTop: '25px'}}>
                        <Button style={css_config.coralColorButton} content={'Lets chat'} size={"huge"}/>
                    </GridRow>
                </Grid>
            </Container>
        </div>

    )
};

export default LetsChat;
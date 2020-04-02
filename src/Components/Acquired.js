import React from "react";
import {Grid, GridColumn, Header, Image} from 'semantic-ui-react'
import css_config from "./css_config";

const Acquired = () => {
    return (
        <div style={css_config.acquired_background}>
            <Grid verticalAlign={"middle"} columns={3}>
                <GridColumn verticalAlign={"middle"} width={5} textAlign={"right"}>
                    <Image src={require('../resources/logo.svg')} size={'tiny'} floated={"right"}/>
                </GridColumn>
                <GridColumn width={1}>
                    <Header inverted>
                        |
                    </Header>
                </GridColumn>
                <GridColumn width={9} textAlign={"left"} style={css_config.acquire_margin_corrector}>
                    <Header size={"small"} inverted>
                        Trend Micro Acquires Cloud Conformity and is now included in Trend Micro Cloud One
                    </Header>
                </GridColumn>
            </Grid>
        </div>
    )
};

export default Acquired;
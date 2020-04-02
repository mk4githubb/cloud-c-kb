import React from "react";
import {Grid, GridColumn, GridRow, Header, Segment} from "semantic-ui-react";
import css_config from "./css_config";

const PurpleBox = () => {
    return (
        <Segment style={css_config.purple_box}>
            <Grid verticalAlign={"middle"} textAlign={"left"} stackable>
                <GridRow verticalAlign={"middle"} columns={2} textAlign={"center"}>
                    <GridColumn>
                        <Header content={'Knowledge Base'} size={"large"} inverted
                                style={css_config.purple_box_left_text}/>
                    </GridColumn>

                    <GridColumn textAlign={"left"} width={5}>
                        <Header
                            content={'Cloud Conformity is a continuous assurance tool that provides peace of mind for your cloud infrastructure, delivering over 520 automated best practice checks.'}
                            size={"medium"} inverted style={{paddingTop: '6em'}}/>
                    </GridColumn>
                </GridRow>
                <GridRow style={{paddingTop: '5em'}} textAlign={"center"}>
                    <GridColumn width={6}>
                        <Header content={'knowledge base'} inverted size={"medium"}
                                style={{textDecoration: 'underline'}}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    )

};

export default PurpleBox;
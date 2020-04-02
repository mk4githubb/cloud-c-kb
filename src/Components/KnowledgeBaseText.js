import React from "react";
import {Container, Header} from "semantic-ui-react";
import css_config from "./css_config";

const KnowledgeBaseText = (props)=> {

    return(
        <Container>
            <Header size={'huge'} content={'Knowledge Base'} style={css_config.purple_color_Heading}/>
            <p style={css_config.purple_color_text}>Along with continuous assurance of your infrastructure, Cloud Conformity is an educational tool, providing detailed resolution steps to rectify security vulnerabilities, performance and cost inefficiencies, and reliability risks. The combination of real time monitoring and simplified, readily available remediation information enables organisations to embrace DevOps, without the fear of introducing vulnerabilities or reliability risks.</p>
            <p style={css_config.purple_color_text}>Below are the cloud providers, services and their associated rules included in the continuous assurance check by Cloud Conformity. New rules are being developed every day so if there’s a particular rule or service that isn’t covered, please get in touch with us and we’ll add it to the list.</p>
            {props.children}
        </Container>
    )
}



export default KnowledgeBaseText;
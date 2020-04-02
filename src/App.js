import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import PurpleBox from "./Components/PurpleBox";
import KnowledgeBaseText from "./Components/KnowledgeBaseText";
import AllCards from "./Components/AllCards";
import AWS_Services from "./Components/AWS_Services";
import Footer from "./Components/Footer";
import LetsChat from "./Components/LetsChat";
import Azure_services from "./Components/Azure_Services";

function App() {
    return (
        <div>
            <Navbar/>
            <PurpleBox/>
            <KnowledgeBaseText>
                <AllCards/>
                <AWS_Services/>
                <Azure_services/>
                <LetsChat/>
            </KnowledgeBaseText>
            <Footer/>
        </div>
    );
}

export default App;

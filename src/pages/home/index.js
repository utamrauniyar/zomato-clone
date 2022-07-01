import React, { useState } from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
};

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "NightLife":
            return <NightLife />;
        default:
            return <Delivery />;
    };
};

export default HomePage;
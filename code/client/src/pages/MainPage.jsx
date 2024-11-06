import React, { useState } from "react";
import GlobeComponent from "../components/GlobeComponent";
import "./MainPage.css";

const MainPage = () => {
    const [regions, setRegions] = useState([]);

    const handleRegionSelect = (region) => {
        console.log("Region selected:", region);

        if (!regions.some(selected => selected.name === region.name)) {
            setRegions([...regions, region]);
        }
    };

    return (
        <div className="main-container">
            <div className="content-container">
                <h1 className="title">Select Region</h1>
                <GlobeComponent className="globe" onRegionSelect={handleRegionSelect} />
                <div className="regions-list">
                    <h2 className="regions-title">Your Regions</h2>
                    <ul className="regions-ul">
                        {regions.length > 0 ? regions.map((region, index) => (
                            <li key={index} className="region-item">
                                <span className="region-name">{region.name}</span>
                                <span className="region-coordinates"> ({region.lat}, {region.lng})</span>
                            </li>
                        )) : <li className="no-region">No regions selected</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

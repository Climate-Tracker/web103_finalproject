import React, { useRef, useState, useEffect } from "react";
import Globe from 'react-globe.gl';

const GlobeComponent = ({ onRegionSelect }) => {
    const globeEl = useRef();
    const [regionsData, setRegionsData] = useState([]);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await fetch("http://localhost:3001/regions");
                if (!response.ok) {
                    throw new Error("Failed to fetch regions");
                }
                
                const regions = await response.json();
                setRegionsData(regions);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchRegions();
    }, []);

    return (
        <div className="globe">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                backgroundColor="rgba(0,0,0,0)"
                pointsData={regionsData}
                pointLat={d => d.lat}
                pointLng={d => d.lng}
                pointLabel={d => d.name}
                onPointClick={(region) => onRegionSelect(region)}
                width={1000}
                ></Globe>
        </div>
    )
};

export default GlobeComponent;
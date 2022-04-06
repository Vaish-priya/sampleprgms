import React from 'react';
import RailwayCard from './RailwayCard';
const RailwayList = (props) => {
    const renderRailway = props.railways.map((railway) => {
        return(
            <RailwayCard railway = {railway}></RailwayCard>
        );
});
return(
    <div className="ui cards">Railway List
        {renderRailway}
    </div>
    );
}

export default RailwayList;
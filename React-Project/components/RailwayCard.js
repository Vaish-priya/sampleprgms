import React from 'react';
//import  from '../image/Railway.jpg';
const RailwayCard = (props) => {
    const { railway,arrival,departure } = props.railway;
    
    //const source ="https://railway.com/images/railway-logos/tail/"+railway.toLowerCase()+".jpg"
    return(
        <div className="item">
            {/* <img className='pic' src={Railway}} alt="Railway" width="30px"/> {Railway} {departure} {"-->"} {arrival} */}
            <table>
                <tr>
                    <th></th>
                    <th>Railway</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                </tr>
                <tr>
                    {/* <td><img className='pic' src={Railway} alt="Railway" width="30px"/></td> */}
                    {/*<td><img src={source}  width="30px"/></td>*/}
                    <td>{railway}</td>
                    <td>{departure}</td>
                    <td>{arrival}</td>
                </tr>
            </table>
            {/* <div className="content">
                <div className="header">{railway}</div>
                <div>{arrival}</div>
                <div>{departure}</div>
         
            </div> */}
        </div>
    );
}

export default RailwayCard;
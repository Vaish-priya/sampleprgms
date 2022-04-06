import React from 'react';
class AddContact extends React.Component{
    state={
       railway: '',
        arrival: '',
        departure: ''
    };
add = (e) => {
    e.preventDefault();
    if(this.state.railway===""||this.state.arrival===""||this.state.departure===""){
        alert("Please fill all the fields");
        return;
    }
    this.props.addRailwayHandler(this.state);
    this.setState({railway:'',arrival:'',departure:''});

}
render(){
    return(
        <div className="ui form">
            <h2>Add Railway</h2>
            <form className='ui form' onSubmit={this.add}>
                <div className="field">
                    <label>Railway</label>
                    <input type="text" name="railway" placeholder="Railway" value={this.state.railway} onChange={(e)=>this.setState({railway:e.target.value})}/>           
                </div>
                <div className="field">
                    <label>Arrival </label>
                    <input type="text" name="arrival" placeholder="Arrival" value={this.state.arrival} onChange={(e)=>this.setState({arrival:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Departure </label>
                    <input type="text" name="departure" placeholder="Departure" value={this.state.departure} onChange={(e)=>this.setState({departure:e.target.value})}/>
                </div>
                <button className='ui button '>Add</button><br></br><br></br>
            </form>
        </div>
        );
    }
}
export default AddContact;
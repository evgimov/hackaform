import React from 'react';

class Optional extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="title">What's your experience?</h1>
                <div className="skillItemsWrapper">
                    <input placeholder=""></input>
                </div>
                <button className="btn btn-active">MORE SKILLS</button>
                
            </div>
        )
    }
}

export default Optional;
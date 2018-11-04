import React from 'react';
import './Skill.css'

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: []
        };

        this.handleSelected = (event) => {
            const selectedItems = this.state.selectedItems;
            if(selectedItems.includes(event.target.id)) {
                selectedItems.splice(selectedItems.indexOf(event.target.id),1);
                document.getElementById(event.target.id).classList.remove("btn-active");
            } else {
                selectedItems.push(event.target.id);  
                document.getElementById(event.target.id).classList.add("btn-active"); 
            }
            

            this.setState(() => ({ selectedItems }))
            console.log(this.state.selectedItems);
        }
    }

    render() {
        const skillNames = ["Angular", "Back-end Development", "React", "HTML", "CSS","Project Management","Dancing","Making Coffee"];
        return (
            <div className="wrapper">
                <h1 className="title">What are your skills?</h1>
                <div className="skillItemsWrapper">
                    {   
                        skillNames.map((skillName) => (
                            <div key={skillName}>
                                <button className="btn"
                                        id={skillName}
                                        onClick={this.handleSelected}
                                >{skillName}</button>
                            </div>
                        ))
                    }
                </div>
                <button className="btn btn-active">MORE SKILLS</button>
                
            </div>
        )
    }
}

export default Skill;
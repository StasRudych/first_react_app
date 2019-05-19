import React from "react";
import {NavLink} from "react-router-dom";

const Skill = (props) => {
    return(
                            <div className="item">
                                <h3 className="level-title">{props.skill_name}<span className="level-label">{props.skill_lavel}</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="{props.skill_progress}">
                                    </div>
                                </div>
                            </div>
    );
}


export default Skill;
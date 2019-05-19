import React from "react";
import {NavLink} from "react-router-dom";

import Skill from './Skill/Skill';

const Skills = (props) => {
    return(
                            props.skills.map( p => <Skill skill_name={p.skill_name} skill_lavel={p.skill_lavel} skill_progress={p.skill_progress} />)
    );
}


export default Skills;
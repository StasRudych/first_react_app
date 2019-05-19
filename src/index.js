import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Skill from "./Components/Sidebar/Skills/Skills";

let posts = [
    {
        title: 'First article',
        text: 'Текст первой статьи Текст первой статьи Текст первой статьи Текст первой статьи Текст первой статьи Текст первой статьи Текст первой статьи Текст первой статьи '
    },
    {
        title: 'Seconf article',
        text: 'Текст второй статьи Текст второй статьи Текст второй статьи Текст второй статьи Текст второй статьи Текст второй статьи Текст второй статьи Текст второй статьи '
    },
    {
        title: 'Third article',
        text: 'Текст третьей статьи Текст третьей статьи Текст третьей статьи Текст третьей статьи Текст третьей статьи Текст третьей статьи Текст третьей статьи Текст третьей статьи '
    }
]

let skills = [
    {
        skill_name: 'Javascript',
        skill_lavel: 'Intermidiate',
        skill_progress: '93%'
    },
    {
        skill_name: 'HTML',
        skill_lavel: 'EXPERT 100',
        skill_progress: '99%'
    },
    {
        skill_name: 'CSS',
        skill_lavel: 'EXPERT PRO',
        skill_progress: '100%'
    }
]


ReactDOM.render(<App posts={posts} skills={skills}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

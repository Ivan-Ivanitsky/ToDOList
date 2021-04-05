import './app-header.css';
import React from 'react';



const AppHeader = ({showPosts,liked})=>{
    return (
            <div className ='app-header d-flex' > 
                <h1>Задачи на день</h1>
                <h2>{showPosts} записей, из них понравилось  {liked}</h2>
            </div>)
}


export default AppHeader;
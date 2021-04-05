import React, { Component } from 'react';
import './post-list-item.css';


export default class PostListItem extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         important : false,
    //         like : false
    //     }
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this)
    // }

    // onImportant (){
    //     this.setState(({important})=>({important:!important}))
    // }

    // onLike (){
    //     this.setState(({like})=>({like:!like}))
    // }

    render(){
                const {label,onDelete,onToggleImportant, onToggleLike,important,like} = this.props;
                // const {important} = this.state;
                // const {like} = this.state;

                let className = 'app-list-item  d-flex justify-content-between';
            
                if(important){
                    className+= ' important';

                }
        
             
                if(like){
                    className+= ' like';

                }
        
                return(
                        <div className = {className} >
                            <span className='app-list-item-label' onClick = {onToggleLike}>{label}</span>
                            <div className = 'justify-content-center  aling-items-center'>
                                <button type='submit' className = 'app-list-item btn-star btn-sm' onClick = {onToggleImportant}>
                                    <i className ='fa fa-star '></i>
                                </button>
                                <button onClick={onDelete} type='submit' className = "app-list-item btn-trash btn-sm">
                                    <i className = 'fa fa-trash-o'></i>
                                </button >
                                <i className ='fa fa-heart'></i>
                            </div>
                        </div>
                    )
            }


}


import React  from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';



const PostList = ({post,onDelete,onToggleImportant,onToggleLike}) =>{

    const PostsElements = post.map((item) =>{
        const {id,...propsItem} = item

        return(
            <li key = {id} className ='list-group-item'>
                  <PostListItem {...propsItem} // внизу аналогичный код
                                onDelete={() => onDelete(id)}
                                onToggleImportant = {()=> onToggleImportant(id)}
                                onToggleLike = {()=> onToggleLike(id)}

                  />
             
                  {/* <PostListItem label = {item.label} 
                                important = {item.important}
                            
                  /> */}
                
            </li>
        )
    });

 return (
            <ul className = 'app-list list-group'>
                 {PostsElements}
            </ul>
     )
}


export default PostList;
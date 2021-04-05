
import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import'./app.css';
import nextID from "react-id-generator"; // генератор id





  export default class  App extends Component {
      constructor(props){
      super(props)
        this.state =  {
                 data : [  
                 {label:'Go to learn react', important :false , like:false, id : nextID() },
                 {label:'Go to Teach English', important :false, like:false, id : nextID() },
                {label:'WorkOut', important :false, like:false, id : nextID() }
            ],
            term:'',
            filter:'all'
        }

        

        this.deleteItem = this.deleteItem.bind(this);// байндим наш  метод deleteItem
        this.addItem = this.addItem.bind(this);
        this.onImportant = this.onImportant.bind(this)
        this.onLike = this.onLike.bind(this)
        this.onChangesSearch = this.onChangesSearch.bind(this) //привязываем обработчик события 
        this.onClickButton = this.onClickButton.bind(this)
        
        // this.maxId = 4/// генерируем посты от этого id
      }

        deleteItem(id){
                     this.setState(({data})=>{
                     const index = data.findIndex(elem => elem.id === id);

                    // const before = data.slice(0,index)
                    // const after = data.slice(index+1)
    
    
                    const newArr = [...data.slice(0,index), ...data.slice(index+1)]; // создаем копию массива для удаления элемента в листе 
                    return{
                         data: newArr // возвращаем в массив дата наш новый массив
                    }

                })

        }


        addItem(body){
            const arrItem = {
                label:body,                     //создаем говый обьект и добавляем в массив соблюдая имунтабельность!
                important: false,
                id:nextID()
             }                              

                this.setState(({data})=>{
                  const newArr = [...data, arrItem];
                  console.log(newArr)
                  return {
                     data:newArr
                }

             })
        }   


        onImportant(id){
            this.setState(({data})=>{
                const index = data.findIndex(item => (item.id === id))

                const oldImport = data[index]

                const importElem = {...oldImport, important : !oldImport.important}

                const newImportArr = [...data.slice(0,index), importElem ,...data.slice(index + 1)]

                return{
                    data: newImportArr
                }
            })
        }

        onLike(id){
            this.setState(({data})=>{

                const likeIndex = data.findIndex(item=>item.id === id);

                const old = data[likeIndex];

                const newItem = {...old, like: !old.like}

                const newArr = [...data.slice(0,likeIndex),newItem,...data.slice(likeIndex + 1)]
                
                return{
                    data:newArr
                }

            })
        }

        searchPost(item,term){
            if(term.length === 0){
                console.log('hi')
                return item
            }
        
          return item.filter(item =>{
              console.log('no')
              return item.label.indexOf(term) > -1
            })

        }


        onChangesSearch(term){
            this.setState({term})
        }

        onFilter(items , filter){
            if(filter==='like'){
                return items.filter(items => items.like)
            }
            else{
                return items
            }
        }

        onClickButton(filter){
            this.setState({filter})
        }


      render(){

        const {data,term,filter} = this.state
        
        const liked = data.filter(item=> item.like).length;
        const showPosts = data.length;
        const visiblePost =this.onFilter(this.searchPost(data ,term),filter)


      return  <div className = 'app'>
                <AppHeader
                liked = {liked}
                showPosts = {showPosts}
                />
             <div className = 'search-panel d-flex'>
                <SearchPanel
                   onChangesSearch = {this.onChangesSearch}
                />
                <PostStatusFilter
                filter={filter}
                onClickButton = {this.onClickButton}
                />
             </div> 
                <PostList post = {visiblePost}
                  onDelete = {this.deleteItem}        //  удаляем элемент в листе 
                  onToggleImportant = {this.onImportant}
                  onToggleLike = {this.onLike}
                  />        
                <PostAddForm
                 addForm = {this.addItem}           // добавляем элемент в форме
                />
             </div> 
      }

    }
// export default App; 
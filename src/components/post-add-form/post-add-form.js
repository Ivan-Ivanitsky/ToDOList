import React, { Component } from 'react';
import './post-add-form.css';


export default class PostAddForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            text : '',
            placeholder:'О чем вы думаете сейчас'
        }

        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmitText = this.onSubmitText.bind(this)

    }
    

    onValueChange(e){
        this.setState({
            text: e.target.value            // Изменяем наш input 
        })
    }


    onSubmitText(e){
        e.preventDefault()
        if(this.state.text !==''){
            this.props.addForm(this.state.text)  // Стэйтим наш текст в форму 
            this.setState({
                text:'',                            // чистим форму
                placeholder:'О чем вы думаете сейчас'
            })
        }else{
            this.setState({
                placeholder:'Введите текст!!!', 
            })
        }
          
    }

    render(){
   
        return(
        <form className = 'bottom-panel d-flex'
            onSubmit = {this.onSubmitText}
        >
        <input 
          type ='text'  
          placeholder = {this.state.placeholder} 
          className = 'form-control new-post-label' 
          onChange = {this.onValueChange}
          value = {this.state.text} 
           />
           <button type ='submit'
             className = 'btn btn-outline-secondary'>
               Добавить
           </button>
       </form>)
    }
}



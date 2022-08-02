import React from "react";

class AddNote extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            body : '',
            archived:false,
            createdAt:''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        const spancount = document.getElementById('charcount');
        const totalChar = event.target.value;
        const charLeft =  50-totalChar.length;
        
        if(charLeft < 0){
            spancount.classList.add('red');
        }else{
            spancount.classList.remove('red');
            spancount.innerText =charLeft;
            this.setState(()=>{
                return{
                    title:totalChar
                }
            })
        }

    }

    onBodyChangeHandler(event){
        this.setState(()=>{
            return{
                body:event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const newdate = day + "-" + month+ "-" +year ;
        this.setState(()=> {
            return{
                createdAt:newdate
            }
        })
        this.props.addnote(this.state);
    }

    render(){
        return (
        <div className="addnote-container item">
            <h2>Add Notes</h2>
            <p>Characters Left : <span id="charcount">50</span></p>
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder="Title..." value={this.state.title} onChange={this.onTitleChangeHandler} required></input>
                <textarea placeholder="Description..." value = {this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
                <input className="submit-form" type='submit'/>
            </form>
        </div>)
    }
}

export default AddNote;
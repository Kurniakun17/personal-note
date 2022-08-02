import React from "react";
import {createRoot} from 'react-dom/client';
import Navbar from "./components/NavBar";
import BodyContainer from "./components/BodyContainer";

import { getInitialData, showFormattedDate } from "./utils";
import './styles/style.css';

const intialData= getInitialData();

class Main extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            notes : intialData,
            status:false
        };

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onCallArchivedEventHandler = this.onCallArchivedEventHandler.bind(this);
        this.onCloseArchivedHandler = this.onCloseArchivedHandler.bind(this);
        this.onUnarchivedEventHandler = this.onUnarchivedEventHandler.bind(this);
        this.find = this.find.bind(this);
    }

    onCallArchivedEventHandler(){
        this.setState(()=>{
            return{
                status:true
            };
        })
    }

    onCloseArchivedHandler(){
        this.setState(()=>{
            return{
                status:false
            };
        })
    }

    onCloseEventHandler(){
        return(NaN);
    }

    onAddNoteEventHandler({title, body, archived}){
        this.setState((prevState)=>{
            return{ notes : [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body, 
                    archived,
                    createdAt:this.generateCreatedAt()
                }
            ]   
        }})
    }
    
    find(id){
        const Notes = this.state.notes;
        for(let i = 0;i<Notes.length;i++){
            if(Notes[i]['id'] === id){
                return i;
            }
        }
        return -1;
    }

    onDeleteEventHandler(id){
        const notes =  this.state.notes.filter((note) => note.id  !== id);
        this.setState({notes});
    }

    onArchivedEventHandler(id){
        const index = this.find(id);
        const notes = this.state.notes;
        notes[index]['archived']=true;
        this.setState({notes});
    }

    onUnarchivedEventHandler(id){
        const index = this.find(id);
        const notes = this.state.notes;
        notes[index]['archived']=false;
        this.setState({notes});
    }

    generateCreatedAt(){
        const today = new Date();
        const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        return date;
    }

    render(){
        return(
            <div>
                <Navbar/>
                <BodyContainer showFormattedDate = {showFormattedDate} closeArchived={this.onCloseArchivedHandler} callArchived = {this.onCallArchivedEventHandler} status = {this.state.status} unarchivedHandler = {this.onUnarchivedEventHandler} archivedHandler = {this.onArchivedEventHandler} deleteHandler = {this.onDeleteEventHandler} notes = {this.state.notes} addnote = {this.onAddNoteEventHandler}/>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));

root.render(<Main/>);

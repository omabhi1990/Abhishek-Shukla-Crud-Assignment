import React,{Component} from 'react';
import { setData } from "./Redux/Action/action";
import { connect } from "react-redux";

class Dashboard extends Component{
constructor(props){
  super(props)
  this.state={
    title:"",
    //list:[],
    file:''
  }
  
}
handleInput=e=>{
  this.setState({title:e.target.value});
}

handleShowData=()=>{
  const { title, file } = this.state;
  const { list } = this.props;
  if(title && file && file.name){
    let fetchedlist =[...list];
    fetchedlist.push({title,file});
    this.props.setData(fetchedlist);
    this.setState({title:'', file : ''});
    
  }
  

}



viewHandler = (val) => {
  this.props.history.push(`/playlist?id=${val}`);
}


// handleList=e=>{
//   let list
// }
fileUploadHandler=(e)=>{
  this.setState({file:e.target.files[0]})
}

render(){
  const{title}=this.state;
  const { list } = this.props;
  return(
<div>

      Welcome User!<br /><br />
      <input type="text" onChange={this.handleInput} value={this.state.title}/>
      <br/>
      <input type ={'file'} onChange={this.fileUploadHandler} />
      <br/>
      <button onClick={this.handleShowData}>Add</button>
      <br/>
      <table>
        <thead>
          <tr>
            <td>Sr No.</td>
            <td>Title</td>
            <td>File Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {
          list && list.length ?
          list.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.file.name}</td>
                  <td><button onClick={() => this.viewHandler(index+1)} >View</button></td>
                </tr>
              )
          }) 
          :
          null
        }
        </tbody>
      </table>
      
      



    </div>


//<input type="button" onClick={this.handleLogout} value="View" />
  )
}
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(setData(data))
  };
};



export default connect( mapStateToProps, mapDispatchToProps) (Dashboard);
  // handle click event of logout button
  

 
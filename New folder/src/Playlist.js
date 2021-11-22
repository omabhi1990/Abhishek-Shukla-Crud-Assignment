import React from 'react';
import { connect } from "react-redux";
class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listValue : {}
    }
  }

  componentDidMount(){
    const { history, list } = this.props
    console.log(this.props.history);
    if(history.location.pathname && history.location.pathname == "/playlist" && history.location.search){
      let id = history.location.search.split("=")[1];
      if(id && id > 0){
        let listValue = list && list.length && list[id-1] ? list[id-1] : {};
        listValue.file = listValue && listValue.file ? URL.createObjectURL(listValue.file) : '';
        if(listValue && Object.keys(listValue).length){
          this.setState({
            listValue
          })
        }else{
          this.props.history.goBack();
        }
        }else{
          this.props.history.goBack();
        }
      }else{
        this.props.history.goBack();
      }
    }
    handleLogout =()=> {    
      this.props.history.push('/');
     }

  render(){
    const { listValue } = this.state;
    return (
      <div>
        <figure>
      <figcaption>Listen to the T-Rex:</figcaption>
      {
        listValue && Object.keys(listValue).length && listValue.file ? 
        <>
          <h5>{listValue.title}</h5>
          <audio
          controls
          src={listValue.file}>
              Your browser does not support the
              <code>audio</code> element.
          </audio>
        </>
        :
        'No data available'
      }
      
      </figure>
      <button onClick={this.handleLogout}>Logout</button>
      
          </div>
      )
  };
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setData: data => dispatch(setData(data))
//   };
// };



export default connect( mapStateToProps, null) (Playlist);
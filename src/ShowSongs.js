import { connect } from 'react-redux';
import Song from './Song';
import { GET } from './reducers/action'
import { useEffect } from 'react';

// const ShowSongs = props =>{
//     useEffect(() => {
//         // console.log(props)
//     if( props.songs.length===0){
//         console.log()
//         props.songs = props.getAll();
//     }
// },[])
    
//    return ( <div>{props.songs.map((x) => <Song song={x} />)}</div>)
// }
const ShowSongs =(props)=> {  
          useEffect(() => {          
      if( props.songs.length===0){         
          props.songs = props.getAll();
      }
  },[])
    return(
        <div className="songs">
          { props.songs.map((x,i)=><Song key={i} song={x}/>)}
        </div>
    );
}
const mapDispatcToProps = dispatch => {
    return {
        getAll: ()=>dispatch(GET())
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps,mapDispatcToProps)(ShowSongs)

/*
import Song from './song'
import { connect } from 'react-redux';
const songs=(props)=> {  
    return(
        <div className="songs">
          { props.songs.map((x,i)=><Song key={i} song={x}/>)}
        </div>
    );
}

const mapstatetoprops=state=>{
    return{
        songs:state.songs
    }
}
export default connect(mapstatetoprops)(songs);
*/
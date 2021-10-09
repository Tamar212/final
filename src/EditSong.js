import { connect } from 'react-redux'
import { useCallback, useState, useEffect } from 'react';
import { ADD_SONG } from './reducers/action'
import { EDIT_SONG } from './reducers/action'

const EditSong = (props) => {
    const [newSong, setnewSong] = useState();
    useEffect(() => {
        setnewSong({ ...props.song });
    }, [props.song])
    const creatNewSong = useCallback((param, type) => {
        let tempSong = { ...newSong };
        tempSong[type] = param
    }, [newSong]);
    const [addSong, setaddSong] = useState();
    const creatNewSongToAdd = useCallback((param, type) => {
        let tempSong = { ...addSong };
        tempSong[type] = param
    }, [addSong]);

    return props.song === null ? "" :
        <div>
            <h2>Edit Song</h2>
            <input value={props.song.id} onChange={(value) => creatNewSong(value, 'id')} />
            <input placeholder={props.song.name} onChange={(event) => creatNewSong(event.target.value, 'name')} />
            <input placeholder={props.song.year} onChange={(event) => creatNewSong(event.target.value, 'year')} />
            <input placeholder={props.song.singer} onChange={(event) => creatNewSong(event.target.value, 'singer')} />
            <button onClick={() => { props.EditSong(newSong) }}>Edit Song</button><hr />
            <h2>Add Song</h2>
            <input name="id" type="text" placeholder="enter song id" onChange={(event) => creatNewSongToAdd(event.target.value, 'id')} />
            <input name="name" type="text" placeholder="enter song name" onChange={(event) => creatNewSongToAdd(event.target.value, 'name')} />
            <input name="year" type="text" placeholder="enter song year producer" onChange={(event) => creatNewSongToAdd(event.target.value, 'year')} />
            <input name="singer" type="text" placeholder="enter song singer" onChange={(event) => creatNewSongToAdd(event.target.value, 'singer')} />
            <button onClick={() => props.AddSong(addSong)}>Add Song</button>
        </div>
}
const mapDispatchToProps = dispatch => {
    return {
        AddSong: (song) => dispatch(ADD_SONG(song)),
        EditSong: (song) => dispatch(EDIT_SONG(song))
    }
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditSong)
import Input from "@mui/material/Input"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setSongSlice } from "../redux/slice/song"
import { addSongSlice, editSongSlice } from "../redux/slice/songs"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../redux/types"
import Divider from "@mui/material/Divider"



const MyForm = () => {

    const song = useSelector(state => state.song)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setSongSlice({ ...song, [prop]: event.target.value }))
    }
    
    const handleSubmit = () => {
        
        song.id === 0 ? dispatch({ type: CREATE_SONG, song: { ...song, id: nanoid(8) } }) : dispatch({ type: UPDATE_SONG_BY_ID, song })

        dispatch(setSongSlice({
            id: 0,
            title: '',
            artist: '',
            year: ''
        }))
    }
    return <>
        <>
            <Input style={{ margin:'10px' }} margin="dense" value={song.id} fullWidth disabled  />

            <Input style={{ margin: '10px' }} onChange={handleChange('title')} placeholder="Enter Song" value={song.title} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('artist')} placeholder="Enter Artist" value={song.artist} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('year')} placeholder="Enter Year" value={song.year} fullWidth />
            <Button style={{ margin: '10px' }} onClick={() => handleSubmit()} fullWidth variant="contained">Submit</Button>
        </>
    </>
}
export default MyForm
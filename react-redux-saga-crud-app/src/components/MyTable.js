import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setSongSlice } from '../redux/slice/song';
import { deleteSongsSlice } from '../redux/slice/songs';
import Button from '@mui/material/Button';
import { DELETE_SONG_BY_ID, GET_SONGS} from '../redux/types';

export default function MyTable() {
    const rows = useSelector(state => state.songs)
    const dispatch = useDispatch()
    React.useEffect(() => dispatch({ type: GET_SONGS }), [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Artist</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.artist}</TableCell>
                            <TableCell align="right">{row.year}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch(setSongSlice(row))} fullWidth variant="contained">Edit</Button>;
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: DELETE_SONG_BY_ID, id: row.id })} fullWidth variant="contained">Delete</Button>;
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
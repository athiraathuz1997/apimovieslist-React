import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Courseview = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts.splice(0, 20)))
    }, [])
    function handleupdate(){

    }
    function handledelete(index){
        var newtodos=[...posts]
        newtodos.splice(index,1);
        setPosts([...newtodos]);
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Id</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">Counts</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <StyledTableRow key={post.userId}>
                                <StyledTableCell component="th" scope="row">
                                    {post.userId}
                                </StyledTableCell>
                                <StyledTableCell align="right">{post.title}</StyledTableCell>
                                <StyledTableCell align="right">{post.body}</StyledTableCell>
                                <StyledTableCell align="right">{post.id}</StyledTableCell><br></br><br></br>
                                <Button variant="outlined" onClick={handleupdate}>UPDATE</Button><br></br><br></br>
                                <Button variant="outlined" onClick={handledelete}>DELETE</Button><br></br><br></br>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Courseview
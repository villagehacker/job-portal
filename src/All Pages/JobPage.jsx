// JobPage.jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuBar from './MenuBar'; // Importing the MenuBar component


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const JobPage = () => {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sx={{ textAlign: 'right' }}> {/* Adjusted to take full width and aligned to right */}
        <MenuBar />
      </Grid>
    </Grid>
  );
}

export default JobPage;

import React from 'react';
import { Grid2, Typography } from '@mui/material';

function Legend() {
  const legendItems = [
    { color: 'blue', label: 'A2' },
    { color: 'brown', label: 'BP Cresus & Cesar' },
    { color: 'black', label: 'Byzance 1/3' },
    { color: 'gray', label: 'Creance Cresus' },
    { color: 'purple', label: 'Creance Myriade Fr' },
    { color: 'orange', label: 'Dette Cresus' },
    { color: 'pink', label: 'Dette Myriade Fr' },
    { color: 'red', label: 'Myriade Fr' },
    { color: 'green', label: 'Patrimoine' },
    { color: 'red', label: 'Trésorerie' },
    { color: 'black', label: 'Immobilisations' },
    { color: 'yellow', label: 'Obligations' },
  ];

  return (
    <Grid2 container spacing={1}>
      {legendItems.map((item, index) => (
        <Grid2 item xs={6} sm={4} md={3} key={index}>
          <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '20px', 
              height: '20px', 
              backgroundColor: item.color, 
              marginRight: '5px' 
            }}></span>
            {item.label}
          </Typography>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Legend;
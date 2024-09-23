import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function generateLoremIpsum() {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  return loremIpsum.repeat(Math.floor(Math.random() * 3) + 1);
}

function FluxDisplay({ data }) {
  const fluxImpossibles = [
    generateLoremIpsum(),
    generateLoremIpsum(),
    generateLoremIpsum()
  ];

  const fluxJournaliers = [
    generateLoremIpsum(),
    generateLoremIpsum(),
    generateLoremIpsum(),
    generateLoremIpsum(),
    generateLoremIpsum(),
    generateLoremIpsum()
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        !! FLUX IMPOSSIBLES !!
      </Typography>
      <List dense>
        {fluxImpossibles.map((flux, index) => (
          <ListItem key={index}>
            <ListItemText primary={flux} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        !! FLUX JOURNALIERS !!
      </Typography>
      <List dense>
        {fluxJournaliers.map((flux, index) => (
          <ListItem key={index}>
            <ListItemText primary={flux} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FluxDisplay;
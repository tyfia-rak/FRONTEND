import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, Paper } from '@mui/material';
import InputForm from './components/InputForm';
import FluxDisplay from './components/FluxDisplay';
import Chart from './components/Chart';
import Legend from './components/Legend';

const theme = createTheme();

function App() {
  const [formData, setFormData] = useState({
    agregat: true,
    tresorerie: true,
    immobilisations: true,
    obligations: true,
    startDate: '2024-07-01',
    endDate: '2024-07-16'
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <InputForm onSubmit={handleFormSubmit} initialData={formData} />
          </Paper>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
              <FluxDisplay data={formData} />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
              <Chart data={formData} />
              <Legend />
            </Paper>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
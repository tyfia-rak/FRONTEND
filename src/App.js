import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, Paper } from '@mui/material';
import InputForm from './components/InputForm';
import FluxDisplay from './components/FluxDisplay';
import Chart from './components/Chart';
import Legend from './components/Legend';
import dayjs from 'dayjs';

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

  const isEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  const handleFormSubmit = (data) => {
    if (!isEqual(data, formData)) {
      setFormData(data);
    }
  };

  // Dériver les données du graphique des entrées
  const chartData = {
    patrimoine: formData.agregat ? [0, 0, 0, 30000, 100000, 100000, 90000, 85000] : [],
    tresorerie: formData.tresorerie ? [0, 0, 0, 5000, 80000, 80000, 70000, 65000] : [],
    immobilisations: formData.immobilisations ? [60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000] : [],
    // Ajoutez d'autres datasets selon vos besoins
  };

  // Filtrer les données en fonction des dates sélectionnées
  const startDate = dayjs(formData.startDate);
  const endDate = dayjs(formData.endDate);
  const filteredLabels = ['07-02', '07-04', '07-06', '07-08', '07-10', '07-12', '07-14', '07-16'].filter(date => {
    const currentDate = dayjs(`2024-${date}`);
    return currentDate.isAfter(startDate) && currentDate.isBefore(endDate);
  });

  const filteredChartData = {
    labels: filteredLabels,
    datasets: [
      {
        label: 'Patrimoine',
        data: chartData.patrimoine.slice(0, filteredLabels.length),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Trésorerie',
        data: chartData.tresorerie.slice(0, filteredLabels.length),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Immobilisations',
        data: chartData.immobilisations.slice(0, filteredLabels.length),
        borderColor: 'black',
        fill: false,
      },
      // Ajoutez d'autres datasets selon vos besoins
    ],
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
              <Chart data={filteredChartData} />
              <Legend />
            </Paper>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
import React, { useState } from 'react';
import { Grid, Checkbox, FormControlLabel, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import fr from 'date-fns/locale/fr';

function InputForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value
    }));
  };

  const handleDateChange = (name) => (date) => {
    setFormData(prev => ({
      ...prev,
      [name]: date.toISOString().split('T')[0]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel
              control={<Checkbox checked={formData.agregat} onChange={handleChange} name="agregat" />}
              label="Agrégat"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel
              control={<Checkbox checked={formData.tresorerie} onChange={handleChange} name="tresorerie" />}
              label="Trésorerie"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel
              control={<Checkbox checked={formData.immobilisations} onChange={handleChange} name="immobilisations" />}
              label="Immobilisations"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel
              control={<Checkbox checked={formData.obligations} onChange={handleChange} name="obligations" />}
              label="Obligations"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="De"
              value={formData.startDate}
              onChange={handleDateChange('startDate')}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="À"
              value={formData.endDate}
              onChange={handleDateChange('endDate')}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Mettre à jour
            </Button>
          </Grid>
        </Grid>
      </form>
    </LocalizationProvider>
  );
}

export default InputForm;
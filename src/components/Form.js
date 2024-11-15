import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    dob: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    gender: '',
    dob: '',
    address: '',
  });

  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check if required fields are filled
    if (!formData.fullName) newErrors.fullName = 'Please enter your full name';
    if (!formData.email) newErrors.email = 'Please enter your email address';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (!formData.dob) newErrors.dob = 'Please select your date of birth';
    if (!formData.address) newErrors.address = 'Please enter your address';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted', formData);
      setValidForm(true)
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
      sx={{marginTop:'10px'}}
    >
      <Grid item xs={12} sm={8} md={6} lg={8}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 8,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'white',
          }}
        >
          {/*<Typography variant="h5" textAlign="center" style={{ marginBottom: '4px', fontWeight: 'bold' }}>*/}
          {/*  Registration Form*/}
          {/*</Typography>*/}
           {validForm && <span style={{ color: 'green', fontSize: '14px', fontWeight:'bold' }} id="success">Form registered successfully</span>}

          <Grid container spacing={5} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={6}>
              <div>
                <label htmlFor="fullName" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: errors.fullName ? '10px' : '0',
                  }}
                />
                {errors.fullName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.fullName}</span>}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <label htmlFor="email" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: errors.email ? '10px' : '0',
                  }}
                />
                {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={5} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={6}>
              <div>
                <label htmlFor="gender" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Gender
                </label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: errors.gender ? '10px' : '0',
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</span>}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <label htmlFor="dob" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: errors.dob ? '10px' : '0',
                  }}
                />
                {errors.dob && <span style={{ color: 'red', fontSize: '12px' }}>{errors.dob}</span>}
              </div>
            </Grid>
          </Grid>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="address" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Street Address, City, State, Zip Code"
              value={formData.address}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: errors.address ? '10px' : '0',
              }}
            />
            {errors.address && <span style={{ color: 'red', fontSize: '12px'}}>{errors.address}</span>}
          </div>


          <Button variant="contained" type="submit" sx={{ backgroundColor: '#054e5a' }}>
            Register
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Form;

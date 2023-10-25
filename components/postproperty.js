import React, { useState } from 'react'
import SearchNav from './searchnav'
import { Autocomplete, Button, TextField } from '@mui/material'
import axios from 'axios';

const Postproperty = () => {
  const [formData, setFormData] = useState({
    bed: 1,
    bath: 'yes',
    wifi: 'no',
    guests: 1,
    description: '',
    address: '',
    phone: 0,
    email: '',
    price: 0,
  });
  

  const saveToDatabase = async () => {
    console.log(formData);
    const response = await axios.post("/api/owners/postproperty", formData);
    console.log(response);
  }

  const handleBedChange = (event, value) => {
    setFormData({ ...formData, bed: value });
  };

  const handleBathChange = (event, value) => {
    setFormData({ ...formData, bath: value });
  };

  const handleWifiChange = (event, value) => {
    setFormData({ ...formData, wifi: value });
  };

  const handleGuestsChange = (event, value) => {
    setFormData({ ...formData, guests: value });
  };

  const handleDescriptionChange = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const handleAddressChange = (event) => {
    setFormData({ ...formData, address: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFormData({ ...formData, price: event.target.value });
  };
  return (
    <div className="whole flex flex-col">
      <SearchNav />
      <div className="info flex flex-col justify-between p-5 items-center text-center" style={{height:"80vh",gap:"4vh"}}>
      <div className="basic-info flex flex-col " style={{gap:"4vh",width:"98%"}}>
        <div className="title bold underline" style={{fontSize:"26px"}}>
          Basic Info
        </div>
        <div className="options flex flex-wrap justify-evenly gap-y-2">
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={[1,2,3,4]}
      sx={{ width: 300 }}
      onChange={handleBedChange}
              renderInput={(params) => <TextField {...params} label="No. Of Beds?" />}
          />
            <Autocomplete
              onChange={handleBathChange}
      disablePortal
      id="combo-box-demo"
      options={["Yes","No"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Bathroom Available?" />}
          />
            <Autocomplete
              onChange={handleWifiChange}
      disablePortal
      id="combo-box-demo"
      options={["Yes","No"]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Wifi Available?" />}
          />
            <Autocomplete
              onChange={handleGuestsChange}
      disablePortal
      id="combo-box-demo"
      options={[1,2,3,4]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Max Guests?" />}
      />
        </div>
      </div>
      <div className="address flex flex-col" style={{width:"80%",gap:"4vh"}}>
        <div className="title bold underline" style={{fontSize:"26px"}}>
          Address and Description
          </div>
          <div className="what p-2 text-lg" style={{backgroundColor:"grey",color:"white",borderRadius:"20px"}}>
            In Description , you could possibly write about the property, ambience , anything special about it , or about 
            nearby people or maybe you could discuss some special place nearby
          </div>
        <div className="options flex justify-between gap-4">
            <TextField id="outlined-basic" label="Enter the Address" variant="outlined" sx={{ width: "100%" }}
            onChange={handleAddressChange}/>
            <TextField id="outlined-basic" label="Description "
              multiline maxRows={4} variant="outlined" sx={{ width: "100%" }}
              onChange={handleDescriptionChange}/>
        </div>
        </div>
        <div className="phone flex flex-col" style={{width:"60%",gap:"4vh"}}>
          <div className="title bold underline" style={{fontSize:"26px"}}>
           Details and Pricing
          </div>
          <div className="options flex flex-wrap gap-y-2 justify-around">
            <TextField variant="outlined" label="Your Phone Number"
            onChange={handlePhoneChange}/>
            <TextField variant="outlined" label="Your Email"
            onChange={handleEmailChange}/>
            <TextField variant="outlined" label="Your Pricing Per Month"
            onChange={handlePriceChange}/>
          </div>
        </div>
        <div className="submit">
          <Button variant="contained" color="success" onClick={saveToDatabase}>SUBMIT</Button>
        </div>
      </div>


    </div>
  )
}

export default Postproperty
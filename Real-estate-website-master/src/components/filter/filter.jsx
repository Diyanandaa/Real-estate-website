import React, { useState, useEffect } from 'react';
import './filter.css'; // Import your CSS file

const JobDetails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('property');
  const [jobListings, setJobListings] = useState([]);

  // Sample job data
  const jobData = [
    {
      property: "Apartment",
      Location: "Mumbai",
      Rent: "50k",

    },
    {
      property: "Penthouse",
      Location: "Goa",
      Rent: "1lakhs",
 
    },
    {
      property: "Bungalow",
      Location: "Banglore",
      Rent: "3lakhs",
     
    },
    {
      property: "Mansion",
      Location: "Dehradun",
      Rent: "5lakhs",
    
    },
    {
      property: "Flat",
      Location: "Noida",
      Rent: "25k",
      
    },
    {
      property: "Penthouse",
      Location: "Hyderabad",
      Rent: "70k",
    
    },
    {
      property: "Apartment",
      Location: "Cochin",
      Rent: "4lakhs",
   
    },
    {
      property: "Flat",
      Location: "Delhi",
      Rent: "30k",
    },
    {
      property: "Ranch",
      Location: "Jharkhand",
      Rent: "35k",
  
    },
  ];

  useEffect(() => {
    generateJobListings();
  }, []); 

 
  const generateJobListings = () => {
    const filteredJobs = jobData.filter(job => {
      return !searchInput || job[searchCriteria].toLowerCase().includes(searchInput.toLowerCase());
    });
    setJobListings(filteredJobs);
  };
 
  const handleInputChange = (e) => {
    setSearchInput(e.target.value); 
  };
  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value); 
  };
  const handleClear = () => {
    setSearchInput('');
    generateJobListings(); 
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Explore Property Listings</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <select
          value={searchCriteria}
          onChange={handleCriteriaChange}
          id="searchCriteria"
        >
          <option value="Property">Property</option>
          <option value="Location">Location</option>
          <option value="Rent">Rent</option>
        </select>
        <button onClick={handleClear} id="clearButton">Search</button>
      </div>
      <div className="job-grid" id="jobListingsContainer">
        {jobListings.map((job, index) => (
          <div key={index} className="job">
            <h3 className="property">{job.property}</h3>
            <p>{job.Location}</p>
            <p>{job.Rent}</p><br />
            <button>Rent</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
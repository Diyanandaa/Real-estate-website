// import React from "react"
// import Back from "../common/Back"
// import PriceCard from "../home/price/PriceCard"
// import img from "../images/pricing.jpg"
// import "../home/price/price.css"

// const Pricing = () => {
//   return (
//     <>
//       <section className='pricing mb'>
//         <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
//         <div className='price container'>
//           <PriceCard />
//         </div>
//       </section>
//     </>
//   )
// }
// export default Pricing
import React, { useState, useEffect } from 'react';
import './filter.css'; // Import your CSS file

const JobDetails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('company');
  const [jobListings, setJobListings] = useState([]);

  // Sample job data
  const jobData = [
    {
      company: "Uber",
      jobTitle: "Product Manager",
      salary: "$150,000",
      applyLink: "apply-uber-product-manager.html",
    },
    {
      company: "Amazon",
      jobTitle: "Senior Product Manager",
      salary: "$160,000",
      applyLink: "apply-amazon-product-manager.html",
    },
    {
      company: "Airbnb",
      jobTitle: "Product Development Manager",
      salary: "$145,000",
      applyLink: "apply-airbnb-product-manager.html",
    },
    {
      company: "Microsoft",
      jobTitle: "Technical Product Manager",
      salary: "$155,000",
      applyLink: "apply-microsoft-product-manager.html",
    },
    {
      company: "Facebook",
      jobTitle: "Product Marketing Manager",
      salary: "$165,000",
      applyLink: "apply-facebook-product-manager.html",
    },
    {
      company: "Google",
      jobTitle: "Product Strategy Manager",
      salary: "$170,000",
      applyLink: "apply-google-product-manager.html",
    },
    {
      company: "Paypal",
      jobTitle: "Product Analytics Manager",
      salary: "$140,000",
      applyLink: "apply-paypal-product-manager.html",
    },
    {
      company: "Ola",
      jobTitle: "Product Design Manager",
      salary: "$130,000",
      applyLink: "apply-ola-product-manager.html",
    },
    {
      company: "Flipkart",
      jobTitle: "Product Operations Manager",
      salary: "$135,000",
      applyLink: "apply-flipkart-product-manager.html",
    },
  ];

  useEffect(() => {
    // Call the function to generate job listings when the component mounts
    generateJobListings();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Function to generate job listings and update state
  const generateJobListings = () => {
    const filteredJobs = jobData.filter(job => {
      return !searchInput || job[searchCriteria].toLowerCase().includes(searchInput.toLowerCase());
    });
    setJobListings(filteredJobs);
  };

  // Event handlers
  const handleInputChange = (e) => {
    setSearchInput(e.target.value); // Update search input state
  };

  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value); // Update search criteria state
  };

  const handleClear = () => {
    setSearchInput(''); // Clear search input
    generateJobListings(); // Generate job listings again after clearing
  };

  const openModal = () => {
    // You can use state to control modal visibility in React
    // For simplicity, I'll just log a message here
    console.log("Modal opened");
  };

  const closeModal = () => {
    // You can use state to control modal visibility in React
    // For simplicity, I'll just log a message here
    console.log("Modal closed");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Explore Job Listings</h1>
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
          <option value="company">Company Name</option>
          <option value="jobTitle">Job Title</option>
          <option value="salary">Salary</option>
        </select>
        <button onClick={handleClear} id="clearButton">Clear</button>
      </div>
      <div className="job-grid" id="jobListingsContainer">
        {/* Map through job listings and render them */}
        {jobListings.map((job, index) => (
          <div key={index} className="job">
            <h3 className="company">{job.company}</h3>
            <p>{job.jobTitle}</p>
            <p>{job.salary}</p>
            <button onClick={openModal}>Apply</button>
          </div>
        ))}
      </div>
      {/* Modal */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p style={{ marginLeft: "120px", fontWeight: "bold", fontSize: "20px" }}>
            Thank you for applying!
          </p>
          <div className="icon-container">
            <img
              src="https://th.bing.com/th?id=OIP.oYSdZ2ozK1UW890889kGCQHaId&w=233&h=267&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Green Tick"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;


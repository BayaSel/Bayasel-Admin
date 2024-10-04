//import React from 'react'

import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined";
import { useState } from "react";


const Dropdown = () => {
  const [selected, setSelected] = useState('Vendors');
  
  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div style={Optstyles.container}>
      <select value={selected} onChange={handleSelect} style={Optstyles.dropdown}>
        <option value="Vendors">Vendors</option>
        <option value="Users">Users</option>
      </select>
    </div>
  );
};

const Optstyles = {
  container: {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    borderRadius: '5px',
    marginBottom: '20px'
  },
  dropdown: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    appearance: 'none',  // Remove default arrow on the right
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  },
};

// Vendor Request Card Component
const VendorRequest = ({ name, businessName, image }) => {
  return (
    <div style={styles.card}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={image} alt={name} style={styles.image} />
        <div>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Name: <span style={{ color: '#4CAF50' }}>{name}</span></p>
          <p style={{ margin: '0' }}>Business Name: <span style={{ color: '#4CAF50' }}>{businessName}</span></p>
        </div>
      </div>
      <div>
        <button style={styles.acceptButton}>Accept</button>
        <button style={styles.denyButton}>Deny</button>
      </div>
    </div>
  );
};

// Main Component
const VendorRequestList = () => {
  const requests = [
    { name: "James Okoro", businessName: "Jameson", image: "https://via.placeholder.com/50" },
    { name: "Toyin Balogun", businessName: "T.Food", image: "https://via.placeholder.com/50" },
    { name: "Toyin Balogun", businessName: "T.Food", image: "https://via.placeholder.com/50" },
    { name: "Toyin Balogun", businessName: "T.Food", image: "https://via.placeholder.com/50" },
    { name: "Toyin Balogun", businessName: "T.Food", image: "https://via.placeholder.com/50" },
    { name: "Toyin Balogun", businessName: "T.Food", image: "https://via.placeholder.com/50" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>New Vendor Request</h2>
      <div style={styles.grid}>
        {requests.map((request, index) => (
          <VendorRequest
            key={index}
            name={request.name}
            businessName={request.businessName}
            image={request.image}
          />
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#4CAF50',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  denyButton: {
    backgroundColor: '#b71c1c',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};




function Customer() {
  const vendors = [
    { name: "Mr Dotun Micheal", dateJoined: "12/09/23", business: "Dotun Foods", rating: "4.5/5" },
    { name: "Mrs Oladele Tosin", dateJoined: "17/08/23", business: "Tosin&son Farms", rating: "4.5/5" },
    { name: "Mrs Esther James", dateJoined: "15/08/23", business: "Ayaba Farms", rating: "4.3/5" },
    { name: "Miss Hannah West", dateJoined: "07/08/23", business: "Hannah Eats", rating: "4.0/5" },
    { name: "Mr Chidera Moses", dateJoined: "03/08/23", business: "God gives farm", rating: "4.0/5" },
    { name: "Miss Gift Onyeka", dateJoined: "27/07/23", business: "Gifted farm", rating: "2.0/5", ratingStyle: { color: "red" } },
  ];
  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Dropdown />
        <h2>All Vendors (150)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Date joined</th>
              <th style={{ padding: '10px' }}>Business</th>
              <th style={{ padding: '10px' }}>Rating</th>
              <th style={{ padding: '10px' }}>View</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{vendor.name}</td>
                <td style={{ padding: '10px' }}>{vendor.dateJoined}</td>
                <td style={{ padding: '10px' }}>{vendor.business}</td>
                <td style={{ padding: '10px', ...vendor.ratingStyle }}>{vendor.rating}</td>
                <td style={{ padding: '10px', color: '#4CAF50', cursor: 'pointer' }}>View</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <button style={{ padding: '5px 10px', margin: '0 5px', cursor: 'pointer' }}>1</button>
          <button style={{ padding: '5px 10px', margin: '0 5px', cursor: 'pointer' }}>2</button>
          <button style={{ padding: '5px 10px', margin: '0 5px', cursor: 'pointer' }}>3</button>
        </div>
        <VendorRequestList />
      </div>
    </>
  )
}


export default Customer
import React from 'react';

const Mainbar = () => {
  const styles = {
    headings: {
      fontSize: '12px',
      fontWeight: 'bolder',
      padding: '0px',
      marginTop: '15px'
    },
    inputBox: {
      width: '200px',
      height: '35px',
      border: 'none',
      borderRadius: '2px',
      fontSize: '12px',
      fontWeight: 'bold',
      padding: '5px'
    },
    table: {
      margin: '40px 0px 0px 43px',
      fontSize: '11px',
      backgroundColor: 'white',
      width: '90%'
    },
    tableCell: {
      padding: '10px 0px 10px 10px'
    },
    navbar: {
      margin: '30px 20px',
      justifyContent: 'space-between'
    },
    searchInput: {
      width: '300px',
      height: '40px'
    },
    notificationIcon: {
      height: '40px',
      width: '40px',
      marginRight: '20px'
    },
    sectionHeader: {
      margin: '10px 45px'
    },
    formRow: {
      marginLeft: '45px',
      marginTop: '20px'
    }
  };

  const renderTableRows = () => {
    const rows = [];
    const rowData = ['#AHGA68', '23/09/22', 'Jacob Marcus', '$100', '$000', '$000'];
    for (let i = 0; i < 9; i++) {
      rows.push(
        <tr key={i}>
          <td style={styles.tableCell}><input type='checkbox' /></td>
          {rowData.map((data, index) => (
           <td key={index} style={index === 0 ? {...styles.tableCell, color: '#0B63F8'} : styles.tableCell}>{data}</td>
          ))}

        </tr>

      );

    }
    return rows;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container" style={styles.navbar}>
          <form className="d-flex">
            <input className="form-control me-100" style={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className="d-flex">
            <img src='./icons/Notification.png' alt="Notification" style={styles.notificationIcon} />
          </div>
        </div>
      </nav>

      <div>
        <h5 style={styles.sectionHeader}>Sales Information</h5>
        <div className='row' style={styles.formRow}>
          <div className='col-lg-3'>
            <div className='row'>
              <p style={styles.headings}>Customer</p>
            </div>
            <div className='row'>
              <input style={styles.inputBox} placeholder='Enter Customer Name' />
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='row'>
              <p style={styles.headings}>Invoice ID</p>
            </div>
            <div className='row'>
              <input style={styles.inputBox} />
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='row'>
              <p style={styles.headings}>Start Date</p>
            </div>
            <div className='row'>
              <input style={styles.inputBox} />
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='row'>
              <p style={styles.headings}>End Date</p>
            </div>
            <div className='row'>
              <input style={styles.inputBox} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableCell}><input type='checkbox' /></th>
              <th style={styles.tableCell}>Invoice ID</th>
              <th style={styles.tableCell}>Date</th>
              <th style={styles.tableCell}>Customer</th>
              <th style={styles.tableCell}>Payable Amount</th>
              <th style={styles.tableCell}>Paid Amount</th>
              <th style={styles.tableCell}>Due</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mainbar;
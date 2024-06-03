import React, { useState } from 'react';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const styles = {
        container: {
            backgroundColor: 'white',
            paddingLeft: '40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
            paddingBottom: '20px' 
        },
        image: {
            height: '20px',
            width: '40px',
            marginRight: '10px'
        },
        row: {
            marginBottom: '20px',
             
        },
        help: {
            alignSelf: 'center' ,
        }
    };

    return (
        <div style={styles.container}>
            <div>
                <p style={{ color: '#013CC6', fontWeight: 'bold', padding: '30px 0px 20px 0px' }}>Medico Sales</p>
                <div>
                    <div className='row' style={{marginBottom: '20px',color : 'blue'}} >
                        <img style={styles.image} src='./icons/element-3.png'  /> Application
                    </div>
                    <div className='row' style={styles.row}>
                        <img src='./icons/clipboard-tick.png' style={styles.image}/> Lab Test
                    </div>
                    <div className='row' style={styles.row}>
                        <img src='./icons/calendar-tick.png' style={styles.image}/> Medicine Order
                    </div>
                    <div className='row' style={styles.row}>
                        <img src='./icons/sms.png' style={styles.image}  /> Message
                    </div>
                    <div className='row' style={styles.row}>
                        <img src='./icons/clipboard-tick.png' style={styles.image}  /> Payment
                    </div>
                    <div className='row' style={styles.row}>
                        <img src='./icons/setting-2.png' style={styles.image} /> Settings
                    </div>
                    
                </div>
                
            </div>
            

            <div >
            <img src='./icons/Question.png' style={{ height: '20px', marginRight: '10px' }} />
                Help
                
            </div>
        </div>
    );
};

export default Sidebar;
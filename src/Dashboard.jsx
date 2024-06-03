import React from 'react';
import Sidebar from './Sidebar';
import Mainbar from './Mainbar';

const Dashboard = () => {
    return (
        <div style={{backgroundColor : '#F6F4F4'}}>
            <div className='row'>
                <div className='col-md-2' style={{padding :'0px'}}>
                    <Sidebar/>
                </div>
                <div className='col-md' style={{padding :'0px'}}>
                    <Mainbar/>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
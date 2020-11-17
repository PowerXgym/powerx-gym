import React from 'react';
import './ClassSchedule.scss';

const ClassSchedule = () => {
    return (
        <div className="row schedule mt-5">
            <div className=" card">
                <h4>Monday</h4>
                <p>8:00 AM - 9:00 AM</p>
            </div>
            <div className=" card">
                <h4>Tuesday</h4>
                <p>10:00 AM - 11:00 AM</p>
            </div>
            <div className=" card">
                <h4>Wednesday</h4>
                <p>7:00 AM - 8:00 AM</p>
            </div>
            <div className=" card">
                <h4>Thursday</h4>
                <p>5:00 PM - 6:00 PM</p>
            </div>
            <div className=" card">
                <h4>Friday</h4>
                <p>6:00 AM - 7:00 AM</p>
            </div>
            <div className=" card">
                <h4>Saturday</h4>
                <p>7:00 PM - 8:00 PM</p>
            </div>
        </div>
    );
};

export default ClassSchedule;
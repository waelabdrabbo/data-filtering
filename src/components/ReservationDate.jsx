import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReservationDate = ({ onDateRangeChange }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const handleDateChange = (fullDate) => {
        setDateRange(fullDate);
        onDateRangeChange(fullDate);
    }
    return (
        <DatePicker
            placeholderText="Select a date range"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            isClearable={true}
        />
    );
};

export default ReservationDate;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { setDateRangeFilter } from "../slices/filterSlice";

/**
 * Generates the reservation date component.
 *
 * @return {JSX.Element} The rendered reservation date component.
 */
const ReservationDate = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const dispatch = useDispatch();
    const handleDateRangeChange = (fullDate) => {
        dispatch(setDateRangeFilter(fullDate.map((date) => (date ? date.toISOString() : null))))
    }
    const handleDateChange = (fullDate) => {
        setDateRange(fullDate);
        handleDateRangeChange(fullDate);
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

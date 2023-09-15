import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setSortCriteria } from '../slices/sortSlice';
import { useEffect } from 'react';
import { setSortedData } from '../slices/dataSlice';
import sortOptions from '../options/sortOptions';

const ReservationSort = () => {
  const sortCriteria = useSelector((state) => state.sort.sortCriteria);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.data.filteredData); // Assuming you have filtered data in your state

  const handleSortChange = (selectedOption) => {
    const newSortCriteria = selectedOption.value;
    dispatch(setSortCriteria(newSortCriteria));
  };


  useEffect(() => {
    const sortedReservations = () => {
      if (sortCriteria === 'Customer') {
        return [...reservations].sort((a, b) =>
          `${a.customer.firstName} ${a.customer.lastName}`.localeCompare(
            `${b.customer.firstName} ${b.customer.lastName}`
          )
        );
      } else if (sortCriteria === 'Number') {
        return [...reservations].sort((a, b) => a.quantity - b.quantity);
      } else {
        return reservations; // No sorting
      }
    };
    dispatch(setSortedData(sortedReservations()));
  }, [sortCriteria, reservations, dispatch]);
  return (
    <>
      <Select
        onChange={(selectedOption) => handleSortChange(selectedOption)}
        options={sortOptions}
        value={sortOptions.find((option) => option.value === sortCriteria)}
      />
    </>
  );
};

export default ReservationSort;
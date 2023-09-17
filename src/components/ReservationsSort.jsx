import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setSortCriteria } from '../slices/sortSlice';
import sortOptions from '../options/sortOptions';

/**
 * Render a component for sorting reservations based on the selected criteria.
 *
 * @returns {JSX.Element} The rendered component.
 */
const ReservationSort = (props) => {
  const sortCriteria = useSelector((state) => state.sort.sortCriteria);
  const dispatch = useDispatch();

  const handleSortChange = (selectedOption) => {
    const newSortCriteria = selectedOption.value;
    dispatch(setSortCriteria(newSortCriteria));
  };
  return (
    <>
      <Select
        placeholder={props.name}
        onChange={(selectedOption) => handleSortChange(selectedOption)}
        options={sortOptions}
        classNamePrefix="dropdown"
      />
    </>
  );
};

export default ReservationSort;
import { useDispatch, useSelector } from "react-redux";
import { useGetReservationsQuery } from '../services/reservationsApi'

import { setStatusFilter, setShiftFilter, setAreaFilter, setFilteredReservations } from "../slices/filterSlice";
import Select from 'react-select'

const ReservationFilter = (props) => {
    const { data: reservations, error, isLoading } = useGetReservationsQuery();
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handleFilterChange = (selectedOption, { name }) => {
        const value = selectedOption.value;
        switch (name) {
            case 'status':
                dispatch(setStatusFilter(value));
                break;
            case 'shift':
                dispatch(setShiftFilter(value));
                break;
            case 'area':
                dispatch(setAreaFilter(value));
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Select onChange={(selectedOption) => handleFilterChange(selectedOption, { name: props.name })}
                options={props.options} />
        </>
    )
};


export default ReservationFilter;
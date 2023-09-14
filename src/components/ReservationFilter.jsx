import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, setShiftFilter, setAreaFilter } from "../slices/filterSlice";
import Select from 'react-select'

const ReservationFilter = (props) => {
    const dispatch = useDispatch();
    const statusFilter = useSelector((state) => state.filter.status);

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
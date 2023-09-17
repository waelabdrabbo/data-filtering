import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, setShiftFilter, setAreaFilter } from "../slices/filterSlice";
import Select from 'react-select'

/**
 * Filters reservations based on the selected options.
 *
 * @param {object} props - The props object containing the name and options.
 * @return {JSX.Element} The filtered reservations component.
 */
const ReservationFilter = (props) => {
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
            <Select
                placeholder={props.name}
                onChange={(selectedOption) => handleFilterChange(selectedOption, { name: props.name })}
                options={props.options} classNamePrefix="dropdown" />
        </>
    )
};


export default ReservationFilter;
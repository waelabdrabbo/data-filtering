
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../slices/searchSlice";

/**
 * Renders a search input component for reservations.
 *
 * @return {ReactElement} The rendered search input component.
 */
const ReservationSearch = () => {
    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.search.searchText);
    const handleSeachText = (e) => {
        const newText = e.target.value;
        dispatch(setSearchText(newText))
    }
    return (
        <div className="search">
            <input type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSeachText} />
        </div>
    )
}

export default ReservationSearch
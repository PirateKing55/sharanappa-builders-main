import PropTypes from "prop-types";
import clsx from "clsx"

const DateTimeDisplay = ({ value, type, showType }) => {
    return (
        <span className={clsx("single", !showType && "hide-type")}>
            <h1>{value}</h1>
            <p>{showType ? type : ":"}</p>
        </span>
    );
};

DateTimeDisplay.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    showType: PropTypes.bool
}

DateTimeDisplay.defaultProps = {
    showType: true
}

export default DateTimeDisplay;
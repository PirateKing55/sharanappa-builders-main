import clsx from "clsx";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import useCountdown from "@/hooks/use-countdown";

const DateTimeDisplay = dynamic(() => import("./date-time-display"), {
    ssr: false,
});


const Countdown = ({ date, className, showType }) => {
    const [days, hours, minutes, seconds] = useCountdown(date);

    return (
        <div className={clsx("timer", className)}>
            <DateTimeDisplay value={days} type="days" showType={showType} />
            <DateTimeDisplay value={hours} type="hours" showType={showType} />
            <DateTimeDisplay value={minutes} type="minutes" showType={showType} />
            <DateTimeDisplay value={seconds} type="seconds" showType={showType} />
        </div>
    );
};

Countdown.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string,
    showType: PropTypes.bool
}


export default Countdown;
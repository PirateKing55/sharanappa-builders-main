import ReactSlider from "react-slider";
import { useState } from "react";

const PriceRange = () => {
  const min = 5;
  const max = 30;

  const [value, setValue] = useState([min, max]);

  return (
    <>
      <div className="price_slider_amount">
        <span>Your range:</span>
        <span>{value[0]}</span>
        <span>-</span>
        <span>{value[1]}</span>
      </div>

      <ReactSlider
        value={value}
        onChange={setValue}
        className="horizontal-slider"
        thumbClassName="cardealer-thumb"
        trackClassName="cardealer-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </>
  );
};

export default PriceRange;

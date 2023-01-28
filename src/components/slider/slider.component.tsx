import * as React from "react";
import SliderUnstyled, {
  SliderUnstyledThumbSlotProps,
  SliderUnstyledProps,
} from "@mui/base/SliderUnstyled";

import "./slider.css";

const getEmojifromValue = (value: number | undefined) => {
  if (!value) return "😡";
  if (value < 20) return "😡";
  if (value < 40) return "😟";
  if (value < 60) return "😐";
  if (value < 80) return "🙂";
  if (value >= 80) return "😄";
};

const EmojiThumb = React.forwardRef(function Thumb(
  props: SliderUnstyledThumbSlotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const {
    ownerState: { defaultValue },
    className = "",
    children,
    ...other
  } = props;
  const thumbValue = Array.isArray(defaultValue)
    ? defaultValue[0]
    : defaultValue;
  return (
    <span className={`${className} slider-thumb-wrapper`} {...other} ref={ref}>
      <span>{getEmojifromValue(thumbValue)}</span>
      {children}
    </span>
  );
});

const Slider = React.forwardRef(function Slider(
  props: SliderUnstyledProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <SliderUnstyled
      {...props}
      ref={ref}
      slots={{ thumb: EmojiThumb }}
      slotProps={{
        root: { className: "slider-root" },
        rail: { className: "slider-rail" },
        track: { className: "slider-track" },
      }}
    />
  );
});

export default Slider;

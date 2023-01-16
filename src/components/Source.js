import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateSource } from "../features/source/sourceSlice";

export default function Source() {
  const dispatch = useDispatch();
  const { source } = useSelector((store) => store.source);

  const handleChange = (event) => {
    dispatch(updateSource(event.target.value));
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Source</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={source}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="tungsten"
          control={<Radio />}
          label="Tungsten"
        />
        <FormControlLabel value="globar" control={<Radio />} label="Globar" />
      </RadioGroup>
    </FormControl>
  );
}

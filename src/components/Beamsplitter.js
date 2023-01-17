import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateBeamsplitter } from "../features/parameter/parameterSlice";

export default function Beamsplitter() {
  const dispatch = useDispatch();
  const { beamsplitter } = useSelector((store) => store.parameter);

  const handleChange = (event, newAlignment) => {
    dispatch(updateBeamsplitter(newAlignment));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Beamsplitter</FormLabel>
      <ToggleButtonGroup
        defaultValue={beamsplitter}
        value={beamsplitter}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="AR_ZnSe" style={{ textTransform: "none" }}>
          AR_ZnSe
        </ToggleButton>
        <ToggleButton value="AR_CaF2" style={{ textTransform: "none" }}>
          AR_CaF₂
        </ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
}

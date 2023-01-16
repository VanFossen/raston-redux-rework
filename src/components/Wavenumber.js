import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateMin, updateMax } from "../features/wavenumber/wavenumberSlice";

const Input = styled(MuiInput)`
  width: 52px;
`;

export default function Wavenumber() {
  const dispatch = useDispatch();
  const { minWave, maxWave } = useSelector((store) => store.wavenumber);

  const handleSliderChange = (event, newValue) => {
    dispatch(updateMin(newValue[0]));
    dispatch(updateMax(newValue[1]));
  };

  const handleInputChangeMin = (event) => {
    dispatch(
      updateMin(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleInputChangeMax = (event) => {
    dispatch(
      updateMax(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleBlur = () => {
    if (minWave > maxWave) {
      return;
    }
    if (minWave < 400) {
      updateMin(400);
    }
    if (maxWave > 12500) {
      updateMax(12500);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Wavenumber range (cm⁻¹)
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={minWave}
            size="small"
            onChange={handleInputChangeMin}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 400,
              max: 12500,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            value={[
              minWave === "" ? 400 : minWave,
              maxWave === "" ? 12500 : maxWave,
            ]}
            min={400}
            max={12500}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={maxWave}
            size="small"
            onChange={handleInputChangeMax}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 400,
              max: 12500,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

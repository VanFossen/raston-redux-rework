import "./App.css";

// components
import Beamsplitter from "./components/Beamsplitter";
import Detector from "./components/Detector";
import Molecule from "./components/Molecule";
import Pressure from "./components/Pressure";
import Resolution from "./components/Resolution";
import Scan from "./components/Scan";
import Source from "./components/Source";
import Spinner from "./components/Spinner";
import Wavenumber from "./components/Wavenumber";
import Window from "./components/Window";
import ZeroFill from "./components/ZeroFill";

import { useSelector } from "react-redux";

// redux-toolkit tutorial used: https://www.youtube.com/watch?v=bbkBuqC1rU4
export default function App() {
  const {
    beamsplitter,
    detector,
    molecule,
    pressure,
    resolution,
    scan,
    source,
    waveMin,
    waveMax,
    window,
    zeroFill,
  } = useSelector((store) => store.parameter);

  const { progress } = useSelector((store) => store.progress);

  return (
    <div className="App">
      <div>
        <div className="Parameter">
          <Wavenumber />
        </div>

        <div className="Parameter">
          <Pressure />
        </div>

        <div className="Parameter">
          <Scan />
        </div>

        <div className="Parameter">
          <Molecule />
        </div>

        <div className="Parameter">
          <Resolution />
        </div>

        <div className="Parameter">
          <ZeroFill />
        </div>

        <div className="Parameter">
          <Source />
        </div>

        <div className="Parameter">
          <Beamsplitter />
        </div>

        <div className="Parameter">
          <Window />
        </div>

        <div className="Parameter">
          <Detector />
        </div>

        <div className="Parameter">
          <Spinner />
        </div>
      </div>

      {progress ? (
        <div id="spinner" />
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Parameter</th>
              <th>User Input</th>
            </tr>
            <tr>
              <td>Wavenumber min</td>
              <td>{waveMin}</td>
            </tr>
            <tr>
              <td>Wavenumber min</td>
              <td>{waveMax}</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{pressure}</td>
            </tr>
            <tr>
              <td>Number of Scans</td>
              <td>{scan}</td>
            </tr>
            <tr>
              <td>Molecule</td>
              <td>{molecule}</td>
            </tr>
            <tr>
              <td>Resolution</td>
              <td>{resolution}</td>
            </tr>
            <tr>
              <td>Zero Fill</td>
              <td>{zeroFill}</td>
            </tr>
            <tr>
              <td>Source</td>
              <td>{source}</td>
            </tr>
            <tr>
              <td>Beamsplitter</td>
              <td>{beamsplitter}</td>
            </tr>
            <tr>
              <td>Cell Window</td>
              <td>{window}</td>
            </tr>
            <tr>
              <td>Detector</td>
              <td> {detector}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

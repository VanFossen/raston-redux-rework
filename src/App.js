import "./App.css";

// components
import Beamsplitter from "./components/Beamsplitter";
import Detector from "./components/Detector";
import Molecule from "./components/Molecule";
import Pressure from "./components/Pressure";
import Resolution from "./components/Resolution";
import Scan from "./components/Scan";
import Source from "./components/Source";
import Wavenumber from "./components/Wavenumber";
import Window from "./components/Window";
import ZeroFill from "./components/ZeroFill";

import { useSelector } from "react-redux";

// https://www.youtube.com/watch?v=bbkBuqC1rU4
export default function App() {
  const { beamsplitter } = useSelector((store) => store.beamsplitter);
  const { detector } = useSelector((store) => store.detector);
  const { molecule } = useSelector((store) => store.molecule);
  const { pressure } = useSelector((store) => store.pressure);
  const { resolution } = useSelector((store) => store.resolution);
  const { scan } = useSelector((store) => store.scan);
  const { source } = useSelector((store) => store.source);
  const { minWave, maxWave } = useSelector((store) => store.wavenumber);
  const { window } = useSelector((store) => store.window);
  const { zeroFill } = useSelector((store) => store.zeroFill);

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
      </div>

      <table>
        <tbody>
          <tr>
            <th>Parameter</th>
            <th>User Input</th>
          </tr>
          <tr>
            <td>Wavenumber min</td>
            <td>{minWave}</td>
          </tr>
          <tr>
            <td>Wavenumber min</td>
            <td>{maxWave}</td>
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
    </div>
  );
}

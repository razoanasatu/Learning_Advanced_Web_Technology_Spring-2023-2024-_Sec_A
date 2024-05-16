import Education from "./components/Education";
import Experience from "./components/Experience";
import ExtracurricularActivities from "./components/ExtracurricularActivities";
import Header from "./components/header";
import Objective from "./components/Objective";
import References from "./components/References";
import Signature from "./components/Signature";
import Skills from "./components/Skills";
import Thesis from "./components/Thesis";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Objective />
      <Education />
      <Experience />
      <Skills />
      <Thesis />
      <ExtracurricularActivities />
      <Signature />
      <References />
    </div>
  );
};

export default App;

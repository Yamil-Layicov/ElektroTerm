import { useRoutes } from "react-router-dom";
import routes from "./routes/Routes";

const App = () => {

  return (
    <>
      {useRoutes(routes)}
    </>
  );
};

export default App;

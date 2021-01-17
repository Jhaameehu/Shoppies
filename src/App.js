import "./App.css";
import Header from "../src/components/header/Header";

import Search from "../src/components/search/Search";

// import "animate.css";

function App() {
  return (
    <div className="App">
      <div>
          <Header />

      </div>
        <div className="main">
          <Search />
        </div>
        <div className='sidebar'>

        <div className='sidebar_widget'>
        
        </div>
        </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { ScrollManager } from "./util/ScrollManager";
import './App.css';

const text = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "

function App() {
  // https://reactscript.com/parallax-scroll-images-backgrounds/
  const [scrollTop,setScrollTop] = useState(null);

  console.log(window.scrollY);

  const scrollHandler = (e) => {
    // Get scroll value and modify any css
    // console.log(e.target.scrollHeight, "Height");
    // console.log(e.target.scrollTop, "Top");
    setScrollTop(e.target.scrollTop);
    // console.log(e.target.clientHeight);
  };

  useEffect(() => {

    // ScrollManager([["header",1],[".container",0.3],[".container-2",0.4]]);

    // window.addEventListener("scroll", function(e) {
    //     const distance = window.scrollY;
        
    //     console.log(window.scrollY);
    // });

  },[]);

  return (
    // <main>
    //   <header>
    //     <div className="container">
    //       <i className="fas fa-5x fa-laugh"></i>
    //       <h3>Welcome</h3>
    //       <p>Scroll to see how cool i am!</p>
    //     </div>

    //     <div className="container-2">
    //       <i className="fas fa-5x fa-laugh"></i>
    //       <h3>Welcome</h3>
    //       <p>This is getting better!!!!</p>
    //     </div>
    //   </header>

    //   <section>
    //     <h3>Cool like you</h3>
    //     <h4>Cool like you!!!</h4>
    //   </section>
    // </main>
    <main className="main-container">

      <div className="container-1-prx">
        <div onScroll={(e) => scrollHandler(e)} className="c1-prx">
          {/* <p>{text}</p> */}
          <div className="c1bg-prx"></div>
          <div className="c1bg2-prx"></div>
        </div>

        <div onScroll={(e) => scrollHandler(e)} className="c2-prx">
          {/* <p>{text}</p> */}
          <div className="c1bg-prx"></div>
          <div className="c1bg2-prx"></div>
        </div>
      </div>
      <p style={{color: "white"}}>{ scrollTop }</p>
    </main>
  );
}

export default App;

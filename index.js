//  <div id="parent">
//     <h3 id="child">hello</h3>
//       <h3 id="son">react</h3>
// </div>
// <h3>hello</h3> 

import ReactDOM from "react-dom/client"

const App = () =>{
return(
    <div>
    <div>
        <Scndjsx/>
    </div>

    <div>
        <Card/>
    </div></div>
)

}

const Scndjsx = () =>{
    return(
        <div>
            <header className="header">
                <div >
                          <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-768x432.png"/>
                </div>
                <div className="navbar">
                        <ul>
                            <li><a href="">Search</a></li>
                            <li><a href="">Offers</a></li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Sign in</a></li>
                            <li> <a href="">Cart</a></li>
                            
                        </ul>
                </div>
            </header>
        </div>
    )}
    const Card = () => {
        return(
            
            <div className="card-header">
                <div className="card-hover">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/huutib5qajqimczhdkhi" alt="" />
                      <h3>Aminia Restaurant</h3>  
                      <p>4.3* | 40-45 mins</p>  
                </div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/huutib5qajqimczhdkhi" alt="" />
                      <h3>Aminia Restaurant</h3>  
                      <p>4.3* | 40-45 mins</p>  
                </div>
            </div>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App/>);
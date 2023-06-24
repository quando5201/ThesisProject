import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  Login  from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userColumns, bookColumns, slotColumns } from "./datatablesource"; 
import NewBook from "./pages/newBook/NewBook";
import NewSlot from "./pages/newSlot/NewSlot";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => { //protected admin permission, if refresh --> login page.
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/"> 
            <Route path="login" element={<Login/>}/> {/* define path for what component */}
            <Route index 
              element={ 
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute> 
              } 
            />   
            <Route path= "users"> {/* define path for what component */}
            <Route
                index
                element={
                  <ProtectedRoute>
                    <List  columns={userColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route //define path for what component
                path=":userId" 
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route 
                path="new" //define path for what component
                element= {
                <ProtectedRoute>
                  <New inputs = {userInputs} title="Add New User"/>
                </ProtectedRoute>
                }/>
            </Route>
            <Route path= "books"> {/* define path for what component */}
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={bookColumns} /> 
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId" //define path for what component
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />              
              <Route 
                path="new" //define path for what component
                element= {
                  <ProtectedRoute>
                    <NewBook />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="slots"> {/* define path for what component */}
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={slotColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId" //define path for what component
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new" //define path for what component
                element={
                  <ProtectedRoute>
                    <NewSlot  />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

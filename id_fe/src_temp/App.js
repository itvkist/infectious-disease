import React, { useEffect, useState } from 'react';
import Header from "components/Header.js";
import Footer from "components/SimpleFooter.js";
import logo from './logo.svg';
import './style.css';


function App() {
  const [user, setUser] = useState(null);
  const [disease, setDisease] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [blogTag, setBlogTag] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    getDiseases().then((res) => setDisease(res.data.data));
    getCassavas().then((res) => setCassava(res.data.data));
    getAllMapData().then((districts) => {
      setMapData({ districts: districts });
    });
    getBlogTag().then((res) => {
      if (res?.data?.data) {
        const blogTags = res.data.data.map((tag) => ({
          ...tag,
          label: tag.vn_name,
          value: tag.name,
        }));
        setBlogTag(blogTags);
      }
    });
  }, []);

  return (
      <Context.Provider
        value={{
          user: user,
          setUser: setUser,
          disease: disease,
          setDisease: setDisease,
          mapData: mapData,
          setMapData: setMapData,
          blogTag: blogTag,
          setBlogTag: setBlogTag,
        }}
      >
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="content-full">
                  <Outlet />
                </div>
              }
            >
              <Route path=":page" element={<ComponentRenderer />} />
              <Route path=":page/:id" element={<ComponentRenderer />} />
              <Route path="/" element={<ComponentRenderer />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </Context.Provider>
  );
}

export default App;

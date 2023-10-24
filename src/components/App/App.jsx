import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "components/global/Header";
import { Loader } from "components/Loader";

const Home = lazy(() => import('../pages/Home/Home'))
const Search = lazy(() => import('../pages/Search/Search'))
const Movie = lazy(() => import('../pages/Movie/Movie'))

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />} >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="search/:id" element={<Movie />} />
            {/* <Route path="*" element={<NotFound />} />  */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

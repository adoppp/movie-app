import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "components/global/Header";
import { Trending } from "components/Trending";

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>} >
          <Routes >
            <Route path="/" element={<Trending />} />
            <Route path="/search" element={<div>2</div>} />
            {/* <Route path="movies/:moviesId" element={<MovieCard />}>
              <Route path='cast' element={<Credits />} />
              <Route path='reviews' element={<Reviews /> } />
            </Route>
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

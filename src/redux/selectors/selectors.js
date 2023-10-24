export const filmSelector = state => state.filmsReducer.items;

export const querySelector = state => state.filmsReducer.query;

export const loaderSelector = state => state.filmsReducer.isLoading;

export const errorSelector = state => state.filmsReducer.error;

export const detailsSelector = state => state.filmsReducer.movieDetails;

export const actorsSelector = state => state.filmsReducer.actors;

export const reviewsSelector = state => state.filmsReducer.reviews;
// import fetch from 'node-fetch'; this is more for Boomtown (see graphQL slides, slide 40)
import {
  data
} from './data';

const resolveFunctions = {
  Query: {
    movies() {
      return data.movies;
    },
    movie(root, {
      id
    }) {
      return data.movies.find(movie => movie.id === parseInt(id));
    },
  
    people() {
      return data.people;
    },
    person(root, {
      id
    }) {
      return data.people.find(person => person.id === parseInt(id));
    },
  },
  Movie: {
    director(movie) {
      if (!movie.director) return null
      return data.people.find(person => person.id === movies.director)
    },
    stars(movie) {
      return data.people.filter(person => (
        person.filmography.find(credit => (
          credit === movie.id && person.id !== movie.director
        ))
      ))
    },
  },  
    Person: {
      filmography(person) {
        return data.movies.filter(movie => (
          person.filmography.find(credit => (
            credit === movie.id
          ))
        ))
      },

    }
  }

export default resolveFunctions;
export const data = {
  people: [
    {
      id: 1,
      name: 'Mark Hamill',
      birthday: 'September 25, 1951',
      placeOfBirth: 'Oakland, California, USA',
      bio: 'Mark Hamill is best known for his portrayal of Luke Skywalker in the original Star Wars trilogy.',
      filmography: [1]
    },
    {
      id: 2,
      name: 'Harrison Ford',
      birthday: 'July 13, 1942',
      placeOfBirth: 'Chicago, Illinois, USA',
      bio: 'Harrison Ford was born on July 13, 1942 in Chicago, Illinois, to Dorothy (Nidelman), a radio actress, and Christopher Ford (born John William Ford), an actor turned advertising executive.',
      filmography: [1, 2]
    },
    {
      id: 3,
      name: 'Carrie Fisher',
      birthday: 'October 21, 1956',
      placeOfBirth: 'Burbank, California, USA',
      bio: 'Carrie Frances Fisher was born on October 21, 1956 in Beverly Hills, Los Angeles, California, to singers/actors Eddie Fisher and Debbie Reynolds.',
      filmography: [1]
    },
    {
      id: 4,
      name: 'Karen Allen',
      birthday: 'October 5, 1951',
      placeOfBirth: 'Carrollton, Illinois, USA',
      bio: 'Karen Jane Allen was born in Carrollton, rural southern Illinois, to Patricia (Howell), a teacher, and Carroll Thompson Allen, an FBI agent.',
      filmography: [2]
    },
    {
      id: 5,
      name: 'George Lucas',
      birthday: 'May 14, 1944',
      placeOfBirth: 'Modesto, California, USA',
      bio: 'George Walton Lucas, Jr. was raised on a walnut ranch in Modesto, California. His father was a stationery store owner and he had three siblings.',
      filmography: [1]
    },
    {
      id: 6,
      name: 'Steven Spielberg',
      birthday: 'December 18, 1946',
      placeOfBirth: 'Cincinnati, Ohio, USA',
      bio: 'Undoubtedly one of the most influential film personalities in the history of film, Steven Spielberg is perhaps Hollywood\'s best known director and one of the wealthiest filmmakers in the world.',
      filmography: [2]
    }
  ],
  movies: [
    {
      id: 1,
      title: 'Star Wars: Episode IV - A New Hope',
      releaseDate: '25 May 1977',
      stars: [1, 2, 3],
      director: 5,
    },
    {
      id: 2,
      title: 'Raiders of the Lost Ark',
      releaseDate: '12 June 1981',
      stars: [2, 4],
      director: 6
    }
  ]
};
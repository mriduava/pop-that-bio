movies
  title        String
  length       Number (minutes)
  ageLimit     Number
  description   [String] (each paragraph is an item)
  genre           [String]
  directors       [String]
  actors          [String]
  posterImage     [String]  (do we need an array?)
  trailerUrls     [String]  (do we need an array?)
  
  
prices
  movieId
  ageCategory one of ['child', 'adult', 'senior' ]
  price Number

screenings
  movieId
  auditorIums
  startTime timestamp/Number (seconds/ms since 1970-01-01 GMT)


bookings
  screeningId
  numberofChildren Number
  numberOfAdults Number
  numberOfSeniors Number
  seatNumbers [Number]
  userFriendlyBookingId (we already have a automatically generated id/key,
  but should we generate a shorter on for user convience?)

products/prices
auditoriums
  name 
  seatsPerRow [Number] (important to know if item 0 is first or last row)

user/accounts (needed in the first place)
  email String (if our database can validate format)
  passWord String (? can we one-way encrypt to database + requirements
  length etc)
  firstName
  lastName
  address
  bookings [bookingIds]


(directors)
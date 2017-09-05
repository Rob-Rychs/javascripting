hotel = {
  name: 'The Quay',
  totalNumberOfRooms: 40,
  roomsBooked: 25,
  typesOfRooms: ['twin', 'double', 'suite'],
  checkAvailability: function() {
     return this.totalNumberOfRooms - this.roomsBooked;
  }
};

for (var i = 0; i < hotel.typesOfRooms.length; i++) {
  console.log(hotel.typesOfRooms[i]);
}

hotel.roomsBooked = 30;

alert(hotel.checkAvailability());
class Movie {
  constructor(title, duration, seatCapacity, ticketPrice) {
    this.title = title;
    this.duration = duration;
    this.seatCapacity = seatCapacity;
    this.ticketPrice = ticketPrice;
    this.bookedSeats = new Set();
  }
}

class Show {
  constructor(movie, showTime, theaterName) {
    this.movie = movie;
    this.showTime = showTime;
    this.theaterName = theaterName;
    this.bookedSeats = new Set(); 
  }

  showDetails() {
    console.log(`Theater Name: ${this.theaterName}`);
    console.log(`Show Time: ${this.showTime}`);
    console.log(`Movie Title: ${this.movie.title}`);
    console.log(`Duration: ${this.movie.duration} minutes`);
    console.log(`Seat Capacity: ${this.movie.seatCapacity}`);
    console.log(`Ticket Price: ${this.movie.ticketPrice} Rs`);
    console.log(`Available Seats: ${this.movie.seatCapacity - this.bookedSeats.size}`);
    console.log('-');
  }

  bookTickets(seatNumbers) {
    for (const seatNumber of seatNumbers) {
      if (!this.bookedSeats.has(seatNumber)) {
        this.bookedSeats.add(seatNumber);
        console.log(`Booked seat ${seatNumber}`);
      } else {
        console.log(`Seat ${seatNumber} is already booked.`);
      }
    }
  }

  cancelTickets(seatNumbers) {
    for (const seatNumber of seatNumbers) {
      if (this.bookedSeats.has(seatNumber)) {
        this.bookedSeats.delete(seatNumber);
        console.log(`Cancelled booking for seat ${seatNumber}`);
      } else {
        console.log(`Seat ${seatNumber} is not booked.`);
      }
    }
  }
}

class Theater {
  constructor(name) {
    this.name = name;
    this.shows = [];
  }

  addShow(show) {
    this.shows.push(show);
  }

  showDetail() {
    console.log(`Theater Name: ${this.name}`);
    for (const show of this.shows) {
      show.showDetails();
    }
  }
}

const theater = new Theater("Cinemaplex");

const movie1 = new Movie("Avatar", 180, 100, 200);
const movie2 = new Movie("Bramhastra", 180, 100, 200);
const movie3 = new Movie("Dangal", 180, 100, 200);

const show1 = new Show(movie1, "3:00 PM", theater.name);
const show2 = new Show(movie2, "6:00 PM", theater.name);
const show3 = new Show(movie3, "9:00 PM", theater.name);

theater.addShow(show1);
theater.addShow(show2);
theater.addShow(show3);

show1.bookTickets([1, 2, 3, 4]);
show1.cancelTickets([1, 2,9]);
show1.showDetails();

show2.bookTickets([1, 5, 6, 7]);
show2.cancelTickets([5, 7,8]);
show2.showDetails();

show3.bookTickets([1, 9, 6, 7]);
show3.cancelTickets([5, 7]);
show3.bookTickets([4, 6]);
show3.showDetails();

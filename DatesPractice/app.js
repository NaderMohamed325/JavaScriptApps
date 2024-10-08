let events = [
    {
      name: "Tech Conference",
      date: new Date("2024-12-15"),
      venue: "Expo Center",
    },
    { name: "Music Fest", date: new Date("2024-10-20"), venue: "Open Grounds" },
    { name: "Startup Pitch", date: new Date("2024-09-25"), venue: "Tech Hub" },
    { name: "Developer Meetup", date: new Date("2024-11-10"), venue: "Tech Hub" },
    {
      name: "Art Exhibition",
      date: new Date("2024-11-01"),
      venue: "Expo Center",
    },
  ];
  
  // Function to get upcoming events
  const getUpcomingEvents = (EventArr) => {
    return EventArr.filter((event) => new Date() < event.date);
  };
  
  // Function to get past events
  const getPastEvents = (EventArr) => {
    return EventArr.filter((event) => new Date() > event.date);
  };
  
  // Function to get unique venues using Set
  const manageVenues = (EventArr) => {
    let UniqueEvents = new Set();
    EventArr.forEach((element) => {
      UniqueEvents.add(element.venue);
    });
    return UniqueEvents;
  };
  
  // Function to group events by venue using Map
  const groupEventsByVenue = (EventsArr) => {
    let Mp = new Map();
    EventsArr.forEach((event) => {
      let ven = event.venue;
      if (!Mp.has(ven)) {
        Mp.set(ven, []);
      }
      Mp.get(ven).push(event.name); 
    });
    return Mp.entries();
  };
  
  console.log("Upcoming Events: ", getUpcomingEvents(events));
  console.log("Past Events: ", getPastEvents(events));
  console.log("Unique Venues: ", manageVenues(events));
  console.log("Events Grouped by Venue: ", groupEventsByVenue(events));
  
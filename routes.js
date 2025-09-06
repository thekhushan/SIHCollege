const routesData = [
  {
    id: "bus1",
    start: "Lal Darwaja",
    end: "Krushnanagar",
    stops: [
      { name: "Lal Darwaja", lat: 23.0216, lng: 72.5800 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "Delhi Darwaja", lat: 23.0365, lng: 72.5858 },
      { name: "Shahibaug", lat: 23.0511, lng: 72.5981 },
      { name: "Krushnanagar", lat: 23.0660, lng: 72.6290 }
    ]
  },
  {
    id: "bus2",
    start: "Gujarat University",
    end: "Hatkeshwar",
    stops: [
      { name: "Gujarat University", lat: 23.0338, lng: 72.5486 },
      { name: "Law Garden", lat: 23.0220, lng: 72.5715 },
      { name: "Manek Chowk", lat: 23.0213, lng: 72.5886 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "Hatkeshwar", lat: 23.0055, lng: 72.6293 }
    ]
  },
  {
    id: "bus3",
    start: "Vastrapur Lake",
    end: "RTO Circle",
    stops: [
      { name: "Vastrapur Lake", lat: 23.0301, lng: 72.5293 },
      { name: "IIM Ahmedabad", lat: 23.0305, lng: 72.5460 },
      { name: "Panjarapole", lat: 23.0228, lng: 72.5544 },
      { name: "Income Tax", lat: 23.0392, lng: 72.5712 },
      { name: "RTO Circle", lat: 23.0576, lng: 72.5910 }
    ]
  },
  {
    id: "bus4",
    start: "Sarkhej",
    end: "Naroda",
    stops: [
      { name: "Sarkhej", lat: 22.9938, lng: 72.5017 },
      { name: "Juhapura", lat: 23.0008, lng: 72.5294 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "Kankaria", lat: 23.0065, lng: 72.6031 },
      { name: "Naroda", lat: 23.0712, lng: 72.6650 }
    ]
  },
  {
    id: "bus5",
    start: "Sabarmati",
    end: "CTM",
    stops: [
      { name: "Sabarmati", lat: 23.0896, lng: 72.5800 },
      { name: "RTO Circle", lat: 23.0576, lng: 72.5910 },
      { name: "Shahibaug", lat: 23.0511, lng: 72.5981 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "CTM", lat: 23.0050, lng: 72.6290 }
    ]
  },
  {
    id: "bus6",
    start: "Maninagar",
    end: "Vastrapur Lake",
    stops: [
      { name: "Maninagar", lat: 23.0065, lng: 72.6020 },
      { name: "Kankaria Lake", lat: 23.0060, lng: 72.6040 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "IIM Ahmedabad", lat: 23.0305, lng: 72.5460 },
      { name: "Vastrapur Lake", lat: 23.0301, lng: 72.5293 }
    ]
  },
  {
    id: "bus7",
    start: "Bopal",
    end: "Kalupur",
    stops: [
      { name: "Bopal", lat: 23.0305, lng: 72.4670 },
      { name: "ISCON Cross Road", lat: 23.0300, lng: 72.5080 },
      { name: "Gujarat University", lat: 23.0338, lng: 72.5486 },
      { name: "Ashram Road", lat: 23.0410, lng: 72.5710 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 }
    ]
  },
  {
    id: "bus8",
    start: "Chandkheda",
    end: "Lal Darwaja",
    stops: [
      { name: "Chandkheda", lat: 23.1197, lng: 72.5856 },
      { name: "Sabarmati", lat: 23.0896, lng: 72.5800 },
      { name: "RTO Circle", lat: 23.0576, lng: 72.5910 },
      { name: "Shahpur", lat: 23.0401, lng: 72.5742 },
      { name: "Lal Darwaja", lat: 23.0216, lng: 72.5800 }
    ]
  },
  {
    id: "bus9",
    start: "Narol",
    end: "Science City",
    stops: [
      { name: "Narol", lat: 22.9735, lng: 72.6021 },
      { name: "Maninagar", lat: 23.0065, lng: 72.6020 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "University", lat: 23.0338, lng: 72.5486 },
      { name: "Science City", lat: 23.1087, lng: 72.5108 }
    ]
  },
  {
    id: "bus10",
    start: "Vastral",
    end: "Juhapura",
    stops: [
      { name: "Vastral", lat: 23.0200, lng: 72.6500 },
      { name: "Rakhial", lat: 23.0330, lng: 72.6230 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "Juhapura", lat: 23.0008, lng: 72.5294 }
    ]
  },
  // ✅ Continue adding until bus50 …
    {
    id: "bus11",
    start: "CTM",
    end: "Sola",
    stops: [
      { name: "CTM", lat: 23.0050, lng: 72.6290 },
      { name: "Amraiwadi", lat: 23.0176, lng: 72.6250 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "Ashram Road", lat: 23.0410, lng: 72.5710 },
      { name: "Sola", lat: 23.0798, lng: 72.5229 }
    ]
  },
  {
    id: "bus12",
    start: "Odhav",
    end: "Sarkhej",
    stops: [
      { name: "Odhav", lat: 23.0386, lng: 72.6700 },
      { name: "Amraiwadi", lat: 23.0176, lng: 72.6250 },
      { name: "Maninagar", lat: 23.0065, lng: 72.6020 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "Sarkhej", lat: 22.9938, lng: 72.5017 }
    ]
  },
  {
    id: "bus13",
    start: "Science City",
    end: "Lal Darwaja",
    stops: [
      { name: "Science City", lat: 23.1087, lng: 72.5108 },
      { name: "Sola", lat: 23.0798, lng: 72.5229 },
      { name: "Gujarat University", lat: 23.0338, lng: 72.5486 },
      { name: "Law Garden", lat: 23.0220, lng: 72.5715 },
      { name: "Lal Darwaja", lat: 23.0216, lng: 72.5800 }
    ]
  },
  {
    id: "bus14",
    start: "Naroda",
    end: "ISRO",
    stops: [
      { name: "Naroda", lat: 23.0712, lng: 72.6650 },
      { name: "Krushnanagar", lat: 23.0660, lng: 72.6290 },
      { name: "Shahibaug", lat: 23.0511, lng: 72.5981 },
      { name: "Sabarmati", lat: 23.0896, lng: 72.5800 },
      { name: "ISRO", lat: 23.1010, lng: 72.5460 }
    ]
  },
  {
    id: "bus15",
    start: "Bopal",
    end: "CTM",
    stops: [
      { name: "Bopal", lat: 23.0305, lng: 72.4670 },
      { name: "ISCON Cross Road", lat: 23.0300, lng: 72.5080 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "CTM", lat: 23.0050, lng: 72.6290 }
    ]
  },
  {
    id: "bus16",
    start: "Thaltej",
    end: "Maninagar",
    stops: [
      { name: "Thaltej", lat: 23.0500, lng: 72.5020 },
      { name: "Vastrapur", lat: 23.0301, lng: 72.5293 },
      { name: "IIM Ahmedabad", lat: 23.0305, lng: 72.5460 },
      { name: "Law Garden", lat: 23.0220, lng: 72.5715 },
      { name: "Maninagar", lat: 23.0065, lng: 72.6020 }
    ]
  },
  {
    id: "bus17",
    start: "Shilaj",
    end: "Kalupur",
    stops: [
      { name: "Shilaj", lat: 23.0555, lng: 72.4800 },
      { name: "Thaltej", lat: 23.0500, lng: 72.5020 },
      { name: "Sola", lat: 23.0798, lng: 72.5229 },
      { name: "Ashram Road", lat: 23.0410, lng: 72.5710 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 }
    ]
  },
  {
    id: "bus18",
    start: "Ranip",
    end: "CTM",
    stops: [
      { name: "Ranip", lat: 23.0950, lng: 72.5710 },
      { name: "RTO Circle", lat: 23.0576, lng: 72.5910 },
      { name: "Shahibaug", lat: 23.0511, lng: 72.5981 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "CTM", lat: 23.0050, lng: 72.6290 }
    ]
  },
  {
    id: "bus19",
    start: "Isanpur",
    end: "Sola",
    stops: [
      { name: "Isanpur", lat: 22.9836, lng: 72.6036 },
      { name: "Maninagar", lat: 23.0065, lng: 72.6020 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "University", lat: 23.0338, lng: 72.5486 },
      { name: "Sola", lat: 23.0798, lng: 72.5229 }
    ]
  },
  {
    id: "bus20",
    start: "Sarkhej",
    end: "Naroda Patiya",
    stops: [
      { name: "Sarkhej", lat: 22.9938, lng: 72.5017 },
      { name: "Juhapura", lat: 23.0008, lng: 72.5294 },
      { name: "Paldi", lat: 23.0123, lng: 72.5623 },
      { name: "Kalupur", lat: 23.0265, lng: 72.6026 },
      { name: "Naroda Patiya", lat: 23.0700, lng: 72.6400 }
    ]
  },

];

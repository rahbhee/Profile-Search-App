import React, { useState } from 'react';

function ProfileSearch() {
  const [query, setQuery] = useState('');
  const [profiles, setProfiles] = useState([
    {
        "id": "60d0fe4f5311236168a109f5",
        "title": "ms",
        "firstName": "Charlotte",
        "lastName": "Legrand",
        "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109f6",
        "title": "miss",
        "firstName": "Madison",
        "lastName": "Ambrose",
        "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fa",
        "title": "ms",
        "firstName": "Ann",
        "lastName": "Mason",
        "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fb",
        "title": "mr",
        "firstName": "Sohan",
        "lastName": "Pierre",
        "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109fc",
        "title": "mr",
        "firstName": "Gonzaga",
        "lastName": "Ribeiro",
        "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109ff",
        "title": "mrs",
        "firstName": "Josefina",
        "lastName": "Calvo",
        "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a00",
        "title": "mrs",
        "firstName": "Els",
        "lastName": "Ijsseldijk",
        "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a01",
        "title": "mr",
        "firstName": "Jesus",
        "lastName": "Riley",
        "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a03",
        "title": "mr",
        "firstName": "Andri",
        "lastName": "Leclerc",
        "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
    },
    {
        "id": "60d0fe4f5311236168a10a04",
        "title": "mr",
        "firstName": "Konsta",
        "lastName": "Manninen",
        "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
    }

  ]);
  
  const filteredProfiles = profiles.filter(profile => {
    const firstName = profile.firstName.toLowerCase();
    const lastName = profile.lastName.toLowerCase();
    return firstName.includes(query) || lastName.includes(query);
  });
  
  return (
    <div className="profilecontainer">
      <input type="text" placeholder="Search by name..." value={query} onChange={e => setQuery(e.target.value)} />
      <div>
        {filteredProfiles.map(profile => (
            <li key={profile.lastName}>
            <p>{profile.id}</p>
            <h3>{profile.title} {profile.firstName} {profile.lastName}</h3>
            <h3></h3>
            <p></p>
            <img src={profile.picture} alt={profile.firstName} />
          </li>
        ))}
      </div>
      </div>
  );
}

export default ProfileSearch;

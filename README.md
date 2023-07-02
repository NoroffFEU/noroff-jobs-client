# Noroff Jobs TypeScript API Client

Welcome to the **Noroff Jobs TypeScript API Client**,  a Work In Progress (WIP) package developed for the student-run recruitment platform, Noroff Jobs. This project is maintained and developed by students as a part of the FEU Industry Knowledge course. The primary objective of this API client is to provide an intuitive and user-friendly interface for interacting with the Noroff Jobs API.

## Purpose of the API Client

The Noroff Jobs API Client aims to simplify communication with the Noroff Jobs API by abstracting away the complexities of HTTP requests and handling API responses. With this TypeScript package, developers can seamlessly integrate the Noroff Jobs API into their applications, focusing on implementing features and functionality without worrying about the low-level details of API calls.

## Project Status

As this package is a Work In Progress, it is not recommended for use until an official release is created. The API and its details may undergo changes as it is in an unstable stage of development.

In the following sections, we will cover usage scenarios, contributing guidelines, and how to get support if you have questions or need assistance.

## Usage Scenarios

`Login.jsx`

In this example, a simple login component is demonstrated, using the Noroff Jobs API client to authenticate the user.

```jsx
import React, { useState } from 'react';
import { Agency } from 'noroff-agency-client';

const agency = new Agency();

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const profile = await agency.auth.login(username, password);
      console.log('Login successful:', profile);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

`CreateListing.jsx`

In this example, a simple form component is created for submitting a new job listing using the Noroff Jobs API client.

```jsx
import React, { useState } from 'react';
import { Agency } from 'noroff-agency-client';

const agency = new Agency();

const CreateListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const newListing = await agency.listings.create({
        title,
        description,
      });
      console.log('New listing created:', newListing);
    } catch (error) {
      console.error('Failed to create listing:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Listing</button>
    </div>
  );
};

export default CreateListing;
```

## Contributing

You are encouraged to contribute to the development of this TypeScript API client. To contribute, please follow these steps:

1.  Fork this repository.
2.  Create a branch for your feature task or bugfix.
3.  Implement your changes, adhering to the code style and conventions already in place.
4.  Submit a pull request with a detailed description of your changes.

## Questions and Support

If you have any questions or need assistance, please contact your coach or instructor.

Happy coding!

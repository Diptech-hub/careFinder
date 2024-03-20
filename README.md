# CareFinder

Carefinder is a simple tool that aims to help users find, export, and share hospitals within the region. Carefinder is a web application built using Vite, React, and TypeScript. It leverages Firebase for authentication, storage, and synchronic database functionalities.

## Features

– **Hospital Search:** Users can input their location or select from a list of nearby cities to find hospitals in their area. The platform will list hospitals and their respective contact details, including address, phone number, and email.

– **Export Hospitals:** Users are allowed to export the list of hospitals to a CSV file, making it easy to save and share the information.

– **Share Hospitals:** Users are allowed to share the list of hospitals with others. Users can share the information via email or by generating a shareable link.

– **User Authentication:** Carefinder requires admin users to create an account to access the platform’s admin features. It supports multiple authentication methods, including email/password and social media logins.

– **Markdown Support:** Admin users are allowed to write content(create hospital entries and corresponding details) with a markdown. This feature makes it easy for users to format their content, add links, and insert images. Public users are aswell allowed to give reviews using a markdown editor

## Technologies used

- **Vite:** Vite is a next generation build tool designed for modern web applications. It was used to set up the project, provide a development server, and optimize the application's build process.
- **ReactJs:** React is a popular JavaScript library for web and native user interfaces. It was used to build the frontend of this application as it allows the build of user interfaces out of individual pieces called components.
- **Typescript:** TypeScript extends JavaScript by adding types to the language. It speeds up development and helps catch errors early in the development and provides fixes.
- **Firebase:** Firebase is an app development platform that helps you build and grow apps.
- **React-Router:** React Router is a popular routing library for React applications. It enables navigation and routing functionality in Hospital Carefinder, allowing users to move between different pages and components seamlessly.
  _check through package.json for other packages used to develop careFinder._

## Getting Started with CareFinder

To run Carefinder locally, follow these steps:

1. Clone the Carefinder repository from GitHub.

    ````shell
    git clone https://github.com/your-username/careFinder.git

Navigate to the project directory
    ```shell
    cd careFinder

2. Install the necessary dependencies using npm or yarn.

    ```shell
    npm install

3. Configure Firebase for data storage, authentication, and email functionality.

- Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
 - Enable the following firebase packages Firebase Authentication, Firestore, and Cloud Storage in your project settings.
 - Obtain the necessary Firebase project credentials (API key, project ID, etc.).
 - Update the Firebase configuration in the source code of the Carefinder application.

4. Implement the frontend features according to the provided requirements and guidelines.

5. Test the application locally to ensure all features are functioning as expected.

    ```shell
    npm run dev

6. Deploy the application to a hosting service such as Firebase Hosting or Netlify for public access.

## Contributing

Contributions to Carefinder are welcome! If you would like to contribute to the project, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding conventions and guidelines.

## License

Carefinder is open-source software licensed under the MIT License. Feel free to use, modify, and distribute the software according to the terms of the license.



````

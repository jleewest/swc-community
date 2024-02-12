# Writers Club Community Collaboration Forum
This project was created to provide a user-friendly space for writers to communicate and collaborate online.


### Key Components
After the user logs in, they are taken to the homepage/dashboard. From the dashboard, users can access their saved groups, browse for new groups, and add new groups. Each group page is comprised of a list of topics as well as a form to submit a new topic. Users can click on a topic to view all posts associated with that topic.

As a web application designed to be user-friendly, the core design emphasizes minimal features and transparency of features. Therefore, this application is comprised of only the core features, all navigations routes are displayed in an open navigation bar, and all buttons are clearly labeled so the user does not have to search or interpret icons to navigate the page.

### Getting Started

- The SWC-Community folder contains a full-stack application with two sub-folders: client and server. Inside each of them, run `npm install` to install the required dependencies.
  
- You will need to create your own authorization account and project folder with Clerk: [https://clerk.com/](https://clerk.com/)
  
- This application uses Dotenv to store configurations for this code. You will need to create a `.env` file in both the client and server root of your project and then add your personal environment variables for the following:
  
  - Client: `VITE_CLERK_PUBLISHABLE_KEY` (this will be equal to the publishable key you are provided in Clerk) and `VITE_BASE_URL` (this will be equal to your server localhost or url).
    
  - Server: `PORT` (this will be your server port), `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_HOST`, and `DATABASE_PORT` (Database will be configured with Postgres through Sequelize).
    
- Once your environment is set up, you can use the command `npm run dev` from each root folder to run the code. Notice that both the client and the server need to be running for the application to work

### Tech Stack
This application uses Node.js with Express.js on the backend with Sequelize and PostgresSQL to manage data storage. On the frontend, this application uses React with Vite and Javascript, CSS for styling, and Clerk for login authentication.

### Future Features for Development
- [ ] Add a 'Members' page that allows Users to view all members in the club and to send emails to other members directly without publicly sharing contact information
  
- [ ] Add button/page for Users to edit their own profile
  
- [ ] Add Administrator/Moderator/User specific restrictions and permissions to add, edit, delete topics, groups, and memebers.
  
- [ ] Allow Users to upload/download files
  
- [ ] Allow Users to upload their own image as a group thumbnail
  
- [ ] Allow Users to reply within individual comments within each group topic
  
- [ ] Add functioning to Save (pins topic to top of group list) and Report (contacts Administrator) buttons
  
- [ ] Add 'FAQ' section to allow Users easier answers to technical questions around navigating the application
  
- [ ] Add 'Contact Administrator' to email Administrator directly with questions/concerns
  
- [ ] Add functioning to search bar/ add filter bar for groups and topics
  
- [ ] Render Navigation Bar to be more user-friendly by allowing it to remain visible while scrolling as well as keeping the current page highlighted/active on the Navigation Bar display
  

### Figma and dbdiagram Models
![Screenshot 2024-01-17 110031](https://github.com/jleewest/swc-community/assets/132169274/35d95d65-cf1b-4b4e-b6c9-80a041201522)

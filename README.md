# Writers Club Community Collaboration Forum
This project was created to provide a user-friendly space for writers to communicate and collaborate online.


### Key Components
After the user logs in, they are taken to the homepage/dashboard. From the dashboard, users can access their saved groups, browse for new groups, and add new groups. Each group page is comprised of a list of topics as well as a form to submit a new topic. Users can click on a topic to view all posts associated with that topic.

As a web application designed to be user-friendly, the core design emphasizes minimal features and transparency of features. Therefore, this application is comprised of only the core features, all navigations routes are displayed in an open navigation bar, and all buttons are clearly labeled so the user does not have to search or interpret icons to navigate the page.


### Tech Stack
This application uses Node.js with Express.js on the backend with Sequelize and PostgresSQL to manage data storage. On the frontend, this application uses React with Vite and Javascript, CSS for styling, and Clerk for login authentication.


### Getting Started
Click 'Login' to signup/signin.

Once on your dashboard, you can browse writing groups by going to the 'Groups' page through the Navigation Bar. You can add a group to your Dashboard by selecting the group in the 'Groups' page and then clicking 'Add to Home' in the top-right corner of the page. Click this button again to remove it from your Dashboard. On the 'Groups' page you can also create a new group. This button will prompt you to include a name for your group, a brief description, and the URL for an image you want to include as the thumbnail display.

You can browse topics in each group or add your own topic by filling out the form on the top of the group's forum page. After you create a new topic, other users will be able to comment in repsonse to your topic.

Click 'Logout' to signout.


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

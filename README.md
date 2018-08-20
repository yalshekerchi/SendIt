# SendIt

SendIt is a simple and easy to use feedback collection application. It allows companies to conduct surveys and send emails to their clients to request feedback. Clients can then easily respond to the survey using the links provided in their email. Companies can view the results of all their surveys on the dashboard view.

SendIt takes advantage of Google Sign-In so you do not need to create a new account to use the application. 

The webapp demo is currently hosted over at https://send-it-demo.herokuapp.com/

Note: Use credit card number 4242 4242 4242 4242 to add credits to the demo app

## Screenshots
### Dashboard Screen
<img src="https://i.imgur.com/pVtTeHo.png">

### Survey Creation and Confirmation Screens
<img src="https://i.imgur.com/WNFfPMK.png">
<img src="https://i.imgur.com/EICq4OX.png">

## Built With
### Stack Used:
* [React](https://reactjs.org/) - Framework used to design the front-end UI
* [Express](https://expressjs.com/) - Back-end web application framework
* [MongoDB](https://www.mongodb.com/) - Database used to store surveys and responses
* [Node.js](https://nodejs.org/) - JavaScript run-time environment

### Libraries and Services used:
* [Passport.js](http://www.passportjs.org/) - Authentication middleware used to manage Google OAuth login
* [SendGrid](https://sendgrid.com/) - Email provider to used to send surveys and collect feedback

## Development

### Prerequisites
To run this application, you'll need:

- Node.js & npm installed
- A MongoDB database
- Google+ API key
- Stripe API key
- SendGrid API key

The keys can be added to your environment variables or can be stored in a keys.js file in ./config
The expected environment variable names are:
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- MONGO_URI
- COOKIE_KEY
- STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- SEND_GRID_KEY
- REDIRECT_DOMAIN: Redirect domain included in surveys (default: http://localhost:3000)
  
### Getting Started
To get the frontend and backend run locally:

- Clone this repo
- `npm install` to install all back-end required dependencies
- `npm client` to navigate to front-end directory
- `npm install` to install all front-end required dependencies
- `cd ..` to return back to the root directory
- `npm run dev` to start the local server

The front-end will run on port 3000 to prevent conflicts with the backend Express server which runs on port 5000 (customizable using the PORT environment variable).

## Contributing

1. Fork it (<https://github.com/yalshekerchi/SendIt/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Authors
* **Yasir Al Shekerchi** - *Project Developer* - [yalshekerchi](https://github.com/yalshekerchi)

See also the list of [contributors](https://github.com/yalshekerchi/StudySpot/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* [Stephan Grider](https://github.com/StephenGrider) for his different courses which have gain the knowledge to build and deploy this application and his course project which served as the base idea for SendIt

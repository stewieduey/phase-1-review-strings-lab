const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// const welcomeMessage = `Welcome to Flatbook, {currentUser};

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//Should I declare shortGreeting....but didn't I do that?

//const shortGreeting = `Welcome, ${currentUser}`;
// const shortGreeting = `Welcome, {currentUser}`;

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
//const shortGreeting = `Welcome, {currentUser.slice(0, 1)}!`;
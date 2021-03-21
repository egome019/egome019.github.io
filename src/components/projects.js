import budgetTracker from "../assets/budgetTracker.gif";
import daBurger from "../assets/daburger.gif";
import empReact from "../assets/employeeReact.gif";
import empTracker from "../assets/employeeTrackerNode.gif";
import README from "../assets/READMEvid.gif";
import workoutTracker from "../assets/workoutTracker.gif";

export const projects = [
	{
		vid: README,
		title: "README Generator",
		text:
			"This a command-line application that dynamically creates a README.md file based off of user's responses to multiple questions.",
		task:
			"The task was to use nodeJS's inquirer package to create a set of questions that would generate a README file.",
		live: " ",
		repo: "https://github.com/egome019/README-Generator",
	},
	{
		vid: empTracker,
		title: "Node Employee Tracker",
		text:
			"A command-line application that allows you to update your employees roles directly to your database. You can also view your database tables.",
		task:
			"The task was to create the database with MySQL, and use nodeJS's inquirer package to build the questioning logic of the application.",
		live: " ",
		repo: "https://github.com/egome019/employeeTracker_egomez",
	},
	{
		vid: daBurger,
		title: "Da-Burger!",
		text:
			"A burger logger application that allows you to input a burger, and then devour it when you want.",
		task:
			"Used MySQL, nodeJS, and Handlebars to create an MVC designed application.",
		live: "https://pacific-sands-57312.herokuapp.com/",
		repo: "https://github.com/egome019/daBurger_egomez",
	},
	{
		vid: budgetTracker,
		title: "Budget Tracker",
		text:
			"An application that allows you to add expenses and deposits to the application without online access and when connectivity resumes, all transactions made during offline should be added to the database.",
		task: "Added offline functionality to an existing application.",
		live: "https://sleepy-citadel-62720.herokuapp.com/",
		repo: "https://github.com/egome019/budgetTracker",
	},
	{
		vid: workoutTracker,
		title: "Workout Tracker",
		text:
			"The application is a workout tracker that allows you to view, create, and track daily workouts.",
		live: "",
		repo: "https://github.com/egome019/workoutTracker",
	},
	{
		vid: empReact,
		title: "React JS Employee Directory",
		text:
			"The application is a React JS powered employee directory that displays all the employees on record with a picture, name, date of birth, email, and phone number of each employee.",
		task:
			"The task was to convert the app into a ReactJS application with functioning components.",
		live: "https://egome019.github.io/employeeDirectory-React/",
		repo: "https://github.com/egome019/employeeDirectory-React",
	},
];

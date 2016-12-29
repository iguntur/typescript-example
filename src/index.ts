interface UserContractInterface {
	username: String;
	email: String;
	password: String;
	getUsername: Function;
}

interface UserInterface {
	username: String;
	email: String;
	password: String;
}

class User implements UserContractInterface {
	username: String;
	email: String;
	password: String;

	constructor(obj: UserInterface) {
		this.username = obj.username;
		this.email = obj.email;
		this.password = obj.password;
	}

	getUsername() : String {
		return this.username;
	}
}

const user = new User({
	username: 'john',
	email: 'john.doe@gmail.com',
	password: 'secret'
});

console.log(user.username);

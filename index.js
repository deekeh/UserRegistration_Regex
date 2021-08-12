const User = class {
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.email = params[2];
    this.phone = params[3]
    this.password = params[4];

    // regex patterns
    this.nameRx = /^([A-Z][a-zA-Z]{2,})$/;
    this.emailRx = /^([a-zA-Z0-9]+([.][a-zA-Z0-9]+)*)[@]([a-zA-Z0-9]+([.][a-zA-Z]{2,})+)$/;
    this.phoneRx = /^[9][1][ ][6789][0-9]{9}$/;
    this.passwordLengthRx = /^(?=.*[A-Z])(?=.{8,})$/;

    this.checkUserDetails();
  }

  checkUserDetails() {
    const errors = new Set();
    // check if all values pass the pattern test
    if (!this.nameRx.test(this.firstName)) errors.add('first name');
    if (!this.nameRx.test(this.lastName)) errors.add('last name');
    if (!this.emailRx.test(this.email)) errors.add('email');
    if (!this.phoneRx.test(this.phone)) errors.add('phone');
    if (!this.passwordLengthRx.test(this.password)) errors.add('password length');

    if(errors.size!==0) throw new Error(`Error found in ${Array.from(errors).join(', ')}`);
    return console.log("Employee added successfully");
  }
};

try {
  const dk = new User('Darshan', 'Khot', 'abc.d@email.com', '91 9984932939', 'User@123');
}
catch(err) {
  console.error(err.message);
  console.log("Employee registration failed");
}
finally {
  console.log("*Thank you for using our service*");
}

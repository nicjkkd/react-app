import React from "react";

class AddUser extends React.Component {
  userAdd = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: 0,
    };
  }

  render() {
    return (
      <form
        ref={(element) => {
          this.myForm = element;
        }}
      >
        <input
          placeholder="Name"
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <input
          placeholder="Email"
          type="text"
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
        />
        <input
          placeholder="Phone"
          type="text"
          onChange={(event) => {
            this.setState({ phone: event.target.value });
          }}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();

            this.userAdd = {
              name: this.state.name,
              email: this.state.email,
              phone: this.state.phone,
            };
            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Add User
        </button>
      </form>
    );
  }
}
export default AddUser;

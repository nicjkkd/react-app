import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    if (this.props.users.length > 0) {
      return (
        <div>
          {this.props.users.map((element) => (
            <User
              key={element.id}
              user={element}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="user">
          <h3>Користувачів немає</h3>
        </div>
      );
    }
  }
}

export default Users;

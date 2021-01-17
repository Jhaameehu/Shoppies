import React from "react";
import './Nominees.css';

//component to desplay the individual nominees of the user nomination list
class Nominees extends React.Component {

  handleChange(el) {
    this.props.delete(el);
  }

  render() {
    const noms = this.props.movie.map((el, i) => {
      return (
        <div className="column is-one-quarter" key={i}>
          <div className="notification is-warning is-light">
            <span className="has-text-black movieTitle">
              {" "}
              <strong> {el.Title} </strong>
              {el.Year}
            </span>
            <button
              className="delete is-medium"
              onClick={(e) => this.handleChange(el)}
            >
              X
            </button>
          </div>
        </div>
      );
    });
    return <div className="columns is-multiline"> {noms}</div>;
  }
}

export default Nominees;

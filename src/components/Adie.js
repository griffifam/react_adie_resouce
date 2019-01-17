import React from 'react';
import PropTypes from 'prop-types';

import './Adie.css';

const Adie = (props) => {
  console.log(props);
//
//   const onClickAdie = () => {
//     props.grabAdieTitleCallback(props.id)
//   }


  return (
    <div className="adie">
      <li>
        <br/>
        <div className="adie__block">
          <div className="adie__info">
            <br/>
            Adie Age: {props.age} <br/>
            Adie Race: {props.race} <br/>
            Adie Gender: {props.gender} <br/>
            Adie Sexual Orientation: {props.orientation} <br/>
            Location: {props.location_city}, {props.location_state} <br/>
          Seattle Transplant? (Yes | No): {props.transplant ? "Yes" : "No"}
          </div>
        </div>
      </li>
    </div>
  )
}

// onClick={() => props.deleteCardCallback(props.id)}

Adie.propTypes = {
  id:PropTypes.number,
  age:PropTypes.number,
  gender:PropTypes.string,
  race:PropTypes.string,
  orientation:PropTypes.string,
  transplant:PropTypes.bool,
  city:PropTypes.string,
  state:PropTypes.string,
  buttonClassname:PropTypes.string,
  grabAdieTitleCallback:PropTypes.func,
};

export default Adie;

import React from 'react'

function Alert(props) {

  const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className="container">
      <div className={`alert my-5 fw-bold fs-5 font-fanm-roboto alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} </strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </div>
  )
}

export default Alert
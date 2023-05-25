import React, {  useEffect, useContext } from 'react'
import noteContext from '../context/noteContext';
import { Link } from 'react-router-dom';
import AccountDetails from './AccountDetails';


const AccountOverview = () => {

  const context = useContext(noteContext);

  const { data, fetchUser } = context;

  useEffect(() => {
    fetchUser()

    //eslint-disable-next-line
  }, [])



  return (
    <>
      <br />
      <br />
      <br />
      <div className="container mt-5">

        <h2 className='fw-bold '>Account Overview</h2>
        <hr style={{
          height: '4px',
          background: '#318CE7'
        }}
        />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="font-fam-roboto text-grey ms-2 mb-4" style={{ fontSize: "1.3rem" }}>User information</p>
          <button className="button-18 px-4 m-0">Settings</button>
        </div>

        {
          data.map((user) => {
            return (
              <>
              <AccountDetails key={user._id}  user={user}/>
              </>
            )
          })
        }

      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default AccountOverview

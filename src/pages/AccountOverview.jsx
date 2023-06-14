import React, { useEffect, useContext } from 'react'
import noteContext from '../context/noteContext';

import AccountDetails from './AccountDetails';


const AccountOverview = () => {

  const context = useContext(noteContext);

  const { data, fetchUser } = context;


  useEffect(() => {

    fetchUser()

    // eslint-disable-next-line
  }, [])




  return (
    <>
      {
        data.map((user) => {
          return (
            <AccountDetails key={user._id} user={user} />
          )
        })
      }

      <br />
      <br />
    </>
  )
}

export default AccountOverview

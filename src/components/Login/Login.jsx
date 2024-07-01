import React from 'react'
import GetName from './GetName'
import GetEmail from './GetEmail'
import GetDateRegion from './GetDateRegion'
import GetGender from './GetGender'
import GetPassword from './GetPassword'

const Login = () => {
    return (
        <div>
            <GetName />
            <GetEmail />
            <GetDateRegion />
            <GetGender />
            <GetPassword />
        </div>
    )
}

export default Login

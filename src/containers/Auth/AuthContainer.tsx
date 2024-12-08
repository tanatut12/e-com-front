
import { useEffect, useState } from 'react'
import { getTestingMessage } from '../../actions/auth.action'
import AuthScreen from './AuthScreen'
import { IAuth } from '../../interfaces/auth.interface'

const AuthContainer = () => {
    const [testMessage,setTestMessage] = useState<IAuth>()

    useEffect(() => {
        fetchTestingMessage()
    },[])

    const fetchTestingMessage = async () =>{
        try {
            const {data} = await getTestingMessage(1)
            setTestMessage(data)
        } catch (error) {
            console.error('can not get error message')
        }
    }
  return (
   <AuthScreen testingMessageData={testMessage}/>
  )
}

export default AuthContainer
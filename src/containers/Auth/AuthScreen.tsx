import { FC } from 'react'
import { IAuth } from '../../interfaces/auth.interface'

interface IProps {
    testingMessageData: IAuth | undefined
}

const AuthScreen: FC<IProps> = ({ testingMessageData }) => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Testing Data</h2>
                <p className="text-gray-700 mb-2">Message: {testingMessageData?.testingMessage}</p>
                <p className="text-gray-700">Number: {testingMessageData?.testingNumber}</p>
            </div>
        </div>
    )
}

export default AuthScreen

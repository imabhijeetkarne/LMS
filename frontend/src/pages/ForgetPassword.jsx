import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { serverUrl } from "../App";
import { toast } from "react-toastify";

function ForgetPassword() {
    const [step, setStep] = useState(1)
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    
    // For Step 1
    const sendOTP = async ()=>{
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/auth/sendotp" , {email} , {withCredentials:true})
            console.log(result.data)
            setLoading(false)
            setStep(2)
            toast.success("OTP sent successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    // For Step 2
    const verifyOTP = async ()=>{
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/auth/verifyotp" , {email , otp} , {withCredentials:true})
            console.log(result.data)
            setLoading(false)
            setStep(3)
            toast.success("OTP verified successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    // For Step 3
    const resetPassword = async ()=>{
        setLoading(true)
        try {
            if(newPassword !== conPassword){
                toast.error("Passwords do not match")
                setLoading(false)
                return
            }
            const result = await axios.post(serverUrl + "/api/auth/resetpassword" , {email , password:newPassword} , {withCredentials:true})
            console.log(result.data)
            setLoading(false)
            navigate("/login")
            toast.success("Password reset successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            {/* step 1 */}
            {step == 1 && <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Forget Your Password
                </h2>
                <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]"
                            placeholder="you@example.com"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <button className="w-full bg-[black] hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium cursor-pointer" disabled={loading} onClick={sendOTP}>{loading ? <ClipLoader size={30} color="white"/>:"Send OTP"}</button>
                </form>
                <div className="text-sm text-center mt-4 cursor-pointer" onClick={() => navigate("/login")} >

                    Back to Login

                </div>
            </div>}
            {step==2 && <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Enter OTP
        </h2>
      

        {/* OTP Inputs */}
        
          <form  className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Please enter the 4-digit code sent to your email.
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]"
                placeholder="Enter Here"
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[black] hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium cursor-pointer" disabled={loading} onClick={verifyOTP} >
                {loading ? <ClipLoader size={30} color="white"/>:"Verify OTP"}
            </button>
          </form>
        

        <div className="text-sm text-center mt-4 cursor-pointer" onClick={()=>navigate("/login")} >
        
            Back to Login
        
        </div>
       

      

      </div>}
            {step==3 &&   <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter a new password below to regain access to your account.
        </p>

        <form className="space-y-5" onSubmit={(e)=>e.preventDefault()}>
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[black] focus:outline-none" 
              required
              onChange={(e)=>setNewPassword(e.target.value)}
              value={newPassword}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[black] focus:outline-none" 
              onChange={(e)=>setConPassword(e.target.value)}
              required
              value={conPassword}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[black] hover:bg-[#4b4b4b] text-white py-2 rounded-md font-medium" disabled={loading} onClick={resetPassword}
          >
            {loading?<ClipLoader size={30} color='white'/>:"Reset Password"}
          </button>
        </form>

        {/* Back to login */}
        <div className="text-center text-sm mt-4 cursor-pointer" onClick={()=>navigate("/login")}>
          
            Back to Login
          
        </div>
      </div>}
        </div>
    )
}

export default ForgetPassword;
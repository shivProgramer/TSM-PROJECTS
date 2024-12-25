import { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from "lucide-react";
import logo from "../assets/TSM-logo.png";
import loginimg from "../assets/login_img.avif";
import { login } from "../components/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(login);
  const nevigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  console.log("loginForm --", loginForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    nevigate("/blaze/dashboard")
    console.log("Submitted Login Data:", loginForm);
    // Add login API call or other login logic here
  };

  return (
    <div className="flex h-screen bg-neutral-light font-sans">
      {/* Image Half */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={loginimg}
          alt="Login background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Login Form Half */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 bg-[#F0F6FB] shadow-lg">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Company Logo" className="h-16 w-auto" />
          </div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 text-center mb-2">
            Log in to your account
          </h2>

          <p className="mb-6 text-gray-500 text-center text-sm">
            Welcome back! Let’s continue your journey now
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 text-start"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginForm.email}
                  onChange={changeEventHandler}
                  className="block w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-light focus:border-primary-dark sm:text-sm"
                  required
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <MailIcon className="h-5 w-5 text-primary-light" />
                </span>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1 text-start"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={changeEventHandler}
                  className="block w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-light focus:border-primary-dark sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <LockIcon className="h-5 w-5 text-primary-light" />
                </span>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-light text-white rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 font-display"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

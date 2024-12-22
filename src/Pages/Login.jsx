import React from "react";

const Login = () => {
  return (
    
          <>
            <div className="flex  h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
              <div className="">
                
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full rounded-md bg-white px-3 py-2.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-lg"
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-lg font-medium text-gray-900">
                        Password
                      </label>
                      <div className="text-lg">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full rounded-md bg-white px-3 py-3 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-lg text-gray-500">
                  Don't have an account ?{' '}
                  <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Register
                  </a>
                </p>
              </div>
            </div>
          </>

  );
};

export default Login;
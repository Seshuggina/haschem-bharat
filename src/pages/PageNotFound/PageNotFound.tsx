export const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-bottom error-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
            <div className="relative ">
              <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
              <span className="absolute  top-0   -ml-12  text-gray-300 font-semibold">
                Oops!
              </span>
            </div>
            <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
              Page not found
            </h5>
            <p className="text-gray-100 mt-2 mb-6">
              we are sorry, but the page you requested was not found
            </p>
            <a
              href="/"
              className="bg-green-500 px-6 py-3 text-sm font-medium text-white rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

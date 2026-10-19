import React from "react";

export default function Pachete() {
  return (
    <>
      <div className="grid md:grid-cols-2 place-items-center md:mt-20 flex items-center justify-center">
        <div className="max-w-sm bg-black border-2 border-white rounded-lg shadow md:mb-0 mb-10">
          <img
            className="rounded-t-lg border-b-2 md:hidden"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=500&height=200"
            alt="pachet vip"
          />
          <img
            className="rounded-t-lg border-b-2 hidden md:block"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=700&height=450"
            alt="pachet vip"
          />
          <div className="p-5">
            <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-300 dark:text-white">
              Pachet VIP
            </h5>
            <p className="mb-3 font-normal text-gray-300 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-black  border-2 border-white rounded-lg shadow">
          <img
            className="rounded-t-lg border-b-2 md:hidden"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=500&height=200"
            alt="pachet vip"
          />
          <img
            className="rounded-t-lg border-b-2 hidden md:block"
            src="https://cdn.knd.ro/media/521/2861/1699/20285399/1/smiley--crop-1674168104.jpg?width=700&height=450"
            alt="pachet vip"
          />
          <div className="p-5">
            <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-300 dark:text-white">
              Pachet Standard
            </h5>
            <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import masters from '../data/data.json'

const Home: NextPage = () => {
  return (
    <div className="mx-15% mt-16">
      <Head>
        <title>Masters 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="inline-flex max-w-full flex-wrap justify-center">
        {masters.map((master, key) => (
          <table className="text-blueGray-700 mx-5 mb-6 max-w-full border-collapse flex-col items-center break-words rounded bg-white shadow-lg">
            <thead className="thead-light ">
              <tr>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                  {master.name}
                </th>

                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                  {master.golfer1}
                </th>
                <td className="text-md whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle ">
                  {master.g1flag}
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g1points}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                  {master.golfer2}
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g2flag}
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g2points}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                  {master.golfer3}
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g3flag}
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g3points}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs ">
                  {master.golfer4}
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g4flag}
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                  {master.g4points}
                </td>
              </tr>
            </tbody>

            <tfoot className="thead-light ">
              <tr>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                  Total
                </th>

                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                  {master.g1points +
                    master.g2points +
                    master.g3points +
                    master.g4points}
                </th>
              </tr>
            </tfoot>
          </table>
        ))}
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  )
}

export default Home

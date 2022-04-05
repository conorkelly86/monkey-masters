import type { NextPage } from 'next'
import Head from 'next/head'
import masters from '../data/data.json'
import useAxios from '../components/useAxios'

const Home: NextPage = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `leaderboard`,
    params: { year: '2021', tournId: '014' },
    headers: {
      accept: '*/*',
      'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com',
      'X-RapidAPI-Key': '3cd19b05b8msh6d114fcc9b33a8bp1a8e53jsnfb12b7372e3a',
    },
  })
  console.log(response?.data)

  return (
    <div className=" h-full bg-blue-200">
      <div className="pt-20">
        <Head>
          <title>Masters 2022 </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mb-20 flex justify-center text-2xl">
          Monkeys Masters
          <h3 className="post-title">{response?.data.name}</h3>
          {/* <h3 className="post-title">{response?.data.players[0].firstName}</h3> */}
        </div>
        <main className="inline-flex max-w-full flex-wrap justify-center">
          {masters.map((master, key) => (
            <table className="text-blueGray-700 mx-5 mb-6 max-w-md border-collapse flex-col items-center break-words rounded bg-white shadow-lg">
              <thead className="thead-light ">
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    {master.name}
                  </th>

                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                  <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-center align-middle text-xs font-semibold uppercase">
                    Round
                  </th>

                  <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer1].firstName}
                    <span> </span>
                    {response?.data.leaderboardRows[master.idPlayer1].lastName}
                  </th>

                  <td className="text-md whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle ">
                    {master.g1flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-blue-200 p-4 px-6 text-center align-middle text-xs">
                    {
                      response?.data.leaderboardRows[master.idPlayer1]
                        .currentRoundScore
                    }
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-lime-200  p-4 px-6 text-center align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer1].total}
                  </td>
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer2].firstName}
                    <span> </span>
                    {response?.data.leaderboardRows[master.idPlayer2].lastName}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g2flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-blue-200 p-4 px-6 text-center align-middle text-xs">
                    {
                      response?.data.leaderboardRows[master.idPlayer2]
                        .currentRoundScore
                    }
                  </td>
                  <td className="text-md whitespace-nowrap border-t-0 border-l-0 border-r-0 border-double bg-lime-200 p-4 px-6 text-center align-middle	text-xs">
                    {response?.data.leaderboardRows[master.idPlayer2].total}
                  </td>
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer3].firstName}
                    <span> </span>
                    {response?.data.leaderboardRows[master.idPlayer3].lastName}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g3flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-blue-200 p-4 px-6 text-center align-middle text-xs">
                    {
                      response?.data.leaderboardRows[master.idPlayer3]
                        .currentRoundScore
                    }
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-lime-200 p-4 px-6 text-center align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer3].total}
                  </td>
                </tr>
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs ">
                    {response?.data.leaderboardRows[master.idPlayer4].firstName}
                    <span> </span>
                    {response?.data.leaderboardRows[master.idPlayer4].lastName}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs ">
                    {master.g4flag}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-blue-200 p-4 px-6 text-center align-middle text-xs">
                    {
                      response?.data.leaderboardRows[master.idPlayer4]
                        .currentRoundScore
                    }
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 bg-lime-200 p-4 px-6 text-center align-middle text-xs">
                    {response?.data.leaderboardRows[master.idPlayer4].total}
                  </td>
                </tr>
              </tbody>

              <tfoot className="thead-light ">
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Total
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-center align-middle text-xs font-semibold uppercase">
                    {parseInt(
                      response?.data.leaderboardRows[master.idPlayer1]
                        .currentRoundScore
                    ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer2]
                          .currentRoundScore
                      ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer3]
                          .currentRoundScore
                      ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer4]
                          .currentRoundScore
                      )}
                  </th>{' '}
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                  <th className="bg-blueGray-50 text-blueGray-700 border-blueGray-100 min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-center align-middle text-xs font-semibold uppercase">
                    {parseInt(
                      response?.data.leaderboardRows[master.idPlayer1].total
                    ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer2].total
                      ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer3].total
                      ) +
                      parseInt(
                        response?.data.leaderboardRows[master.idPlayer4].total
                      )}
                  </th>
                </tr>
              </tfoot>
            </table>
          ))}
        </main>
        <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
      </div>
    </div>
  )
}

export default Home
// const options = {
//   method: 'GET',
//   url: 'https://live-golf-data.p.rapidapi.com/tournament/${params}/players',
//   params: { tournId: '014', year: '2021' },
//   headers: {
//     'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com',
//     'X-RapidAPI-Key': '3cd19b05b8msh6d114fcc9b33a8bp1a8e53jsnfb12b7372e3a',
//   },
// }
// axios
//   .request(options)
//   .then(function (response: any) {
//     console.log(response.data)
//   })
//   .catch(function (error: any) {
//     console.error(error)
//   })

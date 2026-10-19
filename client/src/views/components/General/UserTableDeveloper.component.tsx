import React from 'react';
import Header from "./Header";

const UserTableDeveloper = ( {data}:any ) => {
  const girls = data.filter((student:any) => student.gender === 'F');
  const boys = data.filter((student:any) => student.gender === 'M');

  const sortedGirls = girls.sort((a:any, b:any) => b.count - a.count);
  const sortedBoys = boys.sort((a:any, b:any) => b.count - a.count);
  return (
    data.length!=0 ?(
      <>
      <Header/>
        <div className="mt-32">
          <table>
            <thead>
            <tr>
              <th>Fete</th>
              <th>Băieți</th>
            </tr>
            </thead>
            <tbody>
            {sortedGirls.map((girl:any, index:any) => (
              <tr key={index} className="text-white">
                <td>
                  {girl.name} ~ (Voturi: {girl.count})
                </td>
                <td>
                  {index < sortedBoys.length ? (
                    `${sortedBoys[index].name} ~ (Voturi: ${sortedBoys[index].count})`
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>):(<div>Salut</div>)

  );
};

export default UserTableDeveloper;

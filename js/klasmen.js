

  var instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: {'X-Auth-Token': '803b66896a9a4bd9849cbecf78923222'}
  });
  var table = '<table class="table-responsive" style="margin-top: 5%;">'+
                  '<thead class="teal lighten-1 white-text">'+
                  '<tr>'+
                      '<th>Posisi</th>'+
                      '<th>Klub</th>'+
                      '<th>Main</th>'+
                    '<th>Menang</th>'+
                    '<th>Seri</th>'+
                      '<th>Kalah</th>'+
                      '<th>Poin</th>'+
                ' </tr>'+
                  '</thead>'+
                  '<tbody id="klasmen">'+
                  '</tbody>'+
            ' </table>';

  instance.get('competitions/2021/standings')
      .then(function (response){
          $('#table').replaceWith(table);
          response.data.standings[0].table.forEach((value) => {
            $('#klasmen').append('<tr>'+
                                      '<td>'+ value.position+'</td>'+
                                      '<td><img src="'+ value.team.crestUrl+'" style="width: 25px;"><span style="display:inline-block; width: 10px;"></span>'+ value.team.name +'</td>'+
                                      '<td>'+value.playedGames+'</td>'+
                                      '<td>'+value.won+'</td>'+
                                      '<td>'+value.draw+'</td>'+
                                      '<td>'+value.lost+'</td>'+
                                      '<td>'+value.points+'</td>'+
                                  '</tr>');
          });
      })
      .catch(function (err){
          $('#notification').append('<p>Error ' +err+'</p>');
      });
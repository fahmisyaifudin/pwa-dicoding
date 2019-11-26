
   $(document).ready(function(){
      $('.sidenav').sidenav();
    });

  var instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: {'X-Auth-Token': '803b66896a9a4bd9849cbecf78923222'}
  });
  
  let results;
  var dbPromise = idb.open("ligainggris", 1, function(upgradeDb) {
      if (!upgradeDb.objectStoreNames.contains("jadwal")) {
        var peopleOS = upgradeDb.createObjectStore('jadwal', {keyPath: 'id', autoIncrement:true});
      }
    });
  
  instance.get('competitions/2021/matches')
      .then(function (response){
        this.results = response;
        console.log(this.results);
        response.data.matches.forEach((value, i) => {
                $('#schedule').append('<div style="margin-top: 5%;">'+
                                    '<b>'+value.utcDate+'</b>'+
                                    '<p>'+ value.homeTeam.name+' vs '+value.awayTeam.name+'</p>'+
                                    '<b>'+ value.score.fullTime.homeTeam+' - '+value.score.fullTime.awayTeam+'</b>'+
                                    '<br><a class="waves-effect waves-light btn" onclick="save('+i+')">Save</a>'+
                                '</div>');
            
        });
    })
    .catch(function (err){
          $('#notification').append('<p>Error ' +err+'</p>');
      });

    function save(id){
        //Add Dataabase
        dbPromise.then(function(db) {
                var tx = db.transaction('jadwal', 'readwrite');
                var store = tx.objectStore('jadwal');
                var item = {
                    utcDate: this.results.data.matches[id].utcDate,
                    homeTeam: this.results.data.matches[id].homeTeam.name,
                    awayTeam: this.results.data.matches[id].awayTeam.name,
                    score: {
                        homeTeam: this.results.data.matches[id].score.fullTime.homeTeam,
                        awayTeam: this.results.data.matches[id].score.fullTime.awayTeam,
                    },
                    created: new Date().getTime()
                };
                store.add(item); //menambahkan key "buku"
                return tx.complete;
            }).then(function() {
                M.toast({html: 'Jadwal Berhasil Disimpan!'})
            }).catch(function() {
                M.toast({html: 'Jadwal Gagal Disimpan!'})
            })
    }
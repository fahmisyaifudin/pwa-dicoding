
   $(document).ready(function(){
      $('.sidenav').sidenav();
    });
    var dbPromise = idb.open("ligainggris", 1);

    dbPromise.then(function(db) {
      var tx = db.transaction('jadwal', 'readonly');
      var store = tx.objectStore('jadwal');
      return store.getAll();
    }).then(function(items) {
      console.log(items);
        items.forEach((value, i) => {
                $('#database').append('<div style="margin-top: 5%;">'+
                                    '<b>'+value.utcDate+'</b>'+
                                    '<p>'+ value.homeTeam+' vs '+value.awayTeam+'</p>'+
                                    '<b>'+ value.score.homeTeam+' - '+value.score.awayTeam+'</b>'+
                                    '<br><a class="waves-effect waves-light btn" onclick="hapus('+value.id+')">Delete</a>'+
                                '</div>');
        });
    });

    function hapus(id){
        dbPromise.then(function(db) {
                var tx = db.transaction('jadwal', 'readwrite');
                var store = tx.objectStore('jadwal');
                store.delete(id);
                return tx.complete;
        }).then(function() {
            M.toast({html: 'Item Deleted!'})
        });
    }
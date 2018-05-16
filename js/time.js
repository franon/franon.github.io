var waktuDituju = new Date("Dec 5, 2018 12:00:00").getTime();
    
    var fungsiHitung = setInterval(function(){
        
        var waktuSekarang = new Date().getTime();
        
        var jangkaWaktu = waktuDituju - waktuSekarang;
        
    var hari = Math.floor(jangkaWaktu / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jangkaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jangkaWaktu % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jangkaWaktu % (1000 * 60)) / 1000);      
    document.getElementById("waktu").innerHTML = hari + "h " + jam + "j " + menit + "m " + detik + "d ";
        
        if(jangkaWaktu < 0){
            clearInterval(fungsiHitung);
            document.getElementById("waktu").innerHTML = "EXPIRED";
        }
    }, 1000);
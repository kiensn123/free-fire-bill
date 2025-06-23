var input = document.getElementById('input')
input.addEventListener('change', function(){
   
    readXlsxFile(input.files[0]).then(function(data){
        
        var list = []
        data.forEach(e => {
            var a = {}
            if (e != data[0]){
             
                data[0].map((vatlieu ,index) => {
                 
                    a[vatlieu] = e[index]
                   
                } )
                list.push(a)
           
            }
           
        });
        console.log(list)
        xuli(list)
    });
})

var ten = document.getElementById("ten")
var so = document.getElementById("so")
var so1 = document.getElementById("so1")


function  sdtxuli(sdt,solay){
    return sdt.slice(solay)
}

function xuli(list){
    var dem = 0;
   list.forEach(e =>{
        if (e.lam =="OK" || e.thanhtoan == "Cancel" || e.ten == null || e.sdt == null || e.diachi == null || e.diachi1==null || e.donvi ==null || typeof e.sdt != "number" ){
            if (e.lam == "OK" || e.thanhtoan == "Cancel" ){
                
            }else{
                alert(`CÓ LỖI Ở SẢN PHẨM CÓ SỐ ĐIỆN THOẠI LÀ :  ${e.sdt}` )
            }
            return
        }


          ///////////////////////////
        if (e.ten.toString().length > 10){
            var name = e.ten.toString()
            var khoangcac = name.toString().indexOf(" ");
            if (khoangcac){
                name = name.toString().slice(0, khoangcac);
                if (name.toString().length > 10){
                    name = name.toString().slice(0, 10);
                }
                ten.innerText = name
            }else{
                var name = e.ten.toString()
                name = name.toString().slice(0, 10);
            }
            
        }else{
            ten.innerText = e.ten
        }

  ///////////////////////////
        var sokhac =""

        if (e.sdt.toString().length ==7){
            so.innerText = "030"
            so1.innerText = e.sdt
        }else if(e.sdt.toString().length ==8 ){
            so.innerText = "020"
            so1.innerText = e.sdt

        }else if(e.sdt.toString().length ==9 || e.sdt.toString().length ==10 ||e.sdt.toString().length ==11 ){
            var sdtbuoi = sdtxuli(e.sdt.toString())
            var xuli1 = sdtbuoi.slice(0,3)
        
            if (xuli1 == "020" || xuli1 == "030"  ){
                sdtbuoi = sdtxuli(sdtbuoi,3)
                console.log(xuli1)
                if (sdtbuoi.length == 7){
                    so.innerText = "030"
                    so1.innerText = sdtbuoi
                }else{
                    so.innerText = "020"
                    so1.innerText = sdtbuoi
                } 
            }else{
                var xuli1 = sdtbuoi.slice(0,2)
                console.log(xuli1)
                if (xuli1 =="30" || xuli1=="20"){
                    sdtbuoi = sdtxuli(sdtbuoi,2)
                    if (sdtbuoi.length == 7){
                        so.innerText = "030"
                        so1.innerText = sdtbuoi
                    }else{
                        so.innerText = "020"
                        so1.innerText = sdtbuoi
                    } 
                }else{
                    alert(`bill số điện thoại ko phù hơp :  ${e.sdt} , ${e.sanpham}` )
                    return
                }
            
            }   
           
        }else{
            var sdt = e.sdt.toString()
            var sokhac1 = sdt.slice(0,sdt.indexOf("/"))
         
            sokhac =sdt.substring(sdt.indexOf("/")+1)
            if (sokhac1.length==7){
                so.innerText = "030"
                so1.innerText = sokhac1
            }else if (sokhac1.length==8 ){
                so.innerText = "020"
                so1.innerText = sokhac1
            }else if (sokhac1.length >8 && sokhac1.length <12 ){
                var somoi = sokhac1.slice(0,3)
                if (somoi =="020" || somoi =="030"  ){
                    so.innerText = somoi
                    so1.innerText = sdtxuli(sokhac1,3)
                }else{
                    sokhac1 = sdtxuli(sokhac1,2)
                    
                    if (sokhac1.length == 7){
                        so.innerText = "030"
                        so1.innerText = sokhac1
                    }else if (sokhac1.length==8 ) {
                        so.innerText = "020"
                        so1.innerText = sokhac1
                    }

                }
                

            }
        }



        ///////////////////////////
        var diachi = document.getElementById("diachi")
        var diachi1 = document.getElementById("diachi1")
        if (sokhac==""){
            diachi.innerText = e.diachi 
            
        }else{
            diachi.innerText = e.diachi + `(${sokhac})`
        }
        diachi1.innerText = e.diachi1
        /////////////////

        var sanpham = document.getElementById("sanpham")
        

        if (e.sanpham.toString() == "H26-JEAN"){
            sanpham.innerText = "H26-JEAN: jeans ຜູ້ຊາຍ"
        }else if (e.sanpham.toString() == "BIRDTRAP"){
            sanpham.innerText = "BIRDTRAP: ຜະລິດຕະພັນຕ່າຂ່າຍຈັບນົກ"
        }else if (e.sanpham.toString() == "EYEDROPS"){
            sanpham.innerText = "EYEDROPS: ຢາປິ່ນປົວພະຍາດກ່ຽວກັບຕາ  日本から輸入"
        }else if (e.sanpham.toString() == "GOLDRING"){
            sanpham.innerText = "GOLDRING"
        }else if (e.sanpham.toString() == "JEEPBAG"){
            sanpham.innerText = "JEEPBAG"
        }else  if (e.sanpham.toString() == "FRUITPRESSES"){
            sanpham.innerText = "FRUITPRESSES: ເຄື່ອງຫມາກ"
        }else if (e.sanpham.toString() == "NX04-MenShoes"){
            sanpham.innerText = "NX04-MenShoes: ເກີບຜູ້ຊາຍ Prada"
        }else if (e.sanpham.toString() == "EYEGLASS"){
            sanpham.innerText = "EYEGLASS  ແວ່ນຕາອ່ານສຳລັບສາຍຕາໃກ້ແລະ ສາຍຕາໄກ" 
        }else if (e.sanpham.toString() == "HU29-JEAN"){
            sanpham.innerText = "HU29-JEAN: ໂສ້ງຍີນຜູ້ຊາຍ"
        }else if (e.sanpham.toString() == "H15-HOODIE"){
            sanpham.innerText = "H15-HOODIE"
        }else  if (e.sanpham.toString() == "MSAIRPODS"){
            sanpham.innerText = "MARSHALL AIRPODS"
        }else if (e.sanpham.toString() == "Leather"){
            sanpham.innerText = ""
        }else if (e.sanpham.toString() == "Kingmagnet"){
            sanpham.innerText = ""
        }else if (e.sanpham.toString() == "MINIFISHING"){
            sanpham.innerText = "MINIFISHING ປາກກາປາຄາບອນ ນຳເຂົ້າຈາກອາເມລິກາ"
        }else if (e.sanpham.toString() == "BALLGUN"){
            sanpham.innerText = "BALLGUN"
        }else  if (e.sanpham.toString() == "HAIRSERUM"){
            sanpham.innerText = "ນ້ຳມັນຫອມລະເຫີຍສຳລັບບຳລຸງຜົມ OUHOE"
        }else if (e.sanpham.toString() == "GINSENGSOAP"){
            sanpham.innerText = "ສະບູ່ໂສມ - Ginseng Soap"
        }else if (e.sanpham.toString() == "SMH11-MENSHIRT"){
            sanpham.innerText = "SMH11-MENSHIRT"
        }else if (e.sanpham.toString() == "MENTSHIRT"){
            sanpham.innerText = "T-SHIRT: ເສື້ອຍືດ"
        }else if (e.sanpham.toString() == "MOLECREAM"){
            sanpham.innerText = "MOLECREAM  ຄີມກໍາຈັດຂີ່ແມງວັນ,ສີວສ້ຽນ ,ກະເຂົ້າຝ້າ,ສິວຫົວດໍາ"
        }else if (e.sanpham.toString() == "FISHTRAP"){
            sanpham.innerText = "FISHTRAP: ເຫຍື່ອ"
        }else if (e.sanpham.toString() == "SY25-MENTSHIRT"){
            sanpham.innerText = "SY25-MENTSHIRT:ເສື້ອຍືດຜູ້ຊາຍ"
        }else if (e.sanpham.toString() == "H14-DRESS"){
            sanpham.innerText = "H14-DRESS: ນຸ່ງ"    
        }else if (e.sanpham.toString() == "SOCKMAGNET"){
            sanpham.innerText = " SOCKMAGNET: ຖົງຕີນແມ່ເຫຼັກຄວາມຮ້ອ ນດ້ວຍຕົນເອງ"    
        }else if (e.sanpham.toString() == "ELECTRICCOMB"){
            sanpham.innerText = "ELECTRICCOMB"    
        }else if (e.sanpham.toString() == "GOLDCARD"){
            sanpham.innerText = "GOLDCARD ແຜ່ນຮອງແຜ່ນຄຳ 24K ຂອງຫຼີ້ນບັດ"    
        }else if (e.sanpham.toString() == "H22-DRESS"){
            sanpham.innerText = "H22-DRESS"    
        }else if (e.sanpham.toString() == "MARSHALLSPEAKER"){
            sanpham.innerText = "MARSHALLSPEAKER"  
        }else if (e.sanpham.toString() == "H03-SMN"){
            sanpham.innerText = "H03-SMN"  
        }else if (e.sanpham.toString() == "H08-CV"){
            sanpham.innerText = "H08-CV"  
        }else if (e.sanpham.toString() == "EYELINER"){
            sanpham.innerText = "Liner: ສໍຂິດຄິ້ວ ແລະ ເສັ້ນຜົມ 4D"  

        }else if (e.sanpham.toString() == "T27-ShortJean"){
            sanpham.innerText = "T27-ShortJean"  
        
        }else if (e.sanpham.toString() == "H17-ShortJean"){
            sanpham.innerText = "H17-ShortJean"  
        }else if (e.sanpham.toString() == "KINGMAGNET"){
            sanpham.innerText = ""  
        }else if (e.sanpham.toString() == "H06-JOGGER"){
            sanpham.innerText = "H06-JOGGER"  
        }else if (e.sanpham.toString() == "T29-JEAN"){
            sanpham.innerText = "T29-JEAN"  

        }else if (e.sanpham.toString() == "LUNGSPRAY"){
            sanpham.innerText = "LUNGSPRAY"  
        }else if (e.sanpham.toString() == "EARDROPS"){
            sanpham.innerText = "EARDROPS"  
        }else if (e.sanpham.toString() == "HANDMASSAGE"){
            sanpham.innerText = "HANDMASSAGE"  
        //deptrai
        }else if (e.sanpham.toString() == "CLEANER"){
            sanpham.innerText = "CLEANER"  
        }else if (e.sanpham.toString() == "PRESSURE"){
            sanpham.innerText = "PRESSURE: ສາຍແຂນແມ່ເຫຼັກ"  
        }else if (e.sanpham.toString() == "ELECTRICSTOVE"){
            sanpham.innerText = "ELECTRICSTOVE: ເຕົາໄຟຟ້າທີ່ມີຄວາມສາມາດສູງ"  
        }else if (e.sanpham.toString() == "MULTIPLIERS"){
            sanpham.innerText = "MULTIPLIERS"  
        }else if (e.sanpham.toString() == "GEARLEVER"){
            sanpham.innerText = "GEARLEVER: ເກຍເກຍລົດ"  
        }else if (e.sanpham.toString() == "KINGPLIERS"){
            sanpham.innerText = "KINGPLIERS: ເຄື່ອງມືສ້ອມແປງໄຟຟ້າອະເນກປະສົງ"  
        }else if (e.sanpham.toString() == "KINGCAMERA"){
            sanpham.innerText = "King - Camera"  

        }else if (e.sanpham.toString() == "KINGSMAN"){
            sanpham.innerText = "KINGSMAN"  
        }else if (e.sanpham.toString() == "BRA-MASSAGE"){
            sanpham.innerText = "BRA-MASSAGE"  

        }else if (e.sanpham.toString() == "NHATANXOANG"){
            sanpham.innerText = "NHATANXOANG"  

        }else if (e.sanpham.toString() == "TENSU"){
            sanpham.innerText = "TENSU"  

        }else if (e.sanpham.toString() == "BOCASURE"){
            sanpham.innerText = "BOCASURE"  
        }else if (e.sanpham.toString() == "INJECTION"){
            sanpham.innerText = "NJECTION:ເຄື່ອງສັກຢາສັດຕະວະແພດ"  
        }else if (e.sanpham.toString() == "AGOMOM"){
            sanpham.innerText = "AGOMOM"  
        }else if (e.sanpham.toString() == "ACTION-CAM"){
            sanpham.innerText = "ACTION-CAM" 
        }else if (e.sanpham.toString() == "C-Biofla"){
            sanpham.innerText = "C-Biofla"  
        }else if (e.sanpham.toString() == "ODISURE"){
            sanpham.innerText = "ODISURE"  
        }else if (e.sanpham.toString() == "CHARMING"){
            sanpham.innerText = "CHARMING" 
        }else if (e.sanpham.toString() == "CG-FLOWERSEED"){
            sanpham.innerText = "CG-FLOWERSEED" 
        }else if (e.sanpham.toString() == "HEADLAMP"){
            sanpham.innerText = "HEADLAMP" 
        }else if (e.sanpham.toString() == "PROSTH-PLUS"){
            sanpham.innerText = "PROSTH-PLUS" 
        }else if (e.sanpham.toString() == "SPO-ROYAL"){
            sanpham.innerText = "SPO-ROYAL" 
        }else if (e.sanpham.toString() == "SMART-TV"){
            sanpham.innerText = "SMART-TV" 
        }else if (e.sanpham.toString() == "SOYBEAN"){
            sanpham.innerText = "SOYBEAN" 
        }else if (e.sanpham.toString() == "DERMA"){
            sanpham.innerText = "DERMA" 
        }else if (e.sanpham.toString() == "DRAGON-RING"){
            sanpham.innerText = "DRAGON-RING" 
        }else if (e.sanpham.toString() == "THYROYD"){
            sanpham.innerText = "THYROYD" 
        }else if (e.sanpham.toString() == "BODYFIT"){
            sanpham.innerText = "BODYFIT:ຫຼຸດນໍ້າໜັກໄດ້ຢ່າງວ່ອງໄວ,ປອດໄພ" 
        }else if (e.sanpham.toString() == "SMARTWATCH"){
            sanpham.innerText = "SMARTWATCH" 
        }else if (e.sanpham.toString() == "OS-TSHIRT"){
            sanpham.innerText = "OS-TSHIRT" 
        }else if (e.sanpham.toString() == "EYERUBY"){
            sanpham.innerText = "EYERUBY:ປິ່ນປົວຫາຍຂາດພະຍາດຕາໄດ້ທຸກຊະນິດ" 
        }else if (e.sanpham.toString() == "KIDNEY-TONIC"){
            sanpham.innerText = "KIDNEY-TONIC:ຟື້ນຟູສຸຂະພາບຫມາກໄຂ່ຫຼັງ" 
        }else if (e.sanpham.toString() == "THYROYD "){
            sanpham.innerText = "THYROYD:ປົກປ້ອງຕ່ອມໄທລອຍໃຫ້ມີສຸຂະພາບດີ" 
        }else if (e.sanpham.toString() == "HERBAL-MASK"){
            sanpham.innerText = "HERBAL-MASK: มาส์กสมุนไพร" 
        }else if (e.sanpham.toString() == "KIDNEYTONIC-MILK"){
            sanpham.innerText = " KIDNEYTONIC-MILK" 
        }else if (e.sanpham.toString() == "EELHOE-DERMA"){
            sanpham.innerText = " EELHOE-DERMA" 
        }else if (e.sanpham.toString() == "MILK-KIDNEYTONIC"){
            sanpham.innerText = " MILK-KIDNEYTONIC" 
        }else if (e.sanpham.toString() == "ATK-LAXATIVE"){
            sanpham.innerText = "ATK-LAXATIVE: ช่วยให้คุณมีระบบย่อยอาหารที่แข็งแรง" 
        }else if (e.sanpham.toString() == "ANX-LADY"){
            sanpham.innerText = "ANX-LADY: ฟื้นคืนเสน่ห์ความเป็นผู้หญิงของคุณ" 
        }else if (e.sanpham.toString() == "ANTI-HEMORRHOID"){
            sanpham.innerText = "ANTI-HEMORRHOID" 
        }else if (e.sanpham.toString() == "GOUTTO"){
            sanpham.innerText = "GOUTTO" 
        }else if (e.sanpham.toString() == "DETOXSlIM-MILK"){
            sanpham.innerText = "DETOXSlIM-MILK" 
        }else if (e.sanpham.toString() == "BODYSLIM-MILK"){
            sanpham.innerText = "BODYSLIM-MILK" 
        }else if (e.sanpham.toString() == "BODYSLIM-MILK"){
            sanpham.innerText = "BODYSLIM-MILK" 
        }else if (e.sanpham.toString() == "SOUNDCARD"){
            sanpham.innerText = "SOUNDCARD" 
        }else if (e.sanpham.toString() == "MILK-KIDNEYTONIC"){
            sanpham.innerText = "MILK-KIDNEYTONIC" 
        }else if (e.sanpham.toString() == "WEIGHTLOSS-PATCH"){
            sanpham.innerText = "WEIGHTLOSS-PATCH" 
        }else if (e.sanpham.toString() == "360-CAMERA"){
            sanpham.innerText = "360-CAMERA" 
        }else if (e.sanpham.toString() == "MASSAGE-SLIPPERS"){
            sanpham.innerText = "MASSAGE-SLIPPERS" 
        }else if (e.sanpham.toString() == "LUCKY-BRACELET"){
            sanpham.innerText = "LUCKY-BRACELET" 
        }else if (e.sanpham.toString() == "SKINPEELING-CREAM"){
            sanpham.innerText = "SKINPEELING-CREAM" 
        }else if (e.sanpham.toString() == "GINSENG-ANHUNG"){
            sanpham.innerText = "GINSENG-ANHUNG: ເພີ່ມສຸຂະພາບ ແລະ ພູມຕ້ານທານ ເພື່ອເສີມພູມຕ້ານທານໃຫ້ແຂງແຮງ"
        }else if (e.sanpham.toString() == "BODY-SLINE"){
            sanpham.innerText = "BODY-SLINE: ລູກຄ້າສາມາດລົດນໍ້າໜັກໄດ້ຢ່າງວ່ອງໄວ,ປອດໄພ"
        }else{
        
            
            alert(`khong co cai nay  ${e.sanpham}` )
            return
        }
       
        var thanhtien = document.getElementById("thanhtien")
        var size = document.getElementById("size")
        var size1 = document.getElementById("size1")

        
        thanhtien.innerText = e.thanhtien

        if (e.size == null){
            size1.innerText = " "
            size.innerText = " "
        }else{
            size1.innerText = e.size
            size.innerText =  "SIZE:"
        }

        var thanhtien = document.getElementById("tien")
        if (e.thanhtoan == "Delivery"){
            thanhtien.innerText = "0K"

        }else{
            thanhtien.innerText = e.tien + "K"
        }

        var daux1 = document.getElementById("daux1")
        var daux2 = document.getElementById("daux2")
        var daux3 = document.getElementById("daux3")

        if (e.donvi =="MIXAY"){
            daux1.innerText = ""
            daux2.innerText = ""
            daux3.innerText = "X"


        }else if(e.donvi == "HAL"){
            daux1.innerText = ""
            daux2.innerText = "X"
            daux3.innerText = ""

        }else if(e.donvi == "Anoushit"){
            daux1.innerText = "X"
            daux2.innerText = ""
            daux3.innerText = ""


        }else{
            alert(`bill có số điện thoại ${e.sdt}, lỗi không có đơn vị vận chuyển  ${e.donvi}` )
        }
       
        
        dem = dem+1;
        html2canvas(document.querySelector('.bill'))
            .then(canvas => {
                const url = canvas.toDataURL('image/png')
                const a = document.createElement('a')
                a.setAttribute('download',`biil.png`)
                a.setAttribute('href',url)
                a.click()
            
            })
            
   },)
}














































// var ten = document.getElementById("ten")
//     //
//     var sdt = document.getElementById("sdt")
//     var sdt1 = document.getElementById("sodau")
//     //
//     var diachi1 = document.getElementById("diachi1")
//     var diachi2 = document.getElementById("diachi2")
//     var hanghoa = document.getElementById("hanghoa")
//     var sotien = document.getElementById("sotien")
//     //
//     var size = document.getElementById("size")
//     var size2 = document.getElementById("buoito")
//     //
//     var sotien1 = document.getElementById("sotien1")
   

//     var t = data.length
//     data.forEach(e=>{
//         ten.innerText = e[0]
      
      
//         if (e[1].toString().length== 7 ){

        
//             sdt1.innerText = '030'
//             sdt.innerText = e[1]
//         }else{
            
          
//             sdt1.innerText = '020'
//             sdt.innerText = e[1]
//         }




        
//         diachi1.innerText = e[2]
//         diachi2.innerText = e[3]
//         hanghoa.innerText = e[4]
//         sotien.innerText = e[5]
        
        
//         if (e[6] == null ){
//             size2.innerText = ''
//             size.innerText = '';
//         }else{
//             size2.innerText = 'SIZE:'
//             size.innerText = e[6];
//         }
//         sotien1.innerText = e[7]
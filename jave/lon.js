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
        if (e.lam =="OK" || e.thanhtoan == "Cancel"){
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
            var xuli1 = sdtbuoi.slice(0,2)
            if (xuli1 == "020" || xuli1 == "030"  ){
                sdtbuoi = sdtxuli(sdtbuoi,2)
                if (sdtbuoi.length == 7){
                    so.innerText = "030"
                    so1.innerText = sdtbuoi
                }else{
                    so.innerText = "020"
                    so1.innerText = sdtbuoi
                } 
            }else{
                sdtbuoi = sdtxuli(sdtbuoi,1)
                if (sdtbuoi.length == 7){
                    so.innerText = "030"
                    so1.innerText = sdtbuoi
                }else{
                    so.innerText = "020"
                    so1.innerText = sdtbuoi
                } 
            }   
           
        }else{
            var sdt = e.sdt.toString()
            var sokhac1 = sdt.slice(0,sdt.indexOf("/"))
            sokhac =sdt.substring(sdt.indexOf("/")+1)
            if (sokhac1.length==7){
                so.innerText = "030"
                so1.innerText = sokhac1
            }else{
                so.innerText = "020"
                so1.innerText = sokhac1
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
            sanpham.innerText = "ນ້ຳມັນຫອມລະເຫີຍສຳລັບບຳລຸງຜົມ OUHOE"
        }else if (e.sanpham.toString() == "MENTSHIRT"){
            sanpham.innerText = "T-SHIRT: ເສື້ອຍືດ"
        }else if (e.sanpham.toString() == "MOLECREAM"){
            sanpham.innerText = "MOLECREAM  ຄີມກໍາຈັດຂີ່ແມງວັນ,ສີວສ້ຽນ ,ກະເຂົ້າຝ້າ,ສິວຫົວດໍາ"
        }else{
            alert(`khong co cai nay  ${e.sanpham}` )
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
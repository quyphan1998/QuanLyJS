function getEle(id) {
    return document.getElementById(id);
}


function hienthi() {
 
    var manv = getEle('txtMaNV').value;
    var hoten = getEle('txtTenNV').value;
    var chucvu = getEle('chucVu').value;
    //var strUser = getEle.options[getEle.selectedIndex].value;
    var LuongCB = getEle('txtLuongCB').value;
    var giolam = getEle('txtGioLam').value;

    LuongCB = parseFloat(LuongCB);
    giolam = parseFloat(giolam);

    var nhanvien = {
        Manv: manv,
        tennv: hoten,
        chuc: chucvu,
        luong : LuongCB,
        gio: giolam,
        xeploai: function () {
            if (this.gio > 0 && this.gio <= 30)
                return 'Kém';
            else if (this.gio >= 30 && this.gio <= 40)
                return 'Trung Bình';
            else if (this.gio > 40)
                return 'Khá';
        },
        //this thay thế cho object nhanvien
        tongluong:function(){
            return (this.luong * this.gio) + " Đ";
        }
        
    }
    console.log(nhanvien);
    getEle('spanTenNV').innerHTML = nhanvien.tennv;
    getEle('spanMaNV').innerHTML = nhanvien.Manv;
    getEle('spanChucVu').innerHTML = nhanvien.chuc;
    getEle('spanTongLuong').innerHTML = nhanvien.tongluong();
    getEle('spanXepLoai').innerHTML = nhanvien.xeploai();

}
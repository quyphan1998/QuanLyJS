function getEle(ele) {
    return document.getElementById(ele);
}

function create(tag) {
    return document.createElement(tag);
}
//tạo mảng dssv
DSSV = [];

function hienThiThongTin() {
    //lấy dữ liệu từ form
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var loaiSV = getEle('loaiSV').value;
    var toan = getEle('txtDiemToan').value;
    var ly = getEle('txtDiemLy').value;
    var hoa = getEle('txtDiemHoa').value;
    var diemRenLuyen = getEle('txtDiemRenLuyen').value;
    
    // parse chuỗi thành số
    toan = parseFloat(toan);
    ly = parseFloat(ly);
    hoa = parseFloat(hoa);
    diemRenLuyen = parseFloat(diemRenLuyen);

    var SinhVien = {
        MaSV: maSV,
        TenSV: tenSV,
        LoaiSV: loaiSV,
        diemtoan: toan,
        diemly: ly,
        diemhoa: hoa,
        DiemRL: diemRenLuyen,
        TinhDiem: function () //khai báo biến TinhDiem là 1 function
        {
            return ((this.diemtoan + this.diemly + this.diemhoa) / 3).toFixed(3);
        },
        
        xeploai: function () {
            var diemTB = this.TinhDiem();
            if (diemTB < 3.5) {
                return 'Kém';
            } else if (diemTB >= 3.5 && diemTB < 5) {
                return 'Yếu';
            } else if (diemTB >= 5 && diemTB < 6.5) {
                return 'Trung Bình';
            } else if (diemTB >= 6.5 && diemTB < 8) {
                return 'Khá';
            } else if (diemTB >= 8) {
                return 'Giỏi';
            }
        }
    }
    console.log(SinhVien);
    
    getEle('spanTenSV').innerHTML = SinhVien.TenSV;
    getEle('spanMaSV').innerHTML = SinhVien.MaSV;
    getEle('spanLoaiSV').innerHTML = SinhVien.LoaiSV;
    getEle('spanDTB').innerHTML = SinhVien.TinhDiem();
    getEle('spanXepLoai').innerHTML = SinhVien.xeploai();
    
}


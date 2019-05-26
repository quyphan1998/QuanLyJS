function getEle(ele) {
    return document.getElementById(ele);
}

function create(tag) {
    return document.createElement(tag);
}
DanhSachSV = [];
//tui chi tesst thoi nha

function themSinhVien() {
    //Lấy dữ liệu từ form
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var loaiSV = getEle('loaiSV').value;
    var toan = getEle('txtDiemToan').value;
    var ly = getEle('txtDiemLy').value;
    var hoa = getEle('txtDiemHoa').value;
    var diemRenLuyen = getEle('txtDiemRenLuyen').value;

    toan = parseFloat(toan);
    ly = parseFloat(ly);
    hoa = parseFloat(hoa);
    diemRenLuyen = parseFloat(diemRenLuyen);

    var SinhVien = {
        MaSinhVien: maSV,
        HoTen: tenSV,
        LoaiSinhVien: loaiSV,
        DiemToan: toan,
        DiemLy: ly,
        DiemHoa: hoa,
        DiemRenLuyen: diemRenLuyen,
        TinhDiem: function () {
            return ((this.DiemToan + this.DiemHoa + this.DiemLy) / 3).toFixed(3);
        },
        xeploai: function () {
            var ketqua = this.TinhDiem();
            if (ketqua < 3.5)
                return 'Yếu';
            else if (ketqua >= 3.5 && ketqua < 5)
                return 'Trung Bình Yếu';
            else if (ketqua >= 5 && ketqua < 6.5)
                return 'Trung Bình';
            else if (ketqua >= 6.5 && ketqua < 8)
                return 'Khá'
            else if (ketqua >= 8)
                return 'Giỏi';
        }
    }
    DanhSachSV.push(SinhVien);
    console.log(SinhVien);
    //khởi tạo và gọi hàm
    taobang();
}

function taobang() {
    var tbody = getEle('tbodySinhVien');
    tbody.innerHTML = '';
    for (var i = 0; i < DanhSachSV.length; i++) {
        var trTag = create('tr')

        var tdMa = create('td');
        var tdTen = create('td');
        var tdLoai = create('td');
        var tdDiem = create('td');
        var tdRenLuyen = create('td'); //tạo đối tượng trong html

        //khởi tạo quan hệ
        trTag.appendChild(tdMa);
        trTag.appendChild(tdTen);
        trTag.appendChild(tdLoai);
        trTag.appendChild(tdDiem);
        trTag.appendChild(tdRenLuyen);

        tdMa.innerHTML = DanhSachSV[i].MaSinhVien;
        tdTen.innerHTML = DanhSachSV[i].HoTen;
        tdLoai.innerHTML = DanhSachSV[i].LoaiSinhVien;
        tdDiem.innerHTML = DanhSachSV[i].TinhDiem();
        tdRenLuyen.innerHTML = DanhSachSV[i].DiemRenLuyen;



        tbody.appendChild(trTag);
    }
}
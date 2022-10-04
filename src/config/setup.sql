
-- SINH VIEN
DROP TABLE IF EXISTS SINHVIEN;
CREATE TABLE SINHVIEN (
    MaSV            INT,
    Hoten           VARCHAR(255),
    Ngaysinh        DATE,
    Gioitinh        VARCHAR(255),
    MaThietbi       VARCHAR(255),
    MaFCM           VARCHAR(255),
    PRIMARY KEY(MaSV)
);

-- KHOA
DROP TABLE IF EXISTS KHOA;
CREATE TABLE KHOA (
    MaKhoa          INT,
    TenKhoa         VARCHAR(255),
    PRIMARY KEY(MaKhoa) 
);

-- PHONGHOC
DROP TABLE IF EXISTS PHONGHOC;
CREATE TABLE PHONGHOC (
    MaPH            INT,
    TenPH           VARCHAR(255),
    Diachi          VARCHAR(255),
    PRIMARY KEY(MaPH) 
);

-- CAHOC
DROP TABLE IF EXISTS CAHOC;
CREATE TABLE CAHOC (
    MaCH            INT,
    GioBatdau       VARCHAR(255),
    GioKetthuc      VARCHAR(255),
    PRIMARY KEY(MaCH) 
);

-- GIANGVIEN
DROP TABLE IF EXISTS GIANGVIEN;
CREATE TABLE GIANGVIEN (
    MaGV            INT,
    MaKhoa          INT,
    Hoten           VARCHAR(255),
    Ngaysinh        DATE,
    Gioitinh        VARCHAR(255),
    MaThietbi       VARCHAR(255),
    MaFCM           VARCHAR(255),
    PRIMARY KEY(MaGV),
    FOREIGN KEY (MaKhoa) REFERENCES KHOA(MaKhoa)
);

-- MONHOC
DROP TABLE IF EXISTS MONHOC;
CREATE TABLE MONHOC (
    MaMH            INT,
    TenMonhoc       VARCHAR(255),
    Tongsotiet      INT,
    Tietlythuyet    INT,
    Tietthuchanh    INT,
    PRIMARY KEY(MaMH) 
);

-- LOPMONHOC
DROP TABLE IF EXISTS LOPMONHOC;
CREATE TABLE LOPMONHOC (
    MaLopMonhoc     INT,
    MaGV            INT,
    TenLopmonhoc    VARCHAR(255),
    PRIMARY KEY(MaLopMonhoc),
    FOREIGN KEY (MaGV) REFERENCES GIANGVIEN(MaGV)
);


-- GV_DIEMDANH_SV
DROP TABLE IF EXISTS GV_DIEMDANH_SV;
CREATE TABLE GV_DIEMDANH_SV (
    MaDiemDanh      INT,
    MaGV            INT,
    MaLopMonhoc     INT,
    Ngaydiemdanh    Date,
    Thoidiembatdau  Date,
    PRIMARY KEY(MaDiemDanh),
    FOREIGN KEY (MaGV) REFERENCES GIANGVIEN(MaGV),
    FOREIGN KEY (MaLopMonhoc) REFERENCES LOPMONHOC(MaLopMonhoc)
);

-- MONHOC_LOPMONHOC
DROP TABLE IF EXISTS MONHOC_LOPMONHOC;
CREATE TABLE MONHOC_LOPMONHOC (
    MaLopMonhoc     INT,
    MaMH            INT,
    Namhoc          VARCHAR(255),
    Hocky           VARCHAR(255),
    FOREIGN KEY (MaLopMonhoc) REFERENCES LOPMONHOC(MaLopMonhoc),
    FOREIGN KEY (MaMH) REFERENCES MONHOC(MaMH)
);

-- CA_PHONG_LOPMONHOC
DROP TABLE IF EXISTS CA_PHONG_LOPMONHOC;
CREATE TABLE CA_PHONG_LOPMONHOC (
    MaCH            INT,
    MaPH            INT,
    MaLopMonhoc     INT,
    Thu             VARCHAR(255),
    FOREIGN KEY (MaCH) REFERENCES CAHOC(MaCH),
    FOREIGN KEY (MaPH) REFERENCES PHONGHOC(MaPH),
    FOREIGN KEY (MaLopMonhoc) REFERENCES LOPMONHOC(MaLopMonhoc)
);

-- CHITIETDD
DROP TABLE IF EXISTS CHITIETDD;
CREATE TABLE CHITIETDD (
    MaDiemDanh      INT,
    MaSV            INT,
    Thoigiandiemdanh VARCHAR(255),
    Lydo            VARCHAR(255),
    FOREIGN KEY (MaDiemDanh) REFERENCES GV_DIEMDANH_SV(MaDiemDanh),
    FOREIGN KEY (MaSV) REFERENCES SINHVIEN(MaSV)
);

-- SINHVIEN_HOC_LOPMONHOC
DROP TABLE IF EXISTS SINHVIEN_HOC_LOPMONHOC;
CREATE TABLE SINHVIEN_HOC_LOPMONHOC (
    MaLopMonhoc     INT,
    MaSV            INT,
    Kichhoat        BOOLEAN,
    FOREIGN KEY (MaLopMonhoc) REFERENCES LOPMONHOC(MaLopMonhoc),
    FOREIGN KEY (MaSV) REFERENCES SINHVIEN(MaSV)
);
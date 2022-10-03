
-- SINH VIEN
CREATE TABLE SINHVIEN (
    MaSV            INT,
    Hoten           VARCHAR(255),
    Ngaysinh        VARCHAR(255),
    Gioitinh        VARCHAR(255),
    MaThietbi       VARCHAR(255),
    CONSTRAINT PK_SINHVIEN	PRIMARY KEY(MaSV) 
);

-- KHOA
CREATE TABLE KHOA (
    MaKhoa          INT,
    TenKhoa         VARCHAR(255),
    CONSTRAINT PK_KHOA	PRIMARY KEY(MaKhoa) 
);

-- PHONGHOC
CREATE TABLE PHONGHOC (
    MaPH            INT,
    TenPH           VARCHAR(255),
    Diachi          VARCHAR(255),
    CONSTRAINT PK_PHONGHOC PRIMARY KEY(MaPH) 
);

-- CAHOC
CREATE TABLE CAHOC (
    MaCH            INT,
    GioBatdau       VARCHAR(255),
    GioKetthuc      VARCHAR(255),
    CONSTRAINT PK_CAHOC PRIMARY KEY(MaCH) 
);

-- GIANGVIEN
CREATE TABLE GIANGVIEN (
    MaGV            INT,
    Hoten           VARCHAR(255),
    MaKhoa          VARCHAR(255),
    Gioitinh        VARCHAR(255),
    MaThietbi       VARCHAR(255),
    CONSTRAINT PK_GIANGVIEN PRIMARY KEY(MaGV) 
);

-- MONHOC
CREATE TABLE MONHOC (
    MaMH            INT,
    TenMonhoc       VARCHAR(255),
    Tongsotiet      VARCHAR(255),
    Tietlythuyet    VARCHAR(255),
    Tietthuchanh    VARCHAR(255),
    CONSTRAINT PK_MaMH PRIMARY KEY(MaMH) 
);

-- MONHOC_LOPMONHOC
CREATE TABLE MONHOC_LOPMONHOC (
    MaLopMonhoc     INT,
    MaMH            INT,
    Namhoc          VARCHAR(255),
    Hocky           VARCHAR(255), 
);

-- LOPMONHOC
CREATE TABLE LOPMONHOC (
    MaLopMonhoc     INT,
    TenLopmonhoc    INT,
    MaGV            VARCHAR(255),
    CONSTRAINT PK_MaLopMonhoc PRIMARY KEY(MaLopMonhoc) 
);

-- CA_PHONG_LOPMONHOC
CREATE TABLE CA_PHONG_LOPMONHOC (
    MaCH            INT,
    MaPH            INT,
    MaLopMonhoc     INT,
    Thu             VARCHAR(255)
);

-- CHITIETDD
CREATE TABLE CHITIETDD {
    MaDiemDanh      INT,
    MaSV            INT,
    Lydo            VARCHAR(255)   
}

-- GV_DIEMDANH_SV
CREATE TABLE GV_DIEMDANH_SV {
    MaDD            INT,
    MaSV            INT,
    Lydo            VARCHAR(255)   
}
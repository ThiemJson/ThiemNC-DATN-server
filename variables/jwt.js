/// `Lấy thông tin điểm danh sv`
const query = `
SELECT  sv.ID, 
        sv.Hoten, 
        sv.MaSV,
        lmh.MaLopmonhoc,
        lmh.TenLopmonhoc,
        gv_dd_sv.Ngaydiemdanh,
        mh_lmh.Hocky,
        mh_lmh.Namhoc,
        gv.MaGV,
        gv.Hoten

FROM    GV_DIEMDANH_SV as gv_dd_sv, 
        SINHVIEN_HOC_LOPMONHOC as sv_hoc_lmh, 
        LOPMONHOC as lmh, 
        SINHVIEN as sv,
        MONHOC_LOPMONHOC as mh_lmh,
        MONHOC as mh,
        GIANGVIEN as gv,
        CA_PHONG_LOPMONHOC as cp_lmh,
        PHONGHOC as ph,
        CAHOC as ch

WHERE   gv_dd_sv.IDLopmonhoc = sv_hoc_lmh.IDLopmonhoc 
        AND sv.ID = sv_hoc_lmh.IDSinhvien
        AND sv.MaSV = '18511060021'
        AND lmh.ID = gv_dd_sv.IDLopmonhoc
        AND lmh.ID = mh_lmh.IDLopmonhoc
        AND mh_lmh.IDMonhoc = mh.ID
        AND gv.ID = gv_dd_sv.IDGiangvien
        AND lmh.ID = cp_lmh.IDLopmonhoc
        AND ph.ID = cp_lmh.IDPhonghoc 
        AND ch.ID = cp_lmh.IDCahoc 
`;

/// `Lấy thông tin điểm danh`
const query2 = `
SELECT  sv.ID, 
        sv.Hoten, 
        sv.MaSV,
        lmh.MaLopmonhoc,
        lmh.TenLopmonhoc,
        gv_dd_sv.Ngaydiemdanh,
        mh_lmh.Hocky,
        mh_lmh.Namhoc

FROM    GV_DIEMDANH_SV as gv_dd_sv, 
        SINHVIEN_HOC_LOPMONHOC as sv_hoc_lmh, 
        LOPMONHOC as lmh, 
        SINHVIEN as sv,
        MONHOC_LOPMONHOC as mh_lmh,
        MONHOC as mh

WHERE   gv_dd_sv.IDLopmonhoc = sv_hoc_lmh.IDLopmonhoc 
        AND sv.ID = sv_hoc_lmh.IDSinhvien
        AND sv.MaSV = '1851060090'
        AND lmh.ID = gv_dd_sv.IDLopmonhoc
        AND lmh.ID = mh_lmh.IDLopmonhoc
        AND mh_lmh.IDMonhoc = mh.ID
`;

const query4 = `
SELECT  ph.MaPH,
        ph.TenPH,
        ph.Diachi

FROM    PHONGHOC as ph
`;

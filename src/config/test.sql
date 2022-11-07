
-- Lấy danh sách lớp với đủ mọi thông tin
-- SELECT lmh.MaLopMonhoc as malopmonhoc, lmh.TenLopmonhoc as tenlopmonhoc, mh.TenMonhoc as tenmonhoc, mh_lmh.Namhoc as namhoc, mh_lmh.Hocky as hocky, gv.Hoten as hotengiangvien, ph.TenPH as tenphong, ch.GioBatdau as giobatdau, ch.GioKetthuc as gioketthu
-- FROM LOPMONHOC as lmh, MONHOC_LOPMONHOC as mh_lmh, MONHOC as mh, GIANGVIEN as gv, CA_PHONG_LOPMONHOC as cplmh, PHONGHOC as ph, CAHOC as ch
-- WHERE mh_lmh.IDMonhoc = mh.ID AND mh_lmh.IDLopmonhoc = lmh.ID AND lmh.IDGiangvien = gv.ID AND cplmh.IDCahoc = ch.ID AND cplmh.IDPhonghoc = ph.ID

-- Lấy danh sách sinh viên học trong lớp môn hoc với tên môn tương ứng
SELECT lmh.TenLopmonhoc as tenlopmonhoc, sv.Hoten
FROM SINHVIEN_HOC_LOPMONHOC as svhlmh, SINHVIEN as sv, LOPMONHOC as lmh
WHERE svhlmh.IDLopmonhoc = lmh.ID AND svhlmh.IDSinhvien = sv.id

-- SELECT * FROM LOPMONHOC
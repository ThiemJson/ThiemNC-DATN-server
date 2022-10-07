import UIKit
let familyName = ["Nguyễn","Trần","Lê","Phạm","Huỳnh","Hoàng",
           "Võ","Phan","Trương","Bùi","Đặng","Đỗ","Ngô",
           "Hồ","Dương","Đinh","Đoàn","Lâm","Mai","Trịnh",
           "Đào","Cao","Lý","Hà","Lưu","Lương","Thái","Châu",
           "Tạ","Phùng","Tô","Vương","Văn","Tăng","Quách","Lại","Hứa","Thạch","Diệp"]

let name = ["Huy","Khang","Bảo","Minh","Phúc",
             "Anh","Khoa","Phát","Đạt","Khôi","Long",
             "Nam","Duy","Quân","Kiệt","Thịnh","Tuấn",
             "Hưng","Hoàng","Hiếu","Nhân","Trí","Tài","Phong",
             "Nguyên","An","Phú","Thành","Đức","Dũng","Lộc","Khánh",
             "Vinh","Tiến","Nghĩa","Thiện","Hào","Hải","Đăng","Quang",
             "Lâm","Nhật","Trung","Thắng","Tú","Hùng","Tâm","Sang","Sơn",
             "Thái","Cường","Vũ","Toàn","Ân","Thuận","Bình","Trường","Danh",
             "Kiên","Phước","Thiên","Tân","Việt","Khải","Tín","Dương","Tùng","Quý","Hậu","Trọng"];

// Generate SINHVIEN
for index in 0..<100 {
    let id = "185106\(String(format: "%04d", index))"

    let familyName = familyName[Int.random(in: 0..<familyName.count)]
    let middleName = name[Int.random(in: 0..<name.count)]
    let lastName = name[Int.random(in: 0..<name.count)]
    let fullname = "\(familyName) \(middleName) \(lastName)"
    let dataOfBirth = "2000-\(Int.random(in: 1..<13))-\(Int.random(in: 1..<31))"
    let isFemale = Int.random(in: 0..<40) % 2 == 0
    print("INSERT INTO SINHVIEN VALUES (NULL, '\(id)','\(fullname)','\(dataOfBirth)','\(isFemale ? "Nam" : "Nữ")','\(UUID().uuidString)','\(UUID().uuidString)','\(id)');")
}

// Generate GIANGVIEN
for index in 0..<20 {
    let id = "CNTT\(String(format: "%04d", index))"

    let familyName = familyName[Int.random(in: 0..<familyName.count)]
    let middleName = name[Int.random(in: 0..<name.count)]
    let lastName = name[Int.random(in: 0..<name.count)]
    let fullname = "\(familyName) \(middleName) \(lastName)"
    let dataOfBirth = "\(Int.random(in: 1980..<1992))-\(Int.random(in: 1..<13))-\(Int.random(in: 1..<31))"
    let isFemale = Int.random(in: 0..<40) % 2 == 0

    let numberOfFaculty = 5
    let idFaculty = Int.random(in: 1..<6)
    print("INSERT INTO GIANGVIEN VALUES (NULL, '\(id)',\(idFaculty),'\(fullname)','\(dataOfBirth)','\(isFemale ? "Nam" : "Nữ")','\(UUID().uuidString)','\(UUID().uuidString)','\(id)');")
}

let subjects = [("ENGR111","Tin học đại cương",3,1),
                ("ITL112","Pháp luật đại cương",2,1),
                ("ENGL111","Tiếng Anh 1",2,1),
                ("COPS111","Kỹ năng giao tiếp và thuyết trình",3,1),
                ("MATH111","Giải tích hàm một biến",3,1),
                ("IDEO111","Nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1",2,2),
                ("ENGL122","Tiếng Anh 2",3,2),
                ("MATH122","Giải tích hàm nhiều biến",3,2),
                ("MATH233","Đại số tuyến tính",3,2),
                ("IDEO111","Nguyên lý cơ bản của chủ nghĩa Mác-Lênin 3",3,2),
                ("CSE203","Toán rời rạc",3,2),
                ("CSE370","Kiến trúc máy tính",4,3),
                ("CSE280","Ngôn ngữ lập trình",4,3),
                ("ENGL233","Tiếng Anh 3",3,3),
                ("PHYS121","Vật lý đại cương",3,3),
                ("MATH254","Xác suất thống kê",3,3),
                ("IDEO243","Tư tưởng Hồ Chí Minh",2,3),
                ("CSE281","Cấu trúc dữ liệu và giải thuật",3,4),
                ("CSE381","Lập trình nâng cao",3,4),
                ("CSE484","Cơ sở dữ liệu",4,4),
                ("CSE390","Tiếng Anh chuyên ngành công nghệ thông tin",3,4),
                ("IDEO234","Đường lối cách mạng của ĐCSVN",3,4),
                ("CSE489","Mạng máy tính",3,5),
                ("CSE486","Hệ quản trị cơ sở dữ liệu",3,5),
                ("CSE480","Phân tích thiết kế hệ thống thông tin",3,5),
                ("CSE492","Trí tuệ nhân tạo",3,6),
                ("CSE482","Hệ điều hành",3,6),
                ("CSE481","Công nghệ phần mềm",3,6),
                ("CSE487","Đồ hoạ máy tính",3,6),
                ("CSE445","Học máy",3,7),
                ("CSE488","An toàn và bảo mật thông tin",3,7),
                ("CSE395","Chuyên đề 1",1,7)
                ,("CSE409","Chuyên đề 2",2,8)
                ,("CSE465","Thực tập tốt nghiệp công nghệ thông tin",2,8)
                ,("CSE101","Nhập môn công nghệ thông tin",2,2)
                ,("CSE103","Nhập môn tư duy tính toán",2,2)
                ,("CSE284","Lập trình Java",3,4)
                ,("CSE282","Nhập môn lập trình khoa học dữ liệu",3,4)
                ,("CSE451","Phân tích và xử lý tín hiệu số",3,4)
                ,("CSE371","Phương pháp số",3,5)
                ,("CSE376","Lý thuyết tính toán",3,5)
                ,("CSE460","Tương tác người máy",3,5)
                ,("CSE393","Nhập môn điện toán đám mây",3,5)
                ,("CSE390","Thống kê ứng dụng",3,5)
                ,("CSE485","Công nghệ Web",3,5)
                ,("CSE441","Phát triển ứng dụng cho các thiết bị di động",3,6)
                ,("CSE461","Phân tích yêu cầu phần mềm",3,6)
                ,("CSE301","Linux và phần mềm mã nguồn mở",3,6)
                ,("CSE415","Lập trình đồ học 3D",3,7)
                ,("CSE423","Các  vấn đề tiên tiến trong thiết kết phần mềm",3,7)
                ,("CSE423","Lập trình phân tán",3,7)
                ,("CSE425","Hệ thống thông tin địa lý",3,7)
                ,("CSE405","Quản trị hệ thống thông tin",3,7)
                ,("CSE584","Cơ sở dữ liệu nâng cao",3,7)
                ,("CSE426","Thuật toán ứng dụng",3,7)
                ,("CSE420","Thiết kế mạng",3,7)
                ,("CSE404","Khai phá dữ liệu",3,8)
                ,("CSE456","Xử lý ảnh",3,8)
                ,("CSE411","Phát triển dự án phần mềm",3,8)
                ,("CSE547","Thương mại điện tử",3,8)
                ,("CSE418","Truy hồi thông tin và tìm kiếm web",3,8)
                ,("CSE419","Mạng không dây và di động",3,8)
                ,("CSE421","Quản trị mạng",3,8)
                ,("CSE406","Phân tích dữ liệu lớn",3,8)
                ,("CSE427","Mạng no ron và ứng dụng",3,8)
                ,("CSE494","Thiết kế và phát triển game",3,8)
                ,("CSE483","Chương trình dịch",3,8)]

subjects.forEach { (item) in
    print("INSERT INTO MONHOC VALUES (NULL,'\(item.0)','\(item.1)',\(item.2),\(item.3));")
}

// -- LOPMONHOC
// DROP TABLE IF EXISTS LOPMONHOC;
// CREATE TABLE LOPMONHOC (
//     ID              INT NOT NULL AUTO_INCREMENT,
//     MaLopMonhoc     VARCHAR(255) NOT NULL UNIQUE,
//     IDGiangvien     INT NOT NULL UNIQUE,
//     TenLopmonhoc    VARCHAR(255) UNIQUE,
//     PRIMARY KEY(ID),
//     FOREIGN KEY (IDGiangvien) REFERENCES GIANGVIEN(ID)
// );
// INSERT INTO LOPMONHOC VALUES (NULL, '',)
for index in 1..<21 {
    let subject_select = subjects[Int.random(in: 0..<subjects.count)]
    let id_class = "\(subject_select.0)-\(index)-22"
    let id_lecture  = index

    let name = "\(subject_select.1)-\(index)-22"
    print("INSERT INTO GIANGVIEN VALUES (NULL, '\(id_class)',\(id_lecture),'\(name)');")
}
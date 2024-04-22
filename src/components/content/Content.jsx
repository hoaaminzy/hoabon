import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import bodethi from "../../images/bodethi.jpeg";
import Choose from "../choose/Choose";
import tieptheo from "../../images/tiep-theo-tro-lai.png";
import hoanthanh from "../../images/hoan-thanh.png";
import banner from "../../images/banner.png";
import { useNavigate } from "react-router-dom";
const Content = () => {

  return (
    <Container className="flex-container">
      <Row>
        <div>
          <img src={banner} alt="" className="img-banner" />
        </div>
      </Row>
      <Row>
        <h1 className="text-center pt-5">
          Thi Lý Thuyết Bằng Lái Xe Máy A1 Online 2023
        </h1>
        <p className="text-center fw-bold pt-2 fs-4">
          ĐÂY LÀ BÀI THI THỬ LÝ THUYẾT A1 (GIẤY PHÉP LÁI XE HẠNG A1) CHUẨN CỦA
          BỘ GIAO THÔNG VẬN TẢI
        </p>
      </Row>
      <Row>
        <Col sm={8}>
          <Row>
            <h2 className="text-center fw-bold p-2">
              BỘ ĐỀ THI THỬ BẰNG LÁI XE MÁY A1
            </h2>
            <p className="fs-5">
              Bộ đề <strong>thi bằng lái xe A1</strong> (lý thuyết bằng lái xe
              máy) sẽ có tổng cộng <strong> 25 câu hỏi</strong>, mỗi câu hỏi chỉ
              có <strong>duy nhất 1 đáp án đúng</strong> .
            </p>
            <p className="fs-5">
              Dưới đây là tổng hợp 8 bộ đề A1 chuẩn tương đương 200 câu hỏi để
              ôn tập thi bằng lái xe máy hạng A1. Thí sinh có thể{" "}
              <strong> làm online trên trang web</strong> và sẽ{" "}
              <strong>có đáp án và giải thích sau khi hoàn thành!</strong>
            </p>
            <p className="fs-5">
              {`>>>`}Xem kỹ <Link to="/">ĐIỀU KIỆN THI A1</Link> trước khi tham
              gia <strong>thi bằng lái xe máy!</strong>
            </p>
          </Row>
          <Row>
            <h2>Cấu trúc và yêu cầu bài thi:</h2>
            <ul className="px-5 fs-5">
              <li>
                <strong>Số câu hỏi: 25 Câu</strong>
              </li>
              <li>
                <strong>Đạt khi làm đúng:</strong> 21/25 Câu.
              </li>
              <li>
                <strong>Thời gian làm bài thi:</strong> 19 Phút
              </li>
              <li>
                <strong>Số câu điểm liệt:</strong> 01 câu
              </li>
            </ul>
            <Row className="fs-5">
              <p>
                <strong>Lưu ý:</strong> Nếu làm sai{" "}
                <strong>“Câu Điểm Liệt”</strong> đồng nghĩa với việc{" "}
                <strong> “KHÔNG ĐẠT”</strong> cho dù các câu hỏi còn lại làm
                đúng hết.
              </p>
              <p>
                <strong>ĐẠT:</strong> Khi làm đúng 21 câu và không sai{" "}
                <Link className="text-danger" to="/">
                  câu điểm liệt.
                </Link>
              </p>
              <p>
                <strong>Xem ngay:</strong>{" "}
                <Link className="text-danger" to="/">
                  Hướng dẫn đăng ký tham gia thi A1
                </Link>
              </p>
            </Row>

            <Choose />
            <p className="fs-5">
              Với 8 bộ đề thi A1 này tương đương với 200 câu hỏi lý thuyết gồm
              cả luật giao thông, biển báo và sa hình. 200 câu hỏi chuẩn của cục
              quản lý đường bộ đã hoàn toàn đủ để thí sinh có kiến thức cho kỳ
              thi bằng lái xe máy A1 2022.
            </p>
            <Row>
              <h2>Kiến trúc đề thi bằng lái xe máy A1</h2>
              <p className="fs-5">
                Đề thi lý thuyết bằng lái xe A1 sẽ có 3 dạng câu hỏi chính:
              </p>
              <ul className="px-5 fs-5">
                <li>
                  <strong>Dạng 1:</strong>{" "}
                  <Link to="/" className="text-danger">
                    Các câu hỏi về Luật giao thông A1
                  </Link>
                </li>
                <li>
                  <strong>Dạng 2:</strong>{" "}
                  <Link to="/" className="text-danger">
                    Các câu hỏi về Biển báo A1
                  </Link>
                </li>
                <li>
                  <strong>Dạng 3:</strong>{" "}
                  <Link to="/" className="text-danger">
                    Các câu hỏi Sa hình A1
                  </Link>
                </li>
              </ul>
              <p className="fs-5">
                Cả 3 dạng câu hỏi trên sẽ được phân bổ tùy từng bài thi nhưng sẽ
                chắc chắn xuất hiện cả 3 dạng câu hỏi trên trong phần thi lý
                thuyết.
              </p>
            </Row>
            <Row>
              <h2>Hướng dẫn thi A1 Online</h2>
              <ul className="px-5 fs-5">
                <li>Click vào ô hình tròn “O” để chọn đáp án đúng</li>
                <li>
                  Bấm vào nút [ Tiếp theo {">"} ] để sang câu hỏi tiếp theo
                </li>
                <li>Bấm {"[ < Trở lại ]"} để quay lại câu hỏi trước</li>
                <div className="pt-3 d-flex justify-content-center aligns-item-center">
                  <img src={tieptheo} alt="" className="w-50 h-auto " />
                </div>
              </ul>

              <ul className="px-5 fs-5">
                <li>
                  Sau khi đã trả lời hết tất cả các câu hỏi, bấm [ HOÀN THÀNH ]
                  để xem kết quả bài thi!
                </li>
                <div className="pt-3 d-flex justify-content-center aligns-item-center">
                  <img src={hoanthanh} alt="" className="w-50 h-auto " />
                </div>
              </ul>
            </Row>
            <Row>
              <h2>Lưu ý khi làm bài thi lý thuyết A1 online</h2>
              <ul className="px-5 fs-5">
                <li>
                  Không sử dụng tài liệu trong quá trình làm bài (sau khi hoàn
                  thành sẽ có đáp án)
                </li>
                <li>Tập trung làm bài thi tại nơi yên tĩnh</li>
                <li>
                  Không bấm phím F5 hay tải lại trang trong quá trình làm bài
                  thi (Tránh làm mất kết quả)
                </li>
                <li>Không bỏ qua các câu hỏi trong quá trình làm bài</li>
                <li>
                  Xem lại đáp án cẩn thận sau khi hoàn thành bài thi để ghi nhớ
                  tốt hơn
                </li>
                <li>
                  Hãy làm đủ 8 bộ đề – 200 câu hỏi sát hạch A1 để vững kiến thức
                  hơn
                </li>
                <li>
                  Hãy chắc chắn đã xem qua{" "}
                  <Link to="" className="text-danger">
                    {" "}
                    20 câu điểm liệt lý thuyết A1
                  </Link>{" "}
                  này để tránh bị trượt khi thi.
                </li>
              </ul>
            </Row>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <h2 className="fw-bold fs-3">
              Phần mềm luyện thi lý thuyết 200 câu A1
            </h2>
            <img src={bodethi} className="banner-img py-3" alt="" />
            <Row className="fs-5 pt-3">
              <p>
                Phần mềm luyện thi lý thuyết A1 200 câu dựa trên cấu trúc đề thi
                của Tổng Cục Đường Bộ Việt Nam quy định trong kỳ thi sát hạch
                chính thức
              </p>
              <p>
                Học viên có thể sử dụng trực tiếp phần mềm luyện thi bằng lái xe
                A1 Online ngay trên điện thoại iphone, android hay máy tính mà
                không cần phải tải hay cài đặt. Tất cả những gì bạn cần là kết
                nối Wi-Fi/4G vô cùng tiện lợi.
              </p>
              <p>
                Khi làm xong 8 bộ đề thi của thia1.com, bạn sẽ nắm được toàn bộ
                nội dung của 200 câu hỏi hạng A1 được Tổng Cục Đường Bộ Việt Nam
                áp dụng trong kỳ thi sát hạch GPLX A1 ở thời điểm hiện tại.
              </p>
              <p>
                Nếu có bất kỳ thắc mắc cần giải đáp về câu hỏi trong đề thi, học
                viên hãy nhập theo cú pháp{" "}
                <strong>“thứ tự câu hỏi + đề số…”</strong> để chúng tôi giải đáp
                trực tiếp!
              </p>
              <p>
                Nếu bạn có bất cứ thắc mắc nào về để thi thì hãy liên hệ với
                chúng tôi qua trang fanpage
              </p>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="pb-5">
        <h2>Mẹo thi lý thuyết bằng lái xe A1</h2>
        <div style={{ width: "100%", height: "700px" }} className="pt-3">
          <iframe
            style={{ height: "100%", width: "100%" }}
            src="https://www.youtube.com/embed/PvSYRB8eoXQ?si=8ndLntHDyafpWJWs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="pt-2 fs-5">
            Tham khảo video hướng dẫn giải 200 câu hỏi A1 giúp nắm rõ nội dung
            và cách chọn đáp án nhanh nhất.
          </p>
        </div>
      </Row>

      <Row className="pt-3">
        <h2>Hướng dẫn bài thi thực hành lái xe A1</h2>
        <div style={{ width: "100%", height: "700px" }} className="pt-3">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://www.youtube.com/embed/ISJeeUw_xKs?si=uTPkc-ZZAB7OMtez"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="pt-2 fs-5">
            Video hướng dẫn bài thi thực hành lái xe A1
          </p>
        </div>
      </Row>
      <Row className="pt-5">
        <h2>Hướng dẫn bí quyết học và thi A1 hiệu quả</h2>
        <ul className="fs-5 px-5">
          <li>
            <strong>Bước 1:</strong> Tham khảo và học qua{" "}
            <Link to="" className="text-danger">
              200 câu hỏi thi bằng lái xe A1
            </Link>{" "}
            có đáp án giải thích dễ hiểu do chúng tôi biên soạn
          </li>
          <li>
            <strong>Bước 2:</strong> Các bạn tiến hành xem qua{" "}
            <Link to="/" className="text-danger">
              {" "}
              mẹo thi lý thuyết A1
            </Link>{" "}
            giúp học và ghi nhớ 200 câu hỏi lý thuyết nhanh hơn
          </li>
          <li>
            <strong>Bước 3:</strong> Làm qua 20 câu điểm liệt, phần này cực kỳ
            quan trọn mọi người không được làm sai
          </li>
          <li>
            <strong>Bước 4:</strong> Luyện thành tạo 8 bộ đề thi bằng lái xe A1
            do chúng tôi biên soạn, nếu thành thạo 8 bộ đề này thì bài thi GPLX
            A1 sẽ cực kỳ dễ dàng như trở bàn tay
          </li>
          <li>
            <strong>Bước 5:</strong> Xem qua video thực hành và luyện tập các
            bài thi sa hình, tham gia các buổi tập xe miễn phí để có được tỷ lệ
            đậu cao nhất.
          </li>
          <li>
            <strong>Bước 6:</strong> Trước ngày thi các bạn nên thư giãn đầu óc
            bằng cách dừng ngay mọi việc kể cả việc ôn thi, việc học nhồi nhét
            sẽ khiến bạn căng thẳng hơn, đi ngủ sớm để não bộ ở trạng thái tốt
            hơn trước ngày thi.
          </li>
        </ul>
        <p className="fs-5">
          Cuối cùng chúc tất cả các bạn thi thật tốt và đạt được điểm cao trong
          kỳ thi sát hạch GPLX A1.
        </p>
      </Row>
    </Container>
  );
};

export default Content;


(()=> {
  if (window.__v85StandardsLoaded) return;
  window.__v85StandardsLoaded = true;

  const page=(document.body.dataset.page||location.pathname.split('/').pop()||'').split('?')[0];

  const globalNote = `
    <div class="v85-age-policy">
      <b>Khung lão khoa Việt Nam:</b> ứng dụng xem người từ <b>đủ 60 tuổi trở lên</b> là nhóm lão khoa.
      Nếu một khuyến cáo có mốc tuổi riêng (ví dụ ≥65, 70–79, ≥80), ứng dụng giữ nguyên mốc của khuyến cáo và ghi rõ nguồn.
    </div>`;

  function insertGlobal(){
    const host=document.querySelector('.content');
    if(host && !document.querySelector('.v85-age-policy')){
      const banner=host.querySelector('.update-banner');
      if(banner) banner.insertAdjacentHTML('afterend',globalNote);
      else host.insertAdjacentHTML('afterbegin',globalNote);
    }
  }

  const tables = {
    'dai-thao-duong.html': `
      <section class="v85-complete" id="v85-diabetes-complete">
        <div class="v85-title-row"><h2>Phân loại & mục tiêu đầy đủ — Đái tháo đường ở người cao tuổi</h2><span>ADA 2026</span></div>

        <h3>A. Tiêu chuẩn chẩn đoán đái tháo đường ở người không mang thai</h3>
        <table class="v85-table">
          <tr><th>Tiêu chuẩn</th><th>Ngưỡng</th></tr>
          <tr><td>HbA1c</td><td>≥6,5%</td></tr>
          <tr><td>Glucose huyết tương lúc đói (nhịn ≥8 giờ)</td><td>≥126 mg/dL (7,0 mmol/L)</td></tr>
          <tr><td>Glucose huyết tương 2 giờ sau nghiệm pháp dung nạp 75 g glucose</td><td>≥200 mg/dL (11,1 mmol/L)</td></tr>
          <tr><td>Glucose huyết tương bất kỳ + triệu chứng tăng đường huyết điển hình hoặc cơn tăng đường huyết</td><td>≥200 mg/dL (11,1 mmol/L)</td></tr>
        </table>
        <div class="v85-note">Nếu không có tăng đường huyết rõ ràng, cần xác nhận bằng hai kết quả bất thường. Đây là <b>ngưỡng chẩn đoán</b>, khác với <b>mục tiêu điều trị</b>.</div>

        <h3>B. Khung mục tiêu ADA 2026 cho người cao tuổi — đầy đủ 3 nhóm</h3>
        <table class="v85-table">
          <tr>
            <th>Tình trạng sức khỏe</th><th>HbA1c hợp lý</th><th>Đường trước ăn</th>
            <th>Đường lúc ngủ</th><th>HA</th><th>Lipid</th>
          </tr>
          <tr>
            <td><b>Khỏe</b>: ít bệnh mạn ổn định, nhận thức và chức năng còn nguyên</td>
            <td>&lt;7,0–7,5%</td><td>80–130 mg/dL</td><td>80–180 mg/dL</td><td>&lt;130/80 mmHg</td>
            <td>Statin nếu không chống chỉ định/không dung nạp</td>
          </tr>
          <tr>
            <td><b>Phức tạp/trung gian</b>: nhiều bệnh mạn, hoặc ≥2 suy giảm IADL, hoặc suy giảm nhận thức nhẹ–vừa</td>
            <td>&lt;8,0%</td><td>90–150 mg/dL</td><td>100–180 mg/dL</td><td>&lt;130/80 mmHg</td>
            <td>Statin nếu không chống chỉ định/không dung nạp</td>
          </tr>
          <tr>
            <td><b>Rất phức tạp/sức khỏe kém</b>: chăm sóc dài hạn/bệnh giai đoạn cuối, suy giảm nhận thức vừa–nặng hoặc ≥2 suy giảm ADL</td>
            <td>Không dựa chủ yếu vào HbA1c; tránh hạ đường huyết và tăng đường huyết có triệu chứng</td>
            <td>100–180 mg/dL</td><td>110–200 mg/dL</td><td>&lt;140/90 mmHg</td>
            <td>Cân nhắc khả năng còn hưởng lợi</td>
          </tr>
        </table>
        <div class="v85-warn"><b>Không được học máy móc “≥65 tuổi = HbA1c 7,5%”.</b> ADA phân nhóm theo bệnh đồng mắc, nhận thức, ADL/IADL, suy yếu, nguy cơ hạ đường huyết và gánh nặng điều trị.</div>
      </section>`,

    'tang-huyet-ap.html': `
      <section class="v85-complete" id="v85-htn-complete">
        <div class="v85-title-row"><h2>Phân loại, ngưỡng điều trị và mục tiêu đầy đủ — VSH/VNHA 2022</h2><span>Việt Nam</span></div>

        <h3>A. Phân loại huyết áp phòng khám</h3>
        <table class="v85-table">
          <tr><th>Phân loại</th><th>HATT (mmHg)</th><th>HATTr (mmHg)</th></tr>
          <tr><td>Bình thường</td><td>&lt;130</td><td>và &lt;85</td></tr>
          <tr><td>Bình thường cao / tiền tăng huyết áp</td><td>130–139</td><td>và/hoặc 85–89</td></tr>
          <tr><td>Tăng huyết áp độ 1</td><td>140–159</td><td>và/hoặc 90–99</td></tr>
          <tr><td>Tăng huyết áp độ 2</td><td>≥160</td><td>và/hoặc ≥100</td></tr>
          <tr><td>Cơn tăng huyết áp</td><td>≥180</td><td>và/hoặc ≥120</td></tr>
          <tr><td>Tăng huyết áp tâm thu đơn độc</td><td>≥140</td><td>và &lt;90</td></tr>
        </table>

        <h3>B. Ngưỡng huyết áp phòng khám để bắt đầu điều trị thuốc theo tuổi</h3>
        <table class="v85-table">
          <tr><th>Tuổi</th><th>Không bệnh đồng mắc</th><th>Có BMV/ĐTĐ/suy tim/BTM</th><th>Ngưỡng HATTr</th></tr>
          <tr><td>18–69</td><td>HATT ≥140</td><td>HATT ≥130</td><td>≥90; có thể ≥85 ở nguy cơ cao/ĐTĐ/BTM/BMV/đột quỵ-TIA</td></tr>
          <tr><td>70–79</td><td>HATT ≥140</td><td>HATT ≥140</td><td>≥90</td></tr>
          <tr><td>≥80</td><td>HATT ≥160</td><td>HATT ≥160</td><td>≥90</td></tr>
        </table>

        <h3>C. Mục tiêu huyết áp phòng khám khi đã điều trị</h3>
        <table class="v85-table">
          <tr><th>Tuổi</th><th>HATT không bệnh đồng mắc</th><th>HATT có bệnh đồng mắc</th><th>HATTr</th></tr>
          <tr><td>18–69</td><td>120–&lt;140</td><td>120–&lt;130; thấp hơn có thể chấp nhận nếu dung nạp</td><td>&lt;80</td></tr>
          <tr><td>≥70</td><td colspan="2">&lt;140, có thể xuống khoảng 130 nếu dung nạp; thấp hơn có thể chấp nhận nếu dung nạp</td><td>&lt;80</td></tr>
        </table>
        <div class="v85-note">THA + ĐTĐ típ 2/BMV, tuổi &gt;65 và không tái tưới máu: khuyến cáo 2022 lưu ý HATTr khoảng 70–79 mmHg. Người ≥80 hoặc suy yếu phải cá thể hóa theo nhận thức, hoạt động hằng ngày và dung nạp.</div>
      </section>`,

    'gout.html': `
      <section class="v85-complete" id="v85-gout-complete">
        <div class="v85-title-row"><h2>Tiêu chuẩn ACR/EULAR 2015 — đầy đủ điểm</h2><span>Classification</span></div>
        <div class="v85-note"><b>Bước vào:</b> có ≥1 đợt sưng/đau/ấn đau ở khớp ngoại biên hoặc bursa. <b>Đủ ngay:</b> thấy tinh thể monosodium urate trong dịch khớp/bursa có triệu chứng hoặc tophus → không cần chấm điểm.</div>
        <table class="v85-table">
          <tr><th>Lĩnh vực</th><th>Phân loại</th><th>Điểm</th></tr>
          <tr><td>Kiểu khớp</td><td>Cổ chân/giữa bàn chân, không MTP1</td><td>1</td></tr>
          <tr><td></td><td>MTP1</td><td>2</td></tr>
          <tr><td>Đặc điểm cơn</td><td>1 / 2 / 3 đặc điểm: đỏ, rất đau khi chạm/đè, khó đi lại hoặc không dùng được khớp</td><td>1 / 2 / 3</td></tr>
          <tr><td>Diễn tiến cơn điển hình</td><td>1 đợt điển hình</td><td>1</td></tr>
          <tr><td></td><td>≥2 đợt điển hình</td><td>2</td></tr>
          <tr><td>Tophus lâm sàng</td><td>Có</td><td>4</td></tr>
          <tr><td>Acid uric máu</td><td>&lt;4 mg/dL</td><td>−4</td></tr>
          <tr><td></td><td>4–&lt;6 mg/dL</td><td>0</td></tr>
          <tr><td></td><td>6–&lt;8 mg/dL</td><td>2</td></tr>
          <tr><td></td><td>8–&lt;10 mg/dL</td><td>3</td></tr>
          <tr><td></td><td>≥10 mg/dL</td><td>4</td></tr>
          <tr><td>Dịch khớp âm tính tinh thể MSU</td><td>Âm tính khi đã soi đúng kỹ thuật</td><td>−2</td></tr>
          <tr><td>Siêu âm/DECT</td><td>Dấu double-contour hoặc lắng đọng urate trên DECT</td><td>4</td></tr>
          <tr><td>X-quang</td><td>Erosion điển hình gout</td><td>4</td></tr>
        </table>
        <div class="v85-note">Tổng tối đa 23 điểm; <b>≥8 điểm</b> phân loại gout. Đây là <b>tiêu chuẩn phân loại</b>, không phải lý do để bỏ chọc dịch khi cần loại nhiễm trùng khớp.</div>
      </section>`,

    'suy-giap.html': `
      <section class="v85-complete" id="v85-thyroid-complete">
        <div class="v85-title-row"><h2>Phân loại suy giáp theo mẫu TSH–FT4</h2><span>Không tự bịa “độ 1–2–3”</span></div>
        <table class="v85-table">
          <tr><th>Thể</th><th>TSH</th><th>FT4</th><th>Ý nghĩa</th></tr>
          <tr><td>Suy giáp nguyên phát rõ</td><td>Tăng</td><td>Giảm</td><td>Tuyến giáp không tạo đủ hormon; tuyến yên tăng TSH bù.</td></tr>
          <tr><td>Suy giáp dưới lâm sàng</td><td>Tăng</td><td>Bình thường</td><td>Điều trị tùy TSH, triệu chứng, tuổi, tim mạch và nguyên nhân.</td></tr>
          <tr><td>Suy giáp trung ương</td><td>Thấp hoặc “bình thường không thích hợp”</td><td>Giảm</td><td>Không dùng TSH đơn độc để loại trừ.</td></tr>
        </table>
        <div class="v85-note">Nếu guideline không có hệ “phân độ” chính thức, ứng dụng sẽ ghi đúng các <b>thể bệnh</b> thay vì tự tạo độ.</div>
      </section>`,

    'loang-xuong.html': `
      <section class="v85-complete" id="v85-bone-complete">
        <div class="v85-title-row"><h2>Phân loại mật độ xương bằng T-score</h2><span>DXA</span></div>
        <table class="v85-table">
          <tr><th>Phân loại</th><th>T-score</th></tr>
          <tr><td>Bình thường</td><td>≥ −1,0</td></tr>
          <tr><td>Mật độ xương thấp / osteopenia</td><td>&lt; −1,0 đến &gt; −2,5</td></tr>
          <tr><td>Loãng xương</td><td>≤ −2,5</td></tr>
          <tr><td>Loãng xương nặng/established osteoporosis theo khung kinh điển</td><td>T-score ≤ −2,5 kèm ≥1 gãy xương do chấn thương mức thấp</td></tr>
        </table>
        <div class="v85-warn">T-score không phải toàn bộ nguy cơ gãy xương. Người lớn tuổi còn phải đánh giá gãy xương trước đó, FRAX, té ngã và nguyên nhân thứ phát.</div>
      </section>`,

    'tao-bon.html': `
      <section class="v85-complete" id="v85-constipation-complete">
        <div class="v85-title-row"><h2>Rome IV — tiêu chuẩn táo bón chức năng đầy đủ</h2><span>Full criteria</span></div>
        <p>Có <b>≥2</b> tiêu chí sau trong &gt;25% lần đi tiêu:</p>
        <ol>
          <li>Rặn khi đi tiêu.</li><li>Phân cứng/lổn nhổn (Bristol 1–2).</li>
          <li>Cảm giác đi chưa hết.</li><li>Cảm giác tắc nghẽn hậu môn–trực tràng.</li>
          <li>Cần thủ thuật bằng tay để hỗ trợ đi tiêu.</li><li>&lt;3 lần đi tiêu tự phát/tuần.</li>
        </ol>
        <p>Đồng thời: phân lỏng hiếm khi xảy ra nếu không dùng nhuận tràng; không đủ tiêu chuẩn hội chứng ruột kích thích; tiêu chuẩn trong <b>3 tháng gần đây</b>, khởi phát triệu chứng ít nhất <b>6 tháng</b> trước chẩn đoán.</p>
      </section>`
  };

  function injectTable(){
    const html=tables[page];
    if(!html || document.querySelector('.v85-complete')) return;
    const core=document.querySelector('[data-v84-core]');
    if(core) core.insertAdjacentHTML('afterend',html);
    else {
      const hero=document.querySelector('.lesson-page .hero,.v84-page-hero,.hero');
      if(hero) hero.insertAdjacentHTML('afterend',html);
    }
  }

  function run(){ insertGlobal(); injectTable(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();
// ============================================================
//  CẤU HÌNH ỨNG DỤNG TỔNG HỢP BÁO CÁO
//  Đặt file này cùng thư mục với index.html
// ============================================================

// URL Apps Script sau khi deploy DriveReader.gs
// Lấy tại: script.google.com → Triển khai → Triển khai mới → Ứng dụng web
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvQeWn7oASbweF5D08QY1lZuOmdhBQ4IQMRlY5wbcYc5wR4rtPv0e-btefHN8LxOA/exec';

// URL Apps Script của app Báo cáo (CodeV3.gs)
// App sẽ tự động lấy thư mục Drive từ đây — không cần paste link thư mục thủ công
// Lấy tại: script.google.com → (project CodeV3) → Triển khai → Ứng dụng web → Copy URL
const BAOCAO_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwx0drez16zrYw4GuT8tRHB4Sp6T5CJSXiPfh6ot0U3Udl5CxkIv-CZe-FBw7i5Lg8cFA/exec';

// ⚠️ DEFAULT_DRIVE_FOLDER không còn dùng nữa — app tự lấy qua BAOCAO_SCRIPT_URL
// const DEFAULT_DRIVE_FOLDER = '';

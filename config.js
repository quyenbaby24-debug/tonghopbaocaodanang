// ============================================================
//  CẤU HÌNH ỨNG DỤNG TỔNG HỢP BÁO CÁO
//  Đặt file này cùng thư mục với index.html
// ============================================================

// URL Apps Script sau khi deploy DriveReader.gs
// Lấy tại: script.google.com → Triển khai → Triển khai mới → Ứng dụng web
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5oJ5Rl7UFw6cgikSsiZwrADnx4FSjaZjVkc13GsVEZFemt3ggr-CcuKVyCq6U_91x/exec';

// URL Apps Script của app Báo cáo (CodeV3.gs)
// App sẽ tự động lấy thư mục Drive từ đây — không cần paste link thư mục thủ công
// Lấy tại: script.google.com → (project CodeV3) → Triển khai → Ứng dụng web → Copy URL
const BAOCAO_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgVq6rNuV1NzroFTBolfUXyujh8OHymRqskiwGX2bv1GVopwffN_VNMAnXUAmN5uSSYA/exec';

// ⚠️ DEFAULT_DRIVE_FOLDER không còn dùng nữa — app tự lấy qua BAOCAO_SCRIPT_URL
// const DEFAULT_DRIVE_FOLDER = '';

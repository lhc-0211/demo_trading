export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-linear-to-b from-red-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-100">
        {/* Icon lỗi đẹp */}
        <div className="mx-auto mb-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Tiêu đề và mô tả */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Ồ không! Có lỗi xảy ra
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Chúng tôi không thể tải trang chủ lúc này. Đừng lo, đội ngũ đang cố
          gắng sửa chữa.
        </p>

        {/* Hiển thị thông báo lỗi ngắn gọn (không lộ stack cho user thường) */}
        {error instanceof Error && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg mb-8">
            {error.message || "Lỗi không xác định"}
          </p>
        )}

        {/* Nút thử lại chính */}
        <button
          onClick={() => reset()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Thử tải lại trang
        </button>

        {/* Nút phụ: quay về trang trước hoặc home */}
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900 underline transition"
          >
            ← Quay lại trang trước
          </button>
          <span className="mx-4 text-gray-400">|</span>
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 underline transition"
          >
            Về trang chủ
          </a>
        </div>

        {/* Chi tiết lỗi chỉ hiển thị ở dev mode */}
        {import.meta.env.DEV && error instanceof Error && (
          <details className="mt-10 text-left bg-gray-100 p-4 rounded-lg text-sm">
            <summary className="cursor-pointer font-medium text-gray-700 mb-2">
              Chi tiết lỗi (chỉ hiển thị khi phát triển)
            </summary>
            <pre className="text-xs text-red-700 overflow-auto max-h-60">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

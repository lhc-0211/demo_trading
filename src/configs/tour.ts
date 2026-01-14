export const TOUR_INTRO_STEPS = [
  {
    element: "#goblin-avatar",
    popover: {
      title: "Xin chào",
      description: `
        <div>
          Chào mừng bạn đến với <b>LHC Web Trading</b>.
        </div>
        <div>
          Một dự án mô phỏng nền tảng giao dịch chứng khoán trực tuyến, được xây dựng với mục tiêu trải nghiệm và trình diễn.
        </div>
      `,
    },
  },

  {
    element: "#goblin-avatar",
    popover: {
      title: "LHC Web Trading",
      description: `
        <div>
          LHC Web Trading là dự án mô phỏng nền tảng giao dịch chứng khoán trực tuyến, tập trung vào trải nghiệm người dùng, luồng nghiệp vụ giao dịch và khả năng mở rộng hệ thống.
        </div>
        <div>
          Dự án được xây dựng nhằm thể hiện kỹ năng frontend, tư duy UI/UX và xử lý dữ liệu thời gian thực.
        </div>
      `,
    },
  },

  {
    element: "#goblin-avatar",
    popover: {
      title: "Bạn đang xem với vai trò nào?",
      description: `
        <div style="margin-bottom: 8px">
          Nội dung giới thiệu sẽ được điều chỉnh theo vai trò bạn quan tâm.
        </div>
        <div style="display: flex; gap: 8px;">
          <div id="tour-user" class="driver-btn-user">
            Người dùng / HR
          </div>
          <div id="tour-dev" class="driver-btn-dev">
            Developer
          </div>
        </div>
      `,
    },
  },
];

export const USER_INTRO_STEPS = [
  {
    element: "#master-avatar",
    popover: {
      title: "Phiên bản",
      description: `
      <div>
        Đây là phiên bản mô phỏng giao diện
        và luồng thao tác giao dịch cơ bản.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Phạm vi trải nghiệm",
      description: `
      <div>
        Phiên bản hiện tại tập trung vào <b>bảng giá</b> và <b>chức năng đặt lệnh</b>.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Bảng giá",
      description: `
      <div>
        Bảng giá hiển thị thông tin thị trường theo thời gian thực, giúp bạn theo dõi biến động nhanh chóng.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Đặt lệnh",
      description: `
      <div>
        Tại đây, bạn có thể thực hiện các thao tác đặt lệnh mua / bán cơ bản.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Bắt đầu trải nghiệm",
      description: `
      <div>
      <div>
        Bạn đã sẵn sàng khám phá
        bảng giá và đặt lệnh trong phiên bản này.
      </div>
      <div>Nếu muốn liên hệ hoặc góp ý vui lòng liên hệ cho LHC qua email: <b style="color: blue;">lhc021120@gmail.com</b>.
      </div>
      </div>
    `,
    },
  },
];

export const DEV_INTRO_STEPS = [
  {
    element: "#master-avatar",
    popover: {
      title: "Developer Mode",
      description: `
      <div>
        Bạn đang xem <b>LHC Web Trading</b> với vai trò <b>Developer</b>.
      </div>
      <div>
        Phần hướng dẫn này tập trung vào kiến trúc frontend, cách tổ chức state, luồng dữ liệu và các điểm kỹ thuật chính.
      </div>
      <div>
        Nội dung mang tính trình diễn và phân tích kỹ thuật, không đi sâu vào nghiệp vụ giao dịch.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Kiến trúc tổng thể",
      description: `
      <div>
        Ứng dụng được xây dựng theo mô hình SPA, tách biệt rõ giữa giao diện, state và logic xử lý.
      </div>
      <ul style="margin: 6px 0 0 16px;">
        <li>Component hóa theo chức năng</li>
        <li>Quản lý state tập trung</li>
        <li>Dễ mở rộng và bảo trì</li>
      </ul>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Luồng dữ liệu & Realtime",
      description: `
      <div>
        Dữ liệu bảng giá và trạng thái lệnh được cập nhật theo thời gian thực.
      </div>
      <div>
        Hệ thống xử lý việc đồng bộ dữ liệu, giảm render không cần thiết và đảm bảo trải nghiệm mượt.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "State & Form Handling",
      description: `
      <div>
        Các form giao dịch được kiểm soát chặt chẽ nhằm đảm bảo tính chính xác dữ liệu đầu vào.
      </div>
      <div>
        State được tách biệt giữa UI state và business state, giúp dễ kiểm soát và debug.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Hiệu năng & Trải nghiệm",
      description: `
      <div>
        Ứng dụng chú trọng tối ưu hiệu năng render, đặc biệt với các màn hình có nhiều dữ liệu.
      </div>
      <div>
        Áp dụng các kỹ thuật tối ưu để đảm bảo trải nghiệm người dùng ổn định.
      </div>
    `,
    },
  },
  {
    element: "#master-avatar",
    popover: {
      title: "Hoàn tất",
      description: `
      <div>
        Cảm ơn bạn đã xem qua phần trình diễn kỹ thuật của <b>LHC Web Trading</b>.
      </div>
      <div>
        Dự án được xây dựng với mục tiêu rõ ràng: code dễ đọc, dễ mở rộng và sát thực tế.
      </div>
      <div>Nếu muốn liên hệ hoặc góp ý vui lòng liên hệ cho LHC qua email: <b style="color: blue;">lhc021120@gmail.com</b>.
      </div>
    `,
    },
  },
];

export const HELP_STEPS = [
  {
    element: "#villager-avatar",
    popover: {
      title: "Xin chào",
      description: `
        <div>
          Bạn đang cần trợ giúp?
        </div>
        <div style="margin-bottom: 6px">
          Vui lòng chọn nội dung bạn cần hỗ trợ.
          Tôi sẽ hướng dẫn hoặc chuyển bạn đến kênh phù hợp.
        </div>
        <div style="display: flex; gap: 12px;">
          <div id="help-priceboard" class="driver-btn-user">
            Bảng giá
          </div>
          <div id="help-order" class="driver-btn-dev">
            Đặt lệnh
          </div>
          <div id="help-contract" class="driver-btn-dev">
            Liên hệ LHC
          </div>
        </div>
      `,
    },
  },
];

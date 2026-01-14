import GoblinTourGuide from "@/components/feature/tour/GoblinTourGuide";
import MasterTourGuide from "@/components/feature/tour/MasterTourGuide";
import { useEffect, useState } from "react";
const tourSteps = [
  {
    popover: {
      title: "Xin chào",
      description: `
        <div>
          Chào mừng bạn đến với <b>LHC Web Trading Demo</b>.
        </div>
        <div style="margin-top: 6px;">
          Một dự án mô phỏng nền tảng giao dịch chứng khoán trực tuyến,
          được xây dựng với mục tiêu trải nghiệm và trình diễn.
        </div>
      `,
    },
  },

  {
    popover: {
      title: "LHC Web Trading Demo",
      description: `
        <div>
          LHC Web Trading Demo là dự án mô phỏng nền tảng giao dịch chứng khoán trực tuyến,
          tập trung vào trải nghiệm người dùng, luồng nghiệp vụ giao dịch
          và khả năng mở rộng hệ thống.
        </div>
        <div style="margin-top: 6px;">
          Dự án được xây dựng nhằm thể hiện kỹ năng frontend,
          tư duy UI/UX và xử lý dữ liệu thời gian thực.
        </div>
      `,
    },
  },

  {
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

const userStep = [
  {
    popover: {
      title: "Bắt đầu trải nghiệm",
      description: `
      <div>
        Chào mừng bạn đến với <b>LHC Web Trading Demo</b>.
      </div>

      <div style="margin-top: 6px;">
        Trong vài bước tiếp theo, bạn sẽ được giới thiệu
        cách sử dụng giao diện và các chức năng chính
        như xem bảng giá, theo dõi danh mục và đặt lệnh.
      </div>

      <div style="margin-top: 6px;">
        Hãy cùng bắt đầu nhé!
      </div>
    `,
    },
  },
];

const devStep = [
  {
    popover: {
      title: "Developer Mode",
      description: `
      <div>
        Bạn đang xem <b>LHC Web Trading Demo</b> với vai trò <b>Developer</b>.
      </div>

      <div style="margin-top: 6px;">
        Phần hướng dẫn này tập trung vào kiến trúc frontend,
        cách tổ chức state, luồng dữ liệu và các điểm kỹ thuật chính.
      </div>

      <div style="margin-top: 6px;">
        Nội dung mang tính trình diễn và phân tích kỹ thuật,
        không đi sâu vào nghiệp vụ giao dịch.
      </div>
    `,
    },
  },
  {
    popover: {
      title: "Kiến trúc tổng thể",
      description: `
      <div>
        Ứng dụng được xây dựng theo mô hình SPA,
        tách biệt rõ giữa giao diện, state và logic xử lý.
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
    popover: {
      title: "Luồng dữ liệu & Realtime",
      description: `
      <div>
        Dữ liệu bảng giá và trạng thái lệnh
        được cập nhật theo thời gian thực.
      </div>

      <div style="margin-top: 6px;">
        Hệ thống xử lý việc đồng bộ dữ liệu,
        giảm render không cần thiết
        và đảm bảo trải nghiệm mượt.
      </div>
    `,
    },
  },
  {
    popover: {
      title: "State & Form Handling",
      description: `
      <div>
        Các form giao dịch được kiểm soát chặt chẽ
        nhằm đảm bảo tính chính xác dữ liệu đầu vào.
      </div>

      <div style="margin-top: 6px;">
        State được tách biệt giữa UI state và business state,
        giúp dễ kiểm soát và debug.
      </div>
    `,
    },
  },
  {
    popover: {
      title: "Hiệu năng & Trải nghiệm",
      description: `
      <div>
        Ứng dụng chú trọng tối ưu hiệu năng render,
        đặc biệt với các màn hình có nhiều dữ liệu.
      </div>

      <div style="margin-top: 6px;">
        Áp dụng các kỹ thuật tối ưu để đảm bảo
        trải nghiệm người dùng ổn định.
      </div>
    `,
    },
  },
  {
    popover: {
      title: "Hoàn tất",
      description: `
      <div>
        Cảm ơn bạn đã xem qua phần trình diễn kỹ thuật
        của <b>LHC Web Trading Demo</b>.
      </div>

      <div style="margin-top: 6px;">
        Dự án được xây dựng với mục tiêu rõ ràng:
        code dễ đọc, dễ mở rộng và sát thực tế. Nếu có vấn đề góp ý vui lòng liên hệ qua email: <b>lhc021120@gmail.com</b>.
      </div>
    `,
    },
  },
];

export default function PriceBoard() {
  const [isOpenGoblin, setIsOpenGoblin] = useState(true);
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const [type, setType] = useState<"user" | "dev">("user");
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const btnUser = document.getElementById(
        "tour-user"
      ) as HTMLDivElement | null;
      const btnDev = document.getElementById(
        "tour-dev"
      ) as HTMLDivElement | null;

      if (btnUser && !btnUser.dataset.eventAttached) {
        btnUser.onclick = () => {
          console.log("User clicked");
          setIsOpenMaster(true);
          setIsOpenGoblin(false);
          setType("user");
        };
        btnUser.dataset.eventAttached = "true"; // Tránh gắn nhiều lần
      }

      if (btnDev && !btnDev.dataset.eventAttached) {
        btnDev.onclick = () => {
          console.log("Dev clicked");
          setIsOpenGoblin(false);
          setIsOpenMaster(true);
          setType("dev");
        };
        btnDev.dataset.eventAttached = "true";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {isOpenGoblin && (
        <GoblinTourGuide
          steps={tourSteps}
          isOpen={isOpenGoblin}
          popoverClass="avatar-gobil"
          doneBtnText=""
        />
      )}

      {isOpenMaster && (
        <MasterTourGuide
          steps={type === "user" ? userStep : devStep}
          isOpen={isOpenMaster}
          doneBtnText=""
        />
      )}
    </div>
  );
}

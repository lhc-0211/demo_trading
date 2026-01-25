import {
  CellStyleModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  ModuleRegistry,
  TooltipModule,
  type ColDef,
  type ColGroupDef,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

ModuleRegistry.registerModules([
  CellStyleModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  TooltipModule,
]);

export default function PriceTable() {
  const { t } = useTranslation();

  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: "stock",
      headerName: "CK",
      pinned: "left",
      width: 72,
      headerClass: "col-header",
    },

    // ------------------- Giá tham chiếu -------------------
    {
      field: "ceil",
      headerName: "Trần",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },
    {
      field: "floor",
      headerName: "Sàn",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },
    {
      field: "ref",
      headerName: "TC",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },

    // ------------------- Bên mua -------------------
    {
      headerName: "Bên mua",
      children: [
        {
          field: "Giá 3",
          width: 78,

          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 3",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Giá 2",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 2",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Giá 1",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 1",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
      ],
    },

    // ------------------- Khớp lệnh -------------------
    {
      headerName: "Khớp lệnh",
      children: [
        {
          field: "Khớp",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "+/-",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "%",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
      ],
    },

    // ------------------- Bên bán -------------------
    {
      headerName: "Bên bán",
      children: [
        {
          field: "Giá 1",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 1",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Giá 2",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 2",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Giá 3",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "KL 3",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
      ],
    },

    // ------------------- Thông tin khác -------------------
    {
      field: "hight",
      headerName: "Cao",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },
    {
      field: "agv",
      headerName: "TB",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },
    {
      field: "low",
      headerName: "Thấp",
      width: 50,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },
    {
      field: "totalVolume",
      headerName: "Tổng KL",
      width: 78,
      headerClass: "col-header",
      headerTooltip: "Kéo & thả để sắp xếp cột",
    },

    // ------------------- NĐT NN -------------------
    {
      headerName: "GD NĐT NN",
      children: [
        {
          field: "Mua",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Bán",
          width: 78,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
        {
          field: "Room",
          width: 90,
          headerClass: "col-header",
          headerTooltip: "Kéo & thả để sắp xếp cột",
        },
      ],
    },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {};
  }, []);

  const data: any = [];
  const loading = false;

  return (
    <div className="w-full h-full">
      <AgGridReact
        rowData={data}
        loading={loading}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        sideBar="columns"
        animateRows={false}
        headerHeight={28}
        groupHeaderHeight={28}
        overlayNoRowsTemplate={`
          <div class="md:text-sm text-xs py-4">
            ${t("No data!")}
          </div>`}
        tooltipShowDelay={10}
      />
    </div>
  );
}

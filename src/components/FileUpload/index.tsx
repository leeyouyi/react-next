import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { type ChangeEvent, useEffect, useRef, useState } from "react";
import { read, utils, readFile } from "xlsx";

const Style = styled("div")(() => {
  return [
    {
      "& .file-btn:before": {
        width: "0",
      },
    },
    {
      "& .imgList": {
        flexWrap: "wrap",
        li: {
          display: "flex",
          paddingRight: "30px",
          paddingTop: "5px",
          paddingBottom: "5px",
        },
        ".imgBox": {
          height: "30px",
          img: {
            height: "100%",
          },
        },
        ".fileName": {
          position: "relative",
          paddingLeft: "5px",
          span: {
            color: "#8a742c",
            fontSize: "14px",
          },
          i: {
            position: "absolute",
            right: "-20px",
            bottom: 0,
            background: "#EEE",
            borderRadius: "50%",
            fontSize: "12px",
            boxShadow: "0px 0 0px 4px #eee",
            ":hover": {
              background: "#ddd",
              boxShadow: "0px 0 0px 4px #ddd",
            },
          },
        },
      },
    },
  ];
});

/** 上傳-新增附件集(newAnnexObj) */
export interface IappUploadObj {
  /** 檔案key值 */
  sqUid?: string;
  /** Base64編碼縮圖內容 */
  content?: string;
  /** 原始檔案名稱 */
  srcFileName: string;
  /** 副檔名名稱 */
  fileType: string;
  /** 附件類型 */
  annexType: number;
  /** 下載專用 */
  dwUid?: number;
}

const docAry = ["pdf", "xls", "xlsx", "doc", "docx"];
const FileUpload = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  interface President {
    Name: string;
    Index: number;
  }

  /** 上傳按鈕Click */
  const handleLabelClick = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ): void => {
    e.stopPropagation();
  };
  // **選擇檔案 */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      const files = e.target.files;
      const reader = new FileReader();
      reader.readAsArrayBuffer(files[0]);
      reader.onloadend = async function (event) {
        const result = event.target?.result;
        console.log(event.target?.result);
        const wb = read(result);
        console.log(wb);
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        const data: President[] = utils.sheet_to_json<President>(ws); // generate objects
        console.log(data);
        const html = utils.sheet_to_html(ws); // generate HTML
        console.log(html);
      };
      // const excel = read(reader);
      // console.log(excel);
      // readFile(files[0])
    }
  };

  return (
    <Style>
      <Box sx={{ marginLeft: "10px" }}>
        <button
          className="file-btn"
          // variant="outlined"
          style={{
            margin: "10px 0",
            padding: "8px 10px",
            fontSize: "1.5rem",
          }}
        >
          <label htmlFor={"name"} onClick={handleLabelClick}>
            <i className="icon-plus" />
            新增附件
          </label>
          <input
            id={"name"}
            ref={inputRef}
            hidden
            multiple
            type="file"
            accept=".pdf,.jpg,.png,.tif,.bmp,.gif,.doc,.docx,.xls,.xlsx,.odt,.ods"
            onChange={handleChange}
          />
        </button>

        <button onClick={() => window.print()}>Print</button>
      </Box>
    </Style>
  );
};

export default FileUpload;

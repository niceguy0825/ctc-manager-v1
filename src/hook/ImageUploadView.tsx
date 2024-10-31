import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { RcFile, UploadChangeParam } from "antd/lib/upload";
import { UploadFile, UploadProps } from "antd/lib/upload/interface";
import { UploadRequestOption } from "rc-upload/lib/interface";
import React, { useState } from "react";
import s3 from "../util/imageUpload";

export interface OnChangeHandler {
    (e: any): void;
}

interface ImageUploadParams {
    imageUrl: string | undefined;
    setImageUrl: OnChangeHandler;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJPGorPNG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJPGorPNG) {
        message.error("JPG/PNG 파일만 가능합니다");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("용량은 최대 2mb까지 가능합니다");
    }

    return isJPGorPNG && isLt2M;
};

export const ImageUpload = ({ imageUrl, setImageUrl }: ImageUploadParams) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
            });
        }
    };

    const customRequest = async ({
         file,
         onSuccess,
         onError,
     }: UploadRequestOption) => {
        try {
            const { Location } = await s3.upload(file, "pictures");
            setImageUrl(Location);
            // @ts-ignore
            onSuccess(Location);
        } catch (e: any) {
            // @ts-ignore
            onError(e);
            console.log(e);
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={customRequest}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            style={{ overflow: "hidden" }}
        >
            {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

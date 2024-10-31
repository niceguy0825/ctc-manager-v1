import AWS from "aws-sdk/global";
import S3 from "aws-sdk/clients/s3";
import moment from "moment";

export const upload = async (file: any, type: string) => {
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET_NAME || "";
    const REGION = process.env.REACT_APP_S3_REGION;

    AWS.config.region = REGION;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.REACT_APP_S3_IDENTITY_POOL_ID || "",
    });

    const s3 = new S3({
        apiVersion: "2006-03-01",
        params: { S3_BUCKET },
    });
    const albumName = `${type}/${moment().format("YYMMDD")}`;
    const fileName = `${moment().format("hhmmss")}_${file.name}`;
    const dir = albumName + "/";
    const key = dir + fileName;

    return await s3
        .upload({
            Bucket: S3_BUCKET,
            Key: key,
            Body: file,
            ContentType: "image/jpeg",
            ACL: "public-read",
        })
        .promise();
};

export default { upload };

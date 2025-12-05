// Cloudflare R2 Storage utilities
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarecontent.com`,
  s3ForcePathStyle: true,
  region: 'auto',
});

export const r2Client = s3;

export async function uploadToR2(
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  const key = `${Date.now()}-${fileName}`;
  
  try {
    const params = {
      Bucket: process.env.R2_BUCKET_NAME || 'livingrite-care',
      Key: key,
      Body: file,
      ContentType: contentType,
    };

    await s3.upload(params).promise();
    return `${process.env.R2_PUBLIC_URL}/${key}`;
  } catch (error) {
    console.error('R2 upload error:', error);
    throw new Error('Failed to upload file to R2');
  }
}

export async function deleteFromR2(fileUrl: string): Promise<void> {
  try {
    const key = fileUrl.split('/').pop();
    if (!key) throw new Error('Invalid file URL');
    
    await s3
      .deleteObject({
        Bucket: process.env.R2_BUCKET_NAME || 'livingrite-care',
        Key: key,
      })
      .promise();
  } catch (error) {
    console.error('R2 delete error:', error);
    throw new Error('Failed to delete file from R2');
  }
}

export function getR2FileUrl(key: string): string {
  return `${process.env.R2_PUBLIC_URL}/${key}`;
}

export const PROJECT_ID = "cjxbffaco1vxd0193t5giyfzl";
export const BASE_URL = `https://api.graph.cool/simple/v1/${PROJECT_ID}`;
export const IMAGE_BASE_URL = `https://images.graph.cool/v1/${PROJECT_ID}`;

interface GetImageUrlOptions {
  secret: string;
  size?: string;
  filename?: string;
  crop?: string; // like 0x0
}

export const getImageUrl = ({
  secret,
  size,
  filename,
  crop
}: GetImageUrlOptions) => {
  const __size = size && (crop ? `/${crop}:${size}` : `/${size}`);
  const __filename = filename && `/${filename.replace(/-/g, "")}`;

  return `${IMAGE_BASE_URL}/${secret}${__size}${__filename}`;
};

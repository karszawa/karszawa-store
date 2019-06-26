export const PROJECT_ID = "cjxbffaco1vxd0193t5giyfzl";
export const BASE_URL = `https://api.graph.cool/simple/v1/${PROJECT_ID}`;

export const getImageUrl = (secret: string) => `${BASE_URL}/${secret}`;

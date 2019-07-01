import { getImageUrl } from "./graphcool";

test("full params url", () => {
  const url = getImageUrl({
    secret: "123",
    size: "100x100",
    filename: "hoge.png",
    crop: "0x0"
  });

  expect(() => new URL(url)).not.toThrowError();
});

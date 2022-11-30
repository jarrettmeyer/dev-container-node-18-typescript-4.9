import { message } from "./utils";

describe("utils", () => {
  describe("message", () => {
    test("has expected value", () => {
      expect(message).toEqual("Hello from Dev Containers!");
    })
  })
})

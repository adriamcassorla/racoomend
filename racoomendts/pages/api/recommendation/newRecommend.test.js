// @ts-nocheck
import newRecommend from "./newRecommend";
import { recommendationMock } from "./../../../utils/mocks";

describe("Back-end: Create new recommendation", () => {
  const json = jest.fn();
  const redirect = jest.fn();
  const status = jest.fn(() => {
    return {
      json,
      redirect,
    };
  });
  const mockRes = { status, json };

  test("Should add a new recommendation to the DB", async () => {
    const { title, oneline, url, authorId, groupId, categories } =
      recommendationMock;
    const mockReq = {
      method: "POST",
      body: { title, oneline, url, authorId, groupId, categories },
    };

    await newRecommend(mockReq, mockRes);
    expect(json.mock.calls[0][0].recommendation.title).toEqual(
      mockReq.body.title
    );
  });
});

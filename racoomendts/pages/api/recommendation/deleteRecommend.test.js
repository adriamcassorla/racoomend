// @ts-nocheck
import deleteRecommend from "./deleteRecommend";
import { recommendationMock } from "./../../../utils/mocks";
import newRecommend from "./newRecommend";

describe("Back-end: Delete recommendation", () => {
  const json = jest.fn();
  const redirect = jest.fn();
  const status = jest.fn(() => {
    return {
      json,
      redirect,
    };
  });
  const mockRes = { status, json };

  const id = beforeEach(async () => {
    const { title, oneline, url, authorId, groupId, categories } =
      recommendationMock;
    const mockReq = {
      method: "POST",
      body: { title, oneline, url, authorId, groupId, categories },
    };
    await newRecommend(mockReq, mockRes);
    return json.mock.calls[0][0].recommendation.id;
  });

  test("Should add a new recommendation to the DB", async () => {
    const mockReq = {
      method: "DELETE",
      body: { id: id },
    };

    await deleteRecommend(mockReq, mockRes);
    expect(json.mock.calls[0][0].recommendation.title).toEqual(
      recommendationMock.title
    );
  });
});

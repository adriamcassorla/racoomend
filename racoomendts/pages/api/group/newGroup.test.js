// @ts-nocheck
import newGroup from "./newGroup";
import { userMock } from "./../../../utils/mocks";
require("dotenv").config();

describe("Back-end: Create new group", () => {
  const json = jest.fn();
  const redirect = jest.fn();
  const status = jest.fn(() => {
    return {
      json,
      redirect,
    };
  });
  const mockRes = { status };

  test("Should add a new group to the DB", async () => {
    const mockReq = {
      method: "POST",
      body: {
        name: "A new testing group",
        userId: userMock.id,
        userEmail: userMock.userEmail,
      },
    };

    await newGroup(mockReq, mockRes);
    expect(json.mock.calls[0][0].name).toEqual(mockReq.body.name);
  });

  test("Should redirect to dashboard if wrong method is passed", async () => {
    const mockReq = {
      method: "GET",
      body: {
        name: "A new testing group",
        userId: userMock.id,
        userEmail: userMock.userEmail,
      },
    };

    await newGroup(mockReq, mockRes);
    expect(redirect.mock.calls[0][0]).toEqual(
      `/profile/dashboard/${mockReq.body.userEmail}`
    );
  });

  test("Should redirect to dashboard if db fails", async () => {
    const mockReq = {
      method: "POST",
      body: {
        name: "A new testing group",
        userEmail: userMock.userEmail,
      },
    };

    await newGroup(mockReq, mockRes);
    expect(redirect.mock.calls[0][0]).toEqual(
      `/profile/dashboard/${mockReq.body.userEmail}`
    );
  });
});

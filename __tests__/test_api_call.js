import { beforeEach } from "@jest/globals";
import getStaticProps from "../pages/index";


describe("make api call", () => {
    var req;
    var res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res),
            end: jest.fn(),
        };
    })

    it("return list of tickets", async () => {
        req.method = "GET";

        const response = await getStaticProps();

        expect(response.statusCode).toBe(200);
    });
});
import { hello } from "./01-hello-world";

describe('Hello World', () => {
    it('say hello world', () => {
        expect(hello()).toEqual('Hello, World!');
    });
});
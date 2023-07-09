import { render, screen } from "../testUtils/testUtils";
import App from "./App";

//An example of using react-testing-library
describe("App component", async () => {
    test("Should have text Royal Game of Ur on it", () => {
        render(<App />);
        const elem = screen.getByText("Royal Game of Ur");
        expect(elem).toBeInTheDocument();
    });
});

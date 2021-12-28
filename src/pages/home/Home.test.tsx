import { BrowserRouter } from "react-router-dom";
import { render, screen } from "../../utils/testUtils";
import Home from "./Home";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const headerElement = screen.getByText(/Kanri helps teams move work forward./);
  expect(headerElement).toBeInTheDocument();
});

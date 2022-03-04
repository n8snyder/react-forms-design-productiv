import TodoForm from './TodoForm';
import { render, fireEvent } from "@testing-library/react";
const mockHandleSave = jest.fn();

const initalState = { title: 'testTitle', description: 'testDescription', priority: 1 };

describe("Todo", function () {
  it("renders without crashing", function () {
    render(<TodoForm
      handleSave={mockHandleSave}
      initialFormData={initalState} />);
  });

  it("snapshot", function () {
    const { container } = render(<TodoForm
      handleSave={mockHandleSave}
      initialFormData={initalState} />);
    expect(container).toMatchSnapshot();
  });

  it("submitting the form", function () {
    const { container } = render(<TodoForm
      handleSave={mockHandleSave}
      initialFormData={initalState} />);
    expect(mockHandleSave).toHaveBeenCalledTimes(0);

    //clicking the button to submit form
    const editForm = container.querySelector(".TodoForm");
    fireEvent.submit(editForm);
    expect(mockHandleSave).toHaveBeenCalledTimes(1);
  });

  it("initial form data", function () {
    const { container, debug } = render(<TodoForm
      handleSave={mockHandleSave}
      initialFormData={initalState} />);

    // debug(container.querySelector("#TodoForm-priority"));

    expect(container.querySelector("#TodoForm-title")
      .getAttribute("value"))
      .toEqual("testTitle");

    expect(container.querySelector("#TodoForm-description"))
      .toContainHTML("testDescription");

    expect(container.querySelector("#TodoForm-priority").selectedIndex)
      .toEqual(0);
  });
});
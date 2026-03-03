import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import QuantitySelector from "./QuantitySelector"

describe("QuantitySelector", () => {

  const mockHandler = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  function setup(value = 1) {
    render(<QuantitySelector value={value} handler={mockHandler} />)
    const decreaseBtn = screen.getByRole("button", { name: "-" })
    const increaseBtn = screen.getByRole("button", { name: "+" })
    const input = screen.getByRole("spinbutton")
    return { decreaseBtn, increaseBtn, input }
  }

  it("calls handler with increased value", async () => {
    const user = userEvent.setup()
    const { increaseBtn } = setup(5)

    await user.click(increaseBtn)

    expect(mockHandler).toHaveBeenCalledWith(6)
  })

  it("calls handler with decreased value", async () => {
    const user = userEvent.setup()
    const { decreaseBtn } = setup(5)

    await user.click(decreaseBtn)

    expect(mockHandler).toHaveBeenCalledWith(4)
  })

  it("does not go below 1", async () => {
    const user = userEvent.setup()
    const { decreaseBtn } = setup(1)

    await user.click(decreaseBtn)

    expect(mockHandler).not.toHaveBeenCalled()
  })

  it("does not go above 99", async () => {
    const user = userEvent.setup()
    const { increaseBtn } = setup(99)

    await user.click(increaseBtn)

    expect(mockHandler).not.toHaveBeenCalled()
  })

  it("handles direct input change within range", async () => {
    const user = userEvent.setup()
    const { input } = setup(5)

    await user.clear(input)

    await user.type(input, "10")

    expect(mockHandler).toHaveBeenLastCalledWith(10)
  })

  it("forces value to 1 if input is below range", async () => {
    const user = userEvent.setup()
    const { input } = setup(5)

    await user.clear(input)
    await user.type(input, "0")

    expect(mockHandler).toHaveBeenLastCalledWith(1)
  })

  it("forces value to 99 if input is above range", async () => {
    const user = userEvent.setup()
    const { input } = setup(5)

    await user.clear(input)
    await user.type(input, "150")

    expect(mockHandler).toHaveBeenLastCalledWith(99)
  })

  it("allows empty input", async () => {
    const user = userEvent.setup()
    const { input } = setup(5)

    await user.clear(input)

    expect(mockHandler).toHaveBeenCalledWith("")
  })

})
import { describe, expect, it } from "vitest"
import { clamp } from "../src/util"

describe("clamp", () => {
    it("keeps values inside [0, 1]", () => {
        expect(clamp(0.5)).toBe(0.5)
    })
    it("clamps values outside [0, 1]", () => {
        expect(clamp(-1)).toBe(0)
        expect(clamp(2)).toBe(1)
    })
})

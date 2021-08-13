const rewire = require("rewire")
const checkcomponents = rewire("./checkcomponents")
const getJsonPathInfo = checkcomponents.__get__("getJsonPathInfo")
// @ponicode
describe("getJsonPathInfo", () => {
    test("0", () => {
        let callFunction = () => {
            getJsonPathInfo("C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getJsonPathInfo("/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getJsonPathInfo("path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getJsonPathInfo(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getJsonPathInfo("./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getJsonPathInfo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkcomponents", () => {
    test("0", async () => {
        await checkcomponents(".")
    })

    test("1", async () => {
        await checkcomponents("C:\\\\path\\to\\folder\\")
    })

    test("2", async () => {
        await checkcomponents("./path/to/file")
    })

    test("3", async () => {
        await checkcomponents("path/to/file.ext")
    })

    test("4", async () => {
        await checkcomponents("/path/to/file")
    })

    test("5", async () => {
        await checkcomponents(undefined)
    })
})

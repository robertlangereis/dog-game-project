export const TestNull = (element) => {
  try {
    element.slice()
    return element
  } catch {
    return TestNull
  }
}
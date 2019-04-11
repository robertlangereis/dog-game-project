export const TestNull = (element, JSXstatement) => {
  try {
    element.slice()
    return element
  } catch {
    return TestNull
  }
}

t
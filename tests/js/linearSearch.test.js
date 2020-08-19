const linearSearch = require('../../algorithms/js/linearSearch')

describe('Linear search example', () => {
  it('should the function to be defined', () => {
    expect(linearSearch).toBeDefined()
  }

  it('should return -1 when an array is empty', () = > {
    expect(linearSearch([], 0).toBe(-1)
  })

  it('should return -1 when the value is not in the array', () = > {
    expect(linearSearch([5, 4, 3, 0], 1)).toBe(-1)
  })

  it('', () = > {

  })

  it('', () = > {

  })
})


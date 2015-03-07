function getNextGeneration(matrix) {
  return [[0, 0], [0, 0]];
}
var matrix, current_matrix, result_matrix;

describe('getNextGeneration', function() {

  it('when the given matrix is empty; returns the new matrix', function() {
    matrix = [];
    assert.deepEqual(getNextGeneration(matrix), matrix);
  });

  it ('given a 2x2matrix; returns the new matrix', function() {
    current_matrix = [[0, 0], [0, 0]];
    result_matrix = [[0, 0], [0, 0]];

    assert.deepEqual(getNextGeneration(current_matrix), result_matrix);
  });

  it('returns the new matrix', function() {
    current_matrix = [[1, 0, 1], [0, 1, 0 ], [0, 0, 0 ]];
    result_matrix = [[0, 1, 0], [0, 1, 0 ], [0, 0, 0 ]];
    assert.deepEqual(getNextGeneration(current_matrix), result_matrix);
  });
});
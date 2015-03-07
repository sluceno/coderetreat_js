var helper = (function(){
  var status = function(value) {
    return value || 0;
  };

  return {
    getNumberOfNeighbours: function(matrix, x, y) {
      var sum = 0;

      for(var i = (x-1); i <= (x+1); i++){
        for(var j = (y-1); j <= (y+1); j++){
          sum = sum + status((matrix[i]||[])[j]);
        }
      }

      return sum - status((matrix[x] || [])[y]);
    }
  };
})();

var matrix;

describe('getNumberOfNeighbours', function() {

  before(function() {
    matrix = [[1, 0, 1], [0, 1, 0 ], [0, 0, 0]];
  });

  it('returns the number of neighbours', function() {
    assert.equal(helper.getNumberOfNeighbours(matrix, 1, 1), 2);
  });

  it('returns the number of neighbours when giving a position without neighbours', function() {
    assert.equal(helper.getNumberOfNeighbours(matrix, 0, 0), 1);
  });

  it('returns 0 when the matrix is empty', function() {
    assert.equal(helper.getNumberOfNeighbours([], 0, 0), 0);
  });

  it('returns 0 if the given position is outside the matrix', function() {
    assert.equal(helper.getNumberOfNeighbours(matrix, 5, 5), 0);
  });
});

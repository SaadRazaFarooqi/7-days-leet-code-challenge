function diagonalSort(mat) {
    const m = mat.length
    const n = mat[0].length
    const sortDiagonal = (i, j) => {
        const diagonal = []
        while (i < m && j < n) {
            diagonal.push(mat[i][j])
            i++
            j++
        }
        diagonal.sort((a, b) => a - b)
        while (i > 0 && j > 0) {
            i--
            j--
            mat[i][j] = diagonal.pop()
        }
    }
    
    for (let i = 0; i < m; i++) {
        sortDiagonal(i, 0)
    }
    
    for (let j = 1; j < n; j++) {
        sortDiagonal(0, j)
    }
    
    return mat
}
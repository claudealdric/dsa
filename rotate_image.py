def rotate_image(matrix):
    # The length of each side of the matrix
    length = len(matrix)

    def rotate_clockwise(row, col):
        """
        Return the new coordinates of a clockwise transformation for a
        square matrix
        """
        new_row = col
        new_col = length - 1 - row
        return new_row, new_col

    for row in range(length // 2):
        for col in range(row, length - row - 1):
            # Get the coordinates needed for the swap
            r_top, c_top = row, col
            r_right, c_right = rotate_clockwise(r_top, c_top)
            r_bottom, c_bottom = rotate_clockwise(r_right, c_right)
            r_left, c_left = rotate_clockwise(r_bottom, c_bottom)

            # Swap the values
            [
                matrix[r_top][c_top],
                matrix[r_right][c_right],
                matrix[r_bottom][c_bottom],
                matrix[r_left][c_left],
            ] = [
                matrix[r_left][c_left],
                matrix[r_top][c_top],
                matrix[r_right][c_right],
                matrix[r_bottom][c_bottom],
            ]

    return matrix


a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
expected_output = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
print(rotate_image(a) == expected_output)

a = [[1]]
expected_output = [[1]]
print(rotate_image(a) == expected_output)

a = [
    [10, 9, 6, 3, 7],
    [6, 10, 2, 9, 7],
    [7, 6, 3, 8, 2],
    [8, 9, 7, 9, 9],
    [6, 8, 6, 8, 2],
]
expected_output = [
    [6, 8, 7, 6, 10],
    [8, 9, 6, 10, 9],
    [6, 7, 3, 2, 6],
    [8, 9, 8, 9, 3],
    [2, 9, 2, 7, 7],
]
print(rotate_image(a) == expected_output)

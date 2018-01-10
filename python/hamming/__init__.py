# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(dna_string_1, dna_string_2):
    #support Python 2.7 or Python 3.x
    try:
        xrange
    except NameError:
        xrange = range
    if len(dna_string_1) != len(dna_string_2):
        raise ValueError('DNA strands must be of equal length.')
    #return list of indexes that do not match, then use length to get total.
    return len([index for index in xrange(len(dna_string_1)) if dna_string_1[index] != dna_string_2[index]])

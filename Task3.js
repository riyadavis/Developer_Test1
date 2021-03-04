function next_binary_number(bin)
{
    const digit = parseInt(bin, 2);
    const nextDigit = digit + 1;
    const nextBinary = nextDigit.toString(2);
    console.log(nextBinary);
}
next_binary_number(10011);
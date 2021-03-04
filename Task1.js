function repeat(arr)
{
    const repeatedArray = Array(3).fill(arr);
    console.log([].concat(...repeatedArray));
}

repeat([1,2,3,4]);
function reformat(str)
{
    const noVowels = str.replace(/[aeiou]/gi, '');
    const reformatted = noVowels.charAt(0).toUpperCase() + noVowels.toLowerCase().substring(1,noVowels.length);
    console.log(reformatted);
}

reformat("liMeSHArp DeveLoper TEST");
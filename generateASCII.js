export default function generate(chars, length, progress) {

    var barString = Math.floor(progress*10)    ; //begin bar

    //Place characters
    for(var i=0; i<Math.floor(length * progress); i++)
    {
        barString += chars[0];
    }
    for(var i=0; i<(length - Math.floor(length * progress)); i++)
    {
        barString += chars[1];
    }

    barString += "10"; //Finish bar
    
    return barString;
}
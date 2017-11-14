var utils = {
    loremIpsumGenerator: 
        function (){

            // Default text. TODO: switch to an array

            let text = "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet.";

            return text;
        },
    currentDate: 
        function (){
            let date = new Date().toLocaleDateString('en-US');
            return date;
        }
}
module.exports = utils;
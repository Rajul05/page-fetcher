const filetoDownload = process.argv[2];
const fileName = process.argv[3];
const request = require('request');

request(filetoDownload, (error,response,body) => {
  // console.log('error:', error); // Print the error if one occurred
  if(error) {
    console.log('Invalid Filepath...');
    return false;
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if(response.statusCode !== 200){
    console.log('Error fetching the file. Please check your request.');
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fetcher(body,fileDownload);
});


const fs = require('fs');
const fetcher = function (data, functionToRunWhenThingsAreDone) {
  fs.writeFile(fileName, data, (error) => {
  // CHANGE: Pass data into callback instead of returning it directly
  // console.log(data);
  const stats = fs.statSync(fileName);
  const fileSizeInBytes = stats.size;
  if(fileSizeInBytes === 0) {
    console.log("Empty File!! Please check your Filepath.");
    return false
  }
  //console.log(fileSizeInBytes);
   if (!error) functionToRunWhenThingsAreDone(fileSizeInBytes); 
   });

 };
const fileDownload = fileSizeInBytes => {
   console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileName}`);
 };

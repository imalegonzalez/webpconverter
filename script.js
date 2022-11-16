const webp=require('webp-converter');
webp.grant_permission();
// this will grant 755 permission to webp executables
const fs = require('fs');


//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)
//cwebp(input,output,option)


// Directory where
const dirnameExportImg = '../'

fs.readdir(dirnameExportImg, function (err, files) {
  if (err) {
    console.log(err)
  }
  files.map(
    (file) => { 
        const result = webp.cwebp("../"+file, file+".webp","-q 80",logging="-v");
        result.then((response) => {
        console.log(response);
            });
     }
  )
})

//imalegonzalez

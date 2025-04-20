const fs = require('fs');

fs.readdir('./unorganized', (err, files) => {
    // console.log(err);
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log(files);
    let unOrgFiles = files;

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        fileNameSplitted = file.split('.');
        let fileType = fileNameSplitted[fileNameSplitted.length - 1];
        fs.mkdir(`./organized/${fileType}/`, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
                return;
            }
            console.log(`Directory created: ${fileType}`);
        });
        fs.copyFile(`./unorganized/${file}`, `./organized/${fileType}/${file}`, (err) => {
            if (err) {
                console.error('Error copying file:', err);
                return;
            }
            console.log(`File copied: ${file} to ${fileType}`);
        });

    }

});

//different from original solution but works if files are in a particular folder



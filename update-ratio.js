const fs = require('fs');
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const config = require('./config');

cloudscraper.get(config.profileUrl)
    .then((response) => {
        let $ = cheerio.load(response);
        let upload = parseFloat($('.icon.pull-left>strong[style*="color:#3dd806"]').html());
        let download = parseFloat($('.icon.pull-left>strong[style*="color:#ea5656"]').html());
        let record = {
            'date': Date.now(),
            'upload': upload,
            'download': download,
            'ratio': (upload / download).toFixed(4)
        };

        if (fs.existsSync(config.outputFile)) {
            fs.readFile(config.outputFile, function (err, data) {
                if (err) {
                    console.log('An error occured while trying to update JSON file.');
                    return console.log(err);
                }

                let json = JSON.parse(data);

                json.push(record);

                fs.writeFileSync(config.outputFile, JSON.stringify(json));
            })
        } else {
            fs.writeFile(config.outputFile, JSON.stringify([record]), 'utf8', function (err) {
                if (err) {
                    console.log('An error occured while trying to create JSON file.');
                    return console.log(err);
                }
             
                console.log('JSON file has been created.');
            });
        }
    })
    .catch(err => {
        console.log('Error fetching profile.')
        console.error(err);
    });
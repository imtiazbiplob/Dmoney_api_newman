

const newman = require('newman'); // Ensure newman is installed
//const path = require('path');

// Run the collection
newman.run({
    collection: require('./domone_api_automation.postman_collection.json'),  // Your collection file
    environment: require('./dmoney_env.postman_environment.json'),   // Your environment file
    reporters: ['cli', 'htmlextra'],                                // Reporters
    reporter: {
        htmlextra: {
            //export: path.join(__dirname, 'report', 'dmoney_report.html'), 
            export: './Reports/dmoney_report.html',
            title: 'DMoney API Test Report',
            browserTitle: 'DMoney Report', 
            darkTheme: true,
        }
    }
}, function (err, summary) {
    if (err) {
        console.error('Collection run failed:', err);
    } else {
        console.log('Collection run completed!');
        console.log('HTML report generated at: ./report/dmoney_report.html');
    }
});
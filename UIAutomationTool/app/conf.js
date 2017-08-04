var config;
config = {

    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 'cucumberTest.feature',
   
    capabilities: {
        browserName: 'chrome'
            },

    framework: 'custom', // need to add for protractor 3.x and above
    frameworkPath: '.././node_modules/protractor-cucumber-framework',  // need to add for protractor 
    output:'./output.json',                                                                          //3.x and above

    cucumberOpts: {
        // define your step definitions in this file
        require: ['Cucumberstep.js'],
        format: 'pretty',
        tags:false   
       }
};

exports.config = config;
const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/reports/cucumber-json",
    reportPath: "./cypress/reports/multi-html",
    ignoreBadJsonFile: true,
    displayReportTime: true,
    displayDuration: true,
    metadata: {
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
});

// Reviewed by Tony - OK
function languageSetting(monitorModel, monitor) {
    console.log("I am in the module upgradev2.js function languageSettings()")

    if (monitorModel >= 2022) {
        monitor.push([["Languages", ["Español", "French", "English"]]]);
    }
    return monitor;
}
// Reviewd by Miguel
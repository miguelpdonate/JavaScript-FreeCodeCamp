// Reviewed by Tony - OK
function languageSetting(monitorModel, monitor) {
    if (monitorModel >= 2022) {
        monitor.push([["Languages", ["Español", "French", "English"]]]);
    }
    return monitor;
}
// Reviewd by Miguel
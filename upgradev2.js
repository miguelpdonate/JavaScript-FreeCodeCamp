function languageSetting(monitorModel, monitor) {
    if (monitorModel >= 2022) {
        monitor.push([["Languages", ["Español", "French", "English"]]]);
    }
    return monitor;
}

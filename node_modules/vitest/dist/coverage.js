import { readFileSync, writeFileSync } from 'node:fs';

const THRESHOLD_KEYS = ["lines", "functions", "statements", "branches"];
class BaseCoverageProvider {
  updateThresholds({ configurationFile, coverageMap, thresholds }) {
    if (!configurationFile)
      throw new Error('Missing configurationFile. The "coverage.thresholdAutoUpdate" can only be enabled when configuration file is used.');
    const summary = coverageMap.getCoverageSummary();
    const thresholdsToUpdate = [];
    for (const key of THRESHOLD_KEYS) {
      const threshold = thresholds[key] || 100;
      const actual = summary[key].pct;
      if (actual > threshold)
        thresholdsToUpdate.push(key);
    }
    if (thresholdsToUpdate.length === 0)
      return;
    const originalConfig = readFileSync(configurationFile, "utf8");
    let updatedConfig = originalConfig;
    for (const threshold of thresholdsToUpdate) {
      const previousThreshold = (thresholds[threshold] || 100).toString();
      const pattern = new RegExp(`(${threshold}\\s*:\\s*)${previousThreshold.replace(".", "\\.")}`);
      const matches = originalConfig.match(pattern);
      if (matches)
        updatedConfig = updatedConfig.replace(matches[0], matches[1] + summary[threshold].pct);
      else
        console.error(`Unable to update coverage threshold ${threshold}. No threshold found using pattern ${pattern}`);
    }
    if (updatedConfig !== originalConfig) {
      console.log("Updating thresholds to configuration file. You may want to push with updated coverage thresholds.");
      writeFileSync(configurationFile, updatedConfig, "utf-8");
    }
  }
  resolveReporters(configReporters) {
    if (!Array.isArray(configReporters))
      return [[configReporters, {}]];
    const resolvedReporters = [];
    for (const reporter of configReporters) {
      if (Array.isArray(reporter)) {
        resolvedReporters.push([reporter[0], reporter[1] || {}]);
      } else {
        resolvedReporters.push([reporter, {}]);
      }
    }
    return resolvedReporters;
  }
}

export { BaseCoverageProvider };

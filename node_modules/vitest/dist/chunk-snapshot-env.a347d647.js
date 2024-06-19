let _snapshotEnvironment;
function setupSnapshotEnvironment(environment) {
  _snapshotEnvironment = environment;
}
function getSnapshotEnvironment() {
  if (!_snapshotEnvironment)
    throw new Error("Snapshot environment is not setup");
  return _snapshotEnvironment;
}

export { getSnapshotEnvironment as g, setupSnapshotEnvironment as s };

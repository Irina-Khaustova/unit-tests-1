export default function createIndication(options) {
  if (options.health >= 50) {
    return 'healthy';
  }
  if (options.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

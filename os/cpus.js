import { cpus as cpusInfo } from 'os';

export function cpus() {
  const cpuData = cpusInfo().map((cpu) => ({
    Model: cpu.model.trim(),
  }));

  console.log(`Overall amount of CPUs: ${cpuData.length}`);
  console.table(cpuData);
}

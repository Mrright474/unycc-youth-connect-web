
export const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  // ... and so on for all countries
  { code: "ZW", name: "Zimbabwe" }
].sort((a, b) => a.name.localeCompare(b.name));

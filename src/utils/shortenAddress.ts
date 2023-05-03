export const shortenAddress = (addr: `0x${string}` | undefined) => {
  if (!addr) return;
  return `${addr.slice(0, 5)}...${addr.slice(-4)}`;
};

const menuClass = (menuOpen, blockClass) => {
  const modifierClass = menuOpen ? 'open' : '';
  return `${blockClass} ${modifierClass}`.trim();
};
export default menuClass;

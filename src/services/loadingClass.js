const loadingClass = (loading, blockClass) => {
  const modifierClass = loading ? `${blockClass}--loading` : '';
  return `${blockClass} ${modifierClass}`.trim();
};

export default loadingClass;

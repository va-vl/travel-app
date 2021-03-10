const flexColumn = (marginBottom) => {
  const res = {
    display: 'flex',
    flexDirection: 'column',
  };

  if (marginBottom) {
    res.marginBottom = marginBottom;
  }

  return res;
};

export default flexColumn;

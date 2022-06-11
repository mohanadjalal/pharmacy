exports.logErr = (res, err) => {
  console.log(err);
  res.status(500).send({ error: err.message });
  return;
};

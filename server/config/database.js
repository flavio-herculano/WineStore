module.exports = {
  hrPool: {
    user: "WINESTORE",//process.env.HR_USER,
    password:"winestore", //process.env.HR_PASSWORD,
    connectString: "localhost/xepdb1",//process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};

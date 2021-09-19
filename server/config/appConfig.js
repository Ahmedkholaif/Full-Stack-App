
const definedEnvs = Object.keys(process.env);
const getEnv = (envName, required = true) => {
  if (required && !definedEnvs.includes(envName)) throw new Error(`${envName} missing`);
  return process.env[envName];
};
const appConfig = {
  mongoUrl:
    getEnv('MONGO_URL', false) || 'mongodb://localhost:27017/AAIB'
  ,
  nodeEnv: getEnv('NODE_ENV', false) || 'development',
  port: getEnv('PORT', false) || 3020,
};

module.exports = appConfig;

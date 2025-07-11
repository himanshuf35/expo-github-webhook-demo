
module.exports = ({ config }) => {
  return {
    ...config,
   updates: {
      "url": "https://xj33dkjqal.execute-api.eu-north-1.amazonaws.com/prototype/manifest",
      "enabled": true,
      "checkAutomatically": "NEVER",
      "fallbackToCacheTimeout": 30000,
      "codeSigningCertificate": "./test-certificate.pem",
      "codeSigningMetadata": {
        "keyid": "main",
        "alg": "rsa-v1_5-sha256"
      },
      requestHeaders: {
        "x-api-key": process.env.OTA_UPDATE_API_KEY
      }
    },
  };
};

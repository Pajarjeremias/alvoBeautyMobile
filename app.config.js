import 'dotenv/config';

export default {
  "expo": {
    android: {
      package: "com.jerkku.ab"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: "3450a0a9-cb61-4b68-bc01-1213c0fc1c58"
      }
    }
  }
}
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
   // 开启 console
    'no-console': 'off',
    'no-useless-catch': 'off',
    'no-async-promise-executor': 'off',
    'no-unused-vars': 'off',
    // 'comma-dangle': ["error", "never"],
    // prettier配置
    'prettier/prettier': [
        'error',
        {
            singleQuote: true, //单引号
            tabWidth: 4, // tab是4个空格
            semi: false // 不要分号结尾
        }
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
};

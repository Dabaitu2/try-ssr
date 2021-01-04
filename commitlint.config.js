/* eslint import/no-nodejs-modules:off */
/* eslint import/no-commonjs:off */
/* eslint import/unambiguous:off */
const fs = require('fs');
const path = require('path');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型必须是如下之一
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],

    // subject 的长度控制在 100 字符以内
    'header-max-length': [2, 'always', 100],
    // 必须要有空行
    'body-leading-blank': [2, 'always'],

    // 所有提交的 scope 限定到了 packages 下面的目录
    'scope-enum': () => {
      const packages = fs.readdirSync(path.join(__dirname, 'packages'));
      return [2, 'always', ['all', ...packages]];
    },
  },
};

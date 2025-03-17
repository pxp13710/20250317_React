const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: '.',
        source: 'jsconfig',
        jsConfigPath: './jsconfig.paths.json',
      },
    },
  ],
};

// - source: default 값은 options로, jsconfig, tsconfig 선택 가능
// - baseUrl: default 값은 ./로 root 폴더를 가리킴
// - aliases: alias 이름과 경로, default 값은 { }
// - tsConfigPath: 만약 source가 tsconfig이라면 해당 파일 이름 작성
// - debug: default 값은 false이며, 만약 버그가 생긴다면 해당 값을 true로 바꾸어 console로 내용 확인 가능
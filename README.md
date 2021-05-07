<img src="cover.png" width="200" align="right" />

# JavaScript Everywhere API

This repository contains code examples for the API chapters of [_JavaScript Everywhere_](https://www.jseverywhere.io/) by Adam D. Scott, published by O'Reilly Media

## Getting Help

The best place to get help is our Spectrum channel, [spectrum.chat/jseverywhere](https://spectrum.chat/jseverywhere).

## Directory Structure

- `/src` If you are following along with the book, this is the directory where you should perform your development.
- `/solutions` This directory contains the solutions for each chapter. If you get stuck, these are available for you to consult.
- `/final` This directory contains the final working project

## To Use the Final Project Files

If you're developing a UI and would like to use the completed project, copy the files to the completed files to the `src` as follows:

```
cp -rf ./final/* ./src/
```

## Seed Data

To seed data for local development: `npm run seed`. The password for all of the seeded users is `password`.

Each time this command is run, it will generate 10 users and 25 notes.

## Related Repositories

- [Web 💻 ](https://github.com/javascripteverywhere/web)
- [Mobile 🤳](https://github.com/javascripteverywhere/mobile)
- [Desktop 🖥️](https://github.com/javascripteverywhere/desktop)

## Code of Conduct

In the interest of fostering an open and welcoming environment, I pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation..

This project pledges to follow the [Contributor's Covenant](http://contributor-covenant.org/version/1/4/).

## License

Copyright 2019 Adam D. Scott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

# JP 공부 기록용 fork repository 입니다.

이렇게 기록이라도 해야..뭐라도 남을까 싶어서 fork 했습니다
final은 최종 소스이고
solutions 는 문제 해결에 있어 참고할 소스들이 포함되어 있다고 원작자가 말했습니다.

저의 소스 커밋들은 src 에 계속 추가 될 예정입니다.

#

- 2021-05-05 : 개발 도구 세팅 및 clone project. express 프레임워크를 이용하여 간단한 hello world를 출력하는 과정까지 해보았다. nodemon을 설치하여 코드 변경사항이 있을 경우 서버를 자동으로 재시작 해주는것도 배웠다.

- 2021-05-06 : apollo-server-express 모듈을 사용하여 graphQL API를 만들어 보았다.
  note에 인자를 전달하여 부모의 note에서 원하는 값만 가져오도록 만들어 보았고
  mutation을 만들어서 note에다가 새로운 값을 push하였고 이를 gralhQL Playground 에서 확인 한 결과 정상적으로 반영 된 것을 알 수 있었다.

```jsx
    query{
        notes{
            id
            content
            author
        }
    }
```

```jsx
    query{
        note(id:"1"){
            id
            content
            author
        }
    }
```

```jsx
   mutation {
        newNote (content: "this is a mutant note!"){
        content
        id
        author
  }
}
```
- 2021-05-07 :5장에서는 API와 함께 몽고와 몽구스 라이브러리를 사용하는 방법을 배웠다. 또한 node에서 모듈을 export하고 require로 모듈을 다시 받아서 쓰는 방법들 또한 알게 되었다.
모듈을 생성하고 임포트하고 리콰이어로 불러오는 과정이 낯설게 느껴졌다. 또한 몽고DB를 처음 사용하다보니 설치 과정에서부터 cmd로 실행하기까지도 꽤나 어려움을 겪엇다.


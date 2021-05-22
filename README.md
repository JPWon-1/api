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
}분리
```
- 2021-05-07 :5장에서는 API와 함께 몽고와 몽구스 라이브러리를 사용하는 방법을 배웠다. 또한 node에서 모듈을 export하고 require로 모듈을 다시 받아서 쓰는 방법들 또한 알게 되었다.
모듈을 생성하고 임포트하고 리콰이어로 불러오는 과정이 낯설게 느껴졌다. 또한 몽고DB를 처음 사용하다보니 설치 과정에서부터 cmd로 실행하기까지도 꽤나 어려움을 겪엇다.

- 2021-05-10 : src/index.js 파일에 익스프레스/아폴로서버 코드와 API스키마, 리졸버가 모두 있었는데 코드베이스가 커지면 다루기 힘들 것. 따라서 그 전에 스키마, 리졸버, 서버 를 세개로 구분 하기로 함. 

- 2021-05-15 : graphQL의 리졸버를 중첩시키는 기능을 작성 해 보았다.
```jsx
query{
    note(id:"ID"){
        id
        content
        author{
            username
            email
            id
        }
    }
} 
```
위와 같은 방식으로 쿼리를 짜보았다. 
이 과정들을 통해 프로젝트에 코드를 추가하는 패턴을 익혔다
1) 먼저 그래프QL 스키마를 작성한다
2) 데이터베이스 모델을 작성한다
3) 쿼리를 작성하거나 리졸버 코드를 작성한다.

- 2021-05-22 : mongoDB 를 만들고 heroku를 설정 하였다.
데이터베이스 호스팅 = 몽고 디비
코드 배포 = heroku
1) 클러스터 생성
2) IP주소 허용 => 0.0.0.0/0 으로 하여 모든 IP 주소로 접근 가능하게 하였음
3) 아이디/비밀번호 설정
이 설정이 끝나면 애플리케이션을 위해 호스팅된 데이터 저장소를 가지게 된 것이다.

이 책의 학습 목적에 맞게 클라우드 애플리케이션 플랫폼인 히로쿠를 사용하였다.
히로쿠 계정 생성을 하고 히로쿠 커맨드 라인도구도 인스톨 하였다. (https://oreil.ly/Vf2Q_)

1) 프로젝트 설정
히로쿠 웹사이트 내에서 new -> create new app 을 한다
app 이름과 region을 설정한다 . 나는 jseveverywherejp / United States 로 하였다.
그 다음 settings 에 들어가 Reveal Config Vars ( 설정 변수 표시) 에 들어가 .env 에서 한거와 마찬가지로 아래 설정 변수를 추가한다
NODE_ENV : production
JWT_SECRET : PASSPHARSE
DB_HOST : 아까 만든 디비 호스트 주소
2) 배포
터미널에서
```js
heroku git:remote -a jseverywherejp
git add .
git commit -am "ready!"
git push heroku master
```
를 입력해준다
3) 테스트
그래프QL API 요청을 날려 테스트를 해볼것이다.
터미널 애플리케이션에서 curl을 사용하면 테스트 할 수 있다.
다음과 같이 입력해보자
```js
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ notes { id } }" }' https://jseverywherejp.herokuapp.com/api

```
아직 이 프로덕션에 데이터가 포함되지 않았으므로 테스트에 성공하면 빈 노트 배열이 포함된 응답을 받는다.
```
{"data":{"notes":[]}}
```


# book-room-nestjs service

## 빠른 시작

### 컨테이너 생성

```
docker-compose up -d
```

위의 명령어를 입력해 docker image 생성 후 컨테이너를 생성합니다.

### 컨테이너 삭제

```
docker-compose down
```

위의 명령어를 입력해 컨테이너를 삭제합니다.

### API 요청

#### ping

http://localhost:8008/ping

## 개요

방을 예약하는 서비스를 제공합니다.

## 특이사항

1. TypeORM을 사용해서 DB 조회 및 수정을 지원합니다.
1. RESTFUL 형식의 API를 제공합니다.

## Stack

1. node:v16.13.1
1. yarn
1. nest.js
1. typeorm
1. mysql:5.7.16
1. vscode

## 시작하기

### 개발 환경

#### nodeenv 설치

##### nodeenv란

개발 PC에서 여러 node 실행 환경을 구분지어 구동할 수 있는 프로그램입니다.
개발환경 구축을 하는데 사용할 것이며, 프로젝트 디렉토리 하위에 node, npm 관련 바이너리 파일 등을 생성하는데 사용합니다.<br>
[공식 링크](https://github.com/nodenv/nodenv)

##### Windows(WSL Ubuntu) 설치법

`git clone https://github.com/nodenv/nodenv.git ~/.nodenv`<br>
공식 git repository를 clone합니다.

`echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc`<br>
Linux PATH에 방금 git clone한 repository속 명령어를 등록합니다.

작업을 수행했던 터미널 창을 닫고 새로운 터미널 창을 열어줍니다.

##### MacOS 설치법

`brew install nodeenv` 명령을 입력해서 설치합니다.

#### 환경 구성

1. .env.dev 파일에 특이사항이 있는 경우 수정합니다.
1. `nodeenv --node=16.13.1 env-16.13.1` 명령을 실행해서 프로젝트 디렉토리 내부에 `node`, `npm` 실행 환경을 생성합니다.
1. VSCode 디버그 창 내부에 있는 NestJS start 버튼을 눌러 시작합니다.
1. TypeORM을 통해서 book-room service에서 사용하는 MySQL Table이 정상적으로 생성 되었는지 확인합니다.

### QA/Production 환경

1. README.md 파일 내 환경변수 표를 참고해 자신의 서버 환경에 알맞은 OS 환경변수를 설정합니다.
1. `yarn install && yarn run start:prod` 명령을 이용해서 book-room service를 시작합니다.

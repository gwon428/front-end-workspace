# HTML

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램

- Chrome, Brave, Fire Fox, Safari, Opera, Edge..
- 사용자가 사용하는 브라우저는 정해져 있지 않으며
  브라우저마다 화면이 다르게 출력이 될 수 있으니
  브라우저마다 테스트를 하면서 수정합니다
  => 크로스 브라우징

## 웹 페이지 개발 방법

- 구조(Structure) : HTML
- 표현(Presentation) : CSS
- 동작(Behavior) : JavaScript

## HTML(Hyper Text Markup Language)

- 웹 문서 / HTML 문서 / HTML 페이지

## 웹 페이지 생성

- 확장자는 .html (또는 .htm)
- 처음 보여지는 화면의 파일 이름은 "index.html" [메인 페이지에 해당]

## main page, sub page

- main page : index.html
- sub page : index.html 제외 파일명.html 파일들

## 태그

```
<태그 속성="값"></태그>
```

1. "<"와 ">" 사이에 명령어 (tag, element) 작성
2. 시작 태그<>와 종료 태그</>로 구성
3. 종료 태그가 없는 태그도 있음. (br, img, hr, meta, input)
4. 태그는 중첩 가능하며 종료 태그는 나중에 작성한 태그 먼저 작성한다. (태그 시작과 종료 속에 태그 시작과 종료 쌍으로 존재)
        <태그1>
            <태그2>
                <태그3></태그3>
            </태그2>
        </태그1>
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분

``` html
<a href="#"></a>
```

2. 여러 개의 속성을 사용할 수 있다.

``` html
<img src="/" width="100">
```


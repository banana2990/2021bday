const qnaList = [
  {
    q: '1. 김씨가 학생 때 듣지 않은 수업은?',
    a: [
      { answer: '경영학원론', value: '1' },
      { answer: '회계원리', value: '0' },
      { answer: '희곡문학', value: '0'},
    ]
  },
  {
    q: '2. 김씨가 제일 좋아하는 디저트는?',
    a: [
      { answer: '케이크', value: '0' },
      { answer: '아이스크림', value: '1'},
      { answer: '초콜렛', value: '0' },
    ]
  },
  {
    q: '3. 김씨가 좋다고 번역/식자까지 했던 작품의 작가는? ',
    a: [
      { answer: '나카무라 요시키', value: '1' },
      { answer: '소다 마사히토', value: '0'},
      { answer: '타케우치 나오코', value: '0' }
    ]
  },
  {
    q: '4. 김씨의 대외적 주량은?',
    a: [
      { answer: '소주 한 병', value: '0' },
      { answer: '맥주 500ml 한 캔', value: '0' },
      { answer: '소주 반 병', value: '1'},
    ]
  },
  {
    q: '5. 코시국 전까지 김씨는 어떤 운동을 주기적으로 했을까요?',
    a: [
      { answer: '크로스핏', value: '0' },
      { answer: '피트에어로빅', value: '1'},
      { answer: '러닝', value: '0' },
    ]
  },

  {
    q: '6. 방금 그 운동을 얼마나 했을까요?',
    a: [
      { answer: '3년', value: '0'  },
      { answer: '5년', value: '0' },
      { answer: '8년', value: '1' },
    ]
  },
  {
    q: '7. 김씨가 본 적 없는 시험은?',
    a: [
      { answer: 'JLPT', value: '1' },
      { answer: 'HSK', value: '0' },
      { answer: '국제무역사', value: '0' },
    ]
  },
  {
    q: '8. 김씨가 연재하는 글이 아닌 것은?',
    a: [
      { answer: '틴더 사용 보고서', value: '0' },
      { answer: '문과생 개발기', value: '1'},
      { answer: '김씨잡변', value: '0' },
    ]
  },
  {
    q: '9. 김씨는 예전에 아이패드 1세대를 <br> 가지고 있었습니다.',
    a: [
      { answer: '경품으로 받았다', value: '1' },
      { answer: '대입 기념으로 받았다', value: '0' },
      { answer: '용돈 모은 것으로 셀프 선물했다', value: '0' },
    ]
  },
  {
    q: '10. 다음 중 김씨가 제일 싫어하는 <br> 틀린 맞춤법은?',
    a: [
      { answer: '어떻해', value: '0' },
      { answer: '1도', value: '0' },
      { answer: '안되', value: '1' },
    ]
  },
  {
    q: '11. 낯선 사람과 둘이 있을 때 김씨는',
    a: [
      { answer: '특별히 뭘 하진 않는다', value: '1' },
      { answer: '뭐라도 얘기를 채워 넣으려 다급해진다', value: '0' },
      { answer: '자리를 피한다', value: '0' },
    ]
  },
  {
    q: '12. 김씨가 가장 안 하는 악세사리는',
    a: [
      { answer: '반지', value: '0' },
      { answer: '팔찌', value: '1' },
      { answer: '귀걸이', value: '0' },
    ]
  },
  {
    q: '13. 김씨가 태어난 날은?',
    a: [
      { answer: '1992.06.27', value: '1' },
      { answer: '1992.06.29', value: '0' },
      { answer: '1993.06.27', value: '0' }
    ]
  },
  {
    q: '14. 김씨의 사회 생활용 MBTI와 <br> 실제 MBTI는',
    a: [
      { answer: '같다', value: '0' },
      { answer: '반은 같고 반은 다르다', value: '0' },
      { answer: '완전히 다르다', value: '1'},
    ]
  },
  {
    q: '15. 김씨가 카톡 상태 메시지에 <br> 써 놓은 적 없는 말은?',
    a: [
      { answer: 'Love me, hug me, please me', value: '0' },
      { answer: '꿈꾸는 현실주의자', value: '1' },
      { answer: '오늘도 버슷한 우리', value: '0' },
    ]
  },

  {
    q: '16. 다음 중 김씨가 실제로 <br> 들어본 적 없는 말은?',
    a: [
      { answer: '항상 지켜보고 있어', value: '1' },
      { answer: '들어오는 데 빛이 났어', value: '0' },
      { answer: '예전부터 멋지다고 생각했어', value: '0' },
    ]
  },
  {
    q: '17. 김씨는 주기적으로 연락처를 <br> 정리하는 편이다',
    a: [
      { answer: '그렇다', value: '1' },
      { answer: '아니다', value: '0' },
      { answer: '내가 그걸 어떻게 아냐', value: '0' },
    ]
  },
  {
    q: '18. 김씨와 갈등이 생겼다. <br> 해결하기 위해선',
    a: [
      { answer: '잠수를 탔다가 나타난다', value: '0' },
      { answer: '상황과 본인의 감정을 솔직히 얘기한다', value: '1' },
      { answer: '그냥 아무렇지 않은 척 넘어간다', value: '0' },
    ]
  },
  {
    q: '19. 김씨 할아버지께서 주신 이름은 ',
    a: [
      { answer: '김길자', value: '1' },
      { answer: '김명자', value: '0' },
      { answer: '김숙자', value: '0' },
    ]
  },
  {
    q: '20. 김씨가 살면서 달성 못 해본 <br> 신년 목표는',
    a: [
      { answer: '새로운 언어 공부해서 자격증 따기', value: '0' },
      { answer: '1년에 책 100권 책 읽기', value: '0' },
      { answer: '해로운 사람 멀리하기', value: '1' },
    ]
  }
]

const infoList = [
  {
    name: '혹시 김예진 본인이세요?',
    desc: '생각보다 어려웠을텐데 20문제를 다 맞추다니 엄청난데요! 카톡으로 결과 공유해주시면 <strong>김씨와의 식사권(제가 쏩니다!)</strong> 또는 <strong>편의점 상품권 1만원 권</strong>을 보내드리겠습니다.'
  },
  {
    name: '모야모야 이렇게 잘 알다니 감격쓰~',
    desc: '이렇게 잘 알아주고 계시다니 너무 기뻐요. 카톡으로 결과 공유해주시면 <strong>김씨와의 식사권</strong> 또는 <strong>편의점 상품권 5천원 권</strong>을 보내드리겠습니다.'
  },
  {
    name: '크으 남몰래 신경써주고 있으셨군요?',
    desc: '난이도가 그리 쉽지 않은데 이만큼이나 맞추시다니 헤헤 덕분에 기분이 좋습니다. 카톡으로 결과 공유해주시면 <strong>스타벅스 아메리카노 기프티콘</strong>을 보내드리겠습니다.'
  },
  {
    name: '문제가 좀 어려웠나봐요. 그럴 수 있죠.',
    desc: '꽤 난이도가 어렵죠? 카톡으로 결과 공유해주시면 <strong>비타500 기프티콘</strong>을 보내드리겠습니다.'
  },
  {
    name: '우리... 갈 길이 멀었군요?',
    desc: '우리 지금 만나야겠네요! 카톡으로 결과 공유해주시면 <strong>김씨와의 커피권</strong>을 보내드리겠습니다.'
  },
  {
    name: '와 어쩜...',
    desc: '오늘 로또 사보시는 건 어때요? 하나도 못 맞추기 정말 쉽지 않은데... 카톡으로 결과 공유해주시면 <strong>김씨와의 식사권</strong>을 보내드리겠습니다. 우리 지금 만나야겠어요!'
  }
]
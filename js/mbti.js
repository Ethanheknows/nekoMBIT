const QuestionData = [
  {
    id: 1,
    title: "新しい猫を連れてきた！ 私の反応は？ ",
    answera: "何してるの？名前は何にしようかな？ しきりに話しかけたい。",
    answerb: "一人だけの時間が必要だよね？ 適応する時間を与える。",
    type: "EI",
  },
  {
    id: 2,
    title: "猫についてのすべてが気になった。 私の行動は？",
    answera:
      "猫関連コミュニティに入って他の人たちと疎通をしながら猫に対する知識を積む。",
    answerb:
      "コミュニティに加入はするが、目で参考にして一人で探してみるのが楽だ。",
    type: "EI",
  },
  {
    id: 3,
    title: "どう見てもうちの猫ちゃんが一番可愛い。あなたは？",
    answera: "可愛いっと思って写真を撮ってインスタグラムに写真を載せる。",
    answerb: "可愛いっと思って写真を撮って一人で見る。",
    type: "EI",
  },
  {
    id: 4,
    title:
      "猫ちゃんのYoutubeチャンネルを作ろうとしている。どんな感じのチャンネルを作る?",
    answera: "他の人のチャンネルを参考して作る。",
    answerb: "新しくて自由な感じで作る。",
    type: "SN",
  },
  {
    id: 5,
    title: "猫ちゃんの関する本を読んでいる.読んでるやり方は?",
    answera: "全部わすれずに読む。",
    answerb: "全体的な意味を把握しながら読む。",
    type: "SN",
  },
  {
    id: 6,
    title: "猫ちゃんに餌をあげる。どうする？",
    answera: "目分量であげる。",
    answerb: "正確に容量を計ってあげる。",
    type: "SN",
  },
  {
    id: 7,
    title: "友達の猫が痛そうで泣いてる。あなたの反応は？",
    answera: " ‘これはこうして’一緒に解決策をさがして考える。",
    answerb: "‘どうしよう’って言うながら共感してあげる。",
    type: "TF",
  },
  {
    id: 8,
    title: "家族と猫のことで問題が出来てる。あなたは？",
    answera: "自分の意見をちゃんと家族に説明してあげる。",
    answerb: "家族の気分が悪くならないように説明する。",
    type: "TF",
  },
  {
    id: 9,
    title: "猫ちゃんが病気で病院に行かないと！どんな病院を行く？",
    answera: "いい結果が多い病院。",
    answerb: "医者先生がいい人の病院。",
    type: "TF",
  },
  {
    id: 10,
    title: "猫ちゃんが暇そう。どうして遊んであげる?",
    answera: "計画時間を作って遊んであげる。 ",
    answerb: "どうでもいい。とりあえず遊んであげる。",
    type: "JP",
  },
  {
    id: 11,
    title: "猫ちゃんのチュールを何の種類手に入れた。どうしてあげる？",
    answera: "餌があるから全部食べさせた後、チュールをあげてみる。",
    answerb: "'いっぱい食べてもいいよ'すぐあげる。",
    type: "JP",
  },
  {
    id: 12,
    title: "寝る前にあなたは？?",
    answera: "猫ちゃんお水や餌とかが足りないことを確認した後、寝る。",
    answerb: "頭が枕に触れると寝る。",
    type: "JP",
  },
];

const ResultData = [
  {
    id: 1,
    name: "ロシアンブルー",
    best: "ESTJ",
    desc: "겁이 많아요.워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다! 낯을 심하게 가리는 편이구요.혼자 놔두면 호기심이 많아서 이것저것 치고 건드리고 즐겁게 보내는 고양이입니다.초보 애묘가가 키우기 좋은 묘종입니다.",
    image: `Russianblue`,
  },
  {
    id: 2,
    name: "シャム",
    best: "ESFP",
    desc: "대체적으로 온순하고 느긋한 성격이에요.외로움을 잘타며 질투심이 강해요.수다스러운 성격입니다.독립심이 강한 편에 속하지만 특이하게도 사람 손 타는 걸 좋아하는 고양이 입니다.",
    image: `Siamese`,
  },
  {
    id: 3,
    name: "ペルシアン",
    best: "ENTJ",
    desc: "조용하고 성격도 순한편이서 개냥이가 되는 경우가 많습니다. 장모종이어서 털이 굉장히 부드러워요.아이와 함께 키워도 좋을 만큼 굉장히 순하고 독립심이 강한 고양이 입니다.",
    image: `Persian`,
  },
  {
    id: 4,
    name: "バンガル",
    best: "INTP",
    desc: "활동력이 어마어마한 고양이에요! 그렇기 때문에 살이 잘 안찌는 고양이 중에 하나입니다!집사분이 놀아주다가 탈진할 수도!",
    image: `Bengal`,
  },
  {
    id: 5,
    name: "トルコッシュ·アンゴラ",
    best: "INTJ",
    desc: "우아한 장모종 고양이! 그러다보니 까칠하고 성질이 조금 급해요! 잔머리가 많고 복수심도 많은 고양이! 하지만 고양이마다 성격은 다 다르니 참고하세요!",
    image: `Turkishangora`,
  },
  {
    id: 6,
    name: "アビシニアン",
    best: "ISTJ",
    desc: "민첩하고 호기심 많고 똑똑한 고양이입니다! 굉장히 수다쟁이여서 집사가 부르면 야옹하고 대답도 잘하는 고양이에요! 물을 굉장히 좋아해서 목욕을 시킬 때, 굉장히 편한 고양이 중 하나! 다만 호기심이 많아서 이것저것 잘 떨구는 고양이!",
    image: `Abyssinian`,
  },
  {
    id: 7,
    name: "ノルウェーの森",
    best: "ESTP",
    desc: "조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥 놀이를 굉장히 좋아해요. 대형종 고양이라 식욕이 많아요",
    image: `Norwegianforest`,
  },
  {
    id: 8,
    name: "アメリカン·ショートヘア",
    best: "INFP",
    desc: "주인에 대한 호기심이 높고 애교가 굉장히 많아요!다만! 집사 내꺼야! 독점욕도 굉장히 강합니다. 이미 여러마리의 고양이를 키우는 집사라면 다른 고양이들에게 하악질을 볼 수도..",
    image: `Ameshort`,
  },
  {
    id: 9,
    name: "コリアンショートヘア",
    best: "ISFP",
    desc: "많은 고양이의 혈통이 섞여있는 고양이에요! 대부분 활발하고 쾌할한 성격을 가지고 있고, 친밀하고 영리합니다! 사냥본능이 매우 뛰어나서 사냥놀이를 굉장히 좋아해요",
    image: `Korshort`,
  },
  {
    id: 10,
    name: "エキゾチック",
    best: "ISFJ",
    desc: "낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이에요! 다만 운동량이 그렇게 많지 않아 뚱뚱 고양이가 될 수 있으니 조심하기!",
    image: `Exotic`,
  },
  {
    id: 11,
    name: "スコティッシュフォールド",
    best: "ENFP",
    desc: "접힌 귀가 굉장히 귀여운 고양이! 착하고 느긋하며 울음소리가 작은 고양이! 고양이 치고는 애교가 매우 많은 편이며 귀찮을 정도로 집사를 졸졸졸 따라다니는 경우가 있습니다!",
    image: `Scottishfold`,
  },
  {
    id: 12,
    name: "マンチキン",
    best: "INFJ",
    desc: "짧은 다리와 귀염한 외모를 가지고 있는 고양이에요! 호기심이 매우 많아서 짧은 다리로 이곳저곳을 돌아다니는 에너지가 넘치는 고양이! 영리하고 애교가 많은 편에 속하는 고양이에요",
    image: `Munchkin`,
  },
  {
    id: 13,
    name: "ラグドール ",
    best: "ESFJ",
    desc: "긴 털과 아주 예쁜 예모로 많이 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있는 고양이입니다! 너무나도 순하고 집사와의 교감을 매우 좋아하는 고양이 중에 하나입니다!",
    image: `Ragdoll`,
  },
  {
    id: 14,
    name: "ブリティッシュ·ショートヘア",
    best: "ENTP",
    desc: "이름과 같이 영국 신사와 같은 고양이! 배려심이 깊고 매우 조용하고 인내심이 강한 고양이에요. 덩치가 큰 편이어서 집사 무릎보다는 옆구리에 앉아서 시간을 보내는 것을 좋아하는 고양이입니다!",
    image: `British`,
  },
  {
    id: 15,
    name: "スフィンクス",
    best: "ISTP",
    desc: "유일하게 털이 없는 고양이입니다! 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 하는 고양이계의 골든리트리버! 다만 피부병이 잘 걸릴 수 있으니 조심조심!",
    image: `Sphinx`,
  },
  {
    id: 16,
    name: "メインクーン",
    best: "ENFJ",
    desc: "거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑하고 크기와 생김새가 사자나 호랑이처럼 생긴 고양이 입니다!",
    image: `Mainecoon`,
  },
];

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffleArray(QuestionData);
console.log(QuestionData);

const btnStart = document.querySelector(".start .btn");
const start = document.querySelector(".start");
const question = document.querySelector(".question");
const result = document.querySelector(".result");
const bar = document.querySelector(".question .progress .bar");
const questionBox = document.querySelector(".question .question-box");
const type01 = document.querySelector(".question .type01");
const type02 = document.querySelector(".question .type02");
const catType = document.querySelector(".result .cat-type");
const catImages = document.querySelector(".result .cat-img");
const catDesc = document.querySelector(".result .cat-desc");
const url = "https://ethansnekotest.netlify.app";

btnStart.addEventListener("click", function () {
  start.classList.remove("on");
  question.classList.add("on");
});
let score = [
  { id: "EI", num: 0 },
  { id: "SN", num: 0 },
  { id: "TF", num: 0 },
  { id: "JP", num: 0 },
];
let count = 1;
questionBox.textContent = QuestionData[0].title;
type01.textContent = QuestionData[0].answera;
type02.textContent = QuestionData[0].answerb;

function clickFunc(point) {
  if (count < 12) {
    questionBox.textContent = QuestionData[count].title;
    type01.textContent = QuestionData[count].answera;
    type02.textContent = QuestionData[count].answerb;
    bar.style.width = (count / 12) * 100 + "%";

    const newScore = score.map(function (item, idx) {
      if (item.id === QuestionData[count].type) {
        return { id: item.id, num: item.num + point };
      } else {
        return item;
      }
    });
    score = newScore;
    console.log(newScore);
  } else {
    question.classList.remove("on");
    result.classList.add("on");

    const mbti = score.reduce(function (acc, current) {
      if (current.num >= 2) {
        return acc + current.id.charAt(0);
      } else {
        return acc + current.id.charAt(1);
      }
    }, "");

    const selectedData = ResultData.find(function (item) {
      if (item.best === mbti) {
        return item;
      }
    });

    catType.textContent = selectedData.name;
    catImages.src = `./img/cat/${selectedData.image}.jpg`;
    catDesc.textContent = selectedData.desc;
  }
  count++;
}
type01.addEventListener("click", function () {
  clickFunc(1);
});

type02.addEventListener("click", function () {
  clickFunc(0);
});

import male20 from "./assets/icon/response/male-20.svg";
import male30 from "./assets/icon/response/male-30.svg";
import male40 from "./assets/icon/response/male-40.svg";
import male50 from "./assets/icon/response/male-50.svg";
import female20 from "./assets/icon/response/female-20.svg";
import female30 from "./assets/icon/response/female-30.svg";
import female40 from "./assets/icon/response/female-40.svg";
import female50 from "./assets/icon/response/female-50.svg";

import star3 from "./assets/icon/response/star-3.svg";
import star4 from "./assets/icon/response/star-4.svg";
import star5 from "./assets/icon/response/star-5.svg";

document.addEventListener("DOMContentLoaded", function () {
	// HEADER
	const header = document.querySelector('.js-header');

	// FAQ
	const faqTags = document.querySelectorAll('.js-faq-tag');
	const faqContent = document.querySelector('.js-faq-content');
	const faqItemHeader = document.querySelectorAll('.js-faq-item-header');

	// MODAL
	const openModals = document.querySelectorAll('.js-open-modal');
	const closeModals = document.querySelectorAll('.js-close-modal');

	// RESPONSE
	const responseSwiperWrapper = document.querySelector('.js-response-swiper-wrapper');

	// STEP
	const step = document.querySelector('.js-step');
	const stepTags = document.querySelectorAll('.js-step-tag');

	// SIMULATION
	const simulationForm = document.querySelector('.js-simulation-form');
	const simulationResultWrapper = document.querySelector('.js-simulation-result-wrapper');
	const simulationResultBody = document.querySelector('.js-simulation-result-body');
	const simulationResultTags = document.querySelectorAll('.js-simulation-result-tag');
	const simulationHeaderStep1 = document.querySelector('.js-simulation-header-step-1');
	const simulationHeaderStep2 = document.querySelector('.js-simulation-header-step-2');
	const simulationHeaderStep3 = document.querySelector('.js-simulation-header-step-3');
	const simulationSwiper = document.querySelector('.js-simulation-swiper');

	// PRICE MODAL
	const priceModalTagWrapper = document.querySelector('.js-price-modal-tag-wrapper');
	const priceModalTableList = document.querySelector('.js-price-modal-table-list');
	const priceModalTotal = document.querySelector('.js-price-modal-total');

	// SCROLL TOP
	const scrollTopButton = document.querySelector('.js-scroll-top-button');

	const customerResponses = [
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 3, imgStar: star3, review: "モバイルルーターの軽さ" },
		{ img: male40, gender: "男性", genderEn: "male", age: "40", stars: 3, imgStar: star3, review: "長時間の外出や宿泊する場合、子供たちにWiFiルーターを持たせられるところは気に入ってます。" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 4, imgStar: star4, review: "ポケットはとても便利でWiFiスポットを探さなくてもどこでも勝手にWi-Fiなのでギガ数気にせず使えるのが1番私には有り難い部分です。" },
		{ img: female30, gender: "女性", genderEn: "female", age: "30", stars: 4, imgStar: star4, review: "通信速度も問題なく、設定も簡単だった" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 4, imgStar: star4, review: "ポケットWiFiが早朝から深夜まで途中充電なしに使える" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 4, imgStar: star4, review: "通信速度が速くて快適です。また、外出中も安心して使えることがありがたいです。" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 4, imgStar: star4, review: "据え置き型はサクサクつながり、ポケットWi-Fiは出先で便利。" },
		{ img: male30, gender: "男性", genderEn: "male", age: "30", stars: 5, imgStar: star5, review: "他のところよりも安く2台使えるところ" },
		{ img: male40, gender: "男性", genderEn: "male", age: "40", stars: 4, imgStar: star4, review: "ポケットwifiが使いやすい" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 3, imgStar: star3, review: "ホームルーターが無制限なのはとても助かります" },
		{ img: female30, gender: "女性", genderEn: "female", age: "30", stars: 4, imgStar: star4, review: "外用の機器が可愛い所です。" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 5, imgStar: star5, review: "ホームルーターとポケットWifiが併用できる。" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 3, imgStar: star3, review: "ホームルーターは、速度早くて気に入ってます" },
		{ img: male20, gender: "男性", genderEn: "male", age: "20", stars: 4, imgStar: star4, review: "ホームルーターの値段でポケットWi-Fiもついてくる" },
		{ img: female40, gender: "女性", genderEn: "female", age: "40", stars: 5, imgStar: star5, review: "ホームルーターもモバイルWiFiも電波状況が良い。" },
		{ img: male30, gender: "男性", genderEn: "male", age: "30", stars: 5, imgStar: star5, review: "ほぼストレスなくすごくお得に優秀インターネットを使えるのは本当に素晴らしい。" },
		{ img: male20, gender: "男性", genderEn: "male", age: "20", stars: 5, imgStar: star5, review: "仕事と家庭でデータの使い分けができ、尚且つ価格が良心的であること" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 5, imgStar: star5, review: "速度など何も気にせず使えてる点" },
		{ img: female40, gender: "女性", genderEn: "female", age: "40", stars: 4, imgStar: star4, review: "ポケット型Wi-Fiの利用は初めてでしたが、使い慣れると本当に便利で助かっています。" },
		{ img: female20, gender: "女性", genderEn: "female", age: "20", stars: 4, imgStar: star4, review: "簡単でその日からWi-Fiが使えてよかった。" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 4, imgStar: star4, review: "2台使えるのはとてもいい" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 4, imgStar: star4, review: "ポケットに入れて持ち込みができる事。" },
		{ img: male50, gender: "男性", genderEn: "male", age: "50", stars: 5, imgStar: star5, review: "リモートワークのいろいろな場面（自宅・営業先）に最適" },
		{ img: female40, gender: "女性", genderEn: "female", age: "40", stars: 4, imgStar: star4, review: "家でも車でもネットが使えるので、動画配信が見られ、子供も飽きない。" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 5, imgStar: star5, review: "初めてポケットWi-Fiを使いましたが、外出中に容量が減らないので安心して携帯を使えることがよかったです" },
		{ img: male30, gender: "男性", genderEn: "male", age: "30", stars: 5, imgStar: star5, review: "節約につながっている" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 4, imgStar: star4, review: "容量無制限で速度にも満足している" },
		{ img: female50, gender: "女性", genderEn: "female", age: "50", stars: 5, imgStar: star5, review: "2台ある事で、外でのデーターが気にならなくなったのと、実際に支払いをし始めて、本当に安くて感謝しかない！" }
	];

	const simulationStepMethodList = {
		step1: [
			{
				label: "マンションタイプ",
				value: "apartment",
			},
			{
				label: "ファミリータイプ",
				value: "family",
			}
		],
		step2: [
			{
				label: "1ギガ",
				value: "1gbps",
			},
			{
				label: "10ギガ",
				value: "10gbps",
			},
		],
		step3: [
			{
				label: "USB型ルーター",
				value: "usb",
			},
			{
				label: "モバイルルーター",
				value: "mobile",
			},
		],
	}

	const simulationResult = [
		{
			step1: "apartment",
			step2: "1gbps",
			step3: "mobile",
			type24: [{ title: "初月", value: "4,180" }, { title: "2~24ヵ月目", value: "5,500" }],
			type25: [{ title: "25ヵ月目~", value: "8,030" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "4,180",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~24ヵ月目", 
					value: "row2",
					total: "5,500",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row3", 
					total: "8,030",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row4", 
					total: "8,030",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "family",
			step2: "1gbps",
			step3: "mobile",
			type24: [{ title: "初月", value: "5,720" }, { title: "4~24ヵ月目", value: "7,040" }],
			type25: [{ title: "25ヵ月目~", value: "9,570" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "5,720",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~24ヵ月目", 
					value: "row2",
					total: "7,040",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row3", 
					total: "9,570",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row4", 
					total: "9,570",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "apartment",
			step2: "10gbps",
			step3: "mobile",
			type24: [{ title: "初月", value: "0" }, { title: "2~6ヵ月目", value: "1,320" }, { title: "7~24ヵ月目", value: "8,250" }],
			type25: [{ title: "25ヵ月目~", value: "10,780" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "0",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~6ヵ月", 
					value: "row2",
					total: "1,320",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "7~24ヵ月目", 
					value: "row3", 
					total: "8,250",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row4", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row5", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "family",
			step2: "10gbps",
			step3: "mobile",
			type24: [{ title: "初月", value: "0" }, { title: "2~6ヵ月目", value: "1,320" }, { title: "7~24ヵ月目", value: "8,250" }],
			type25: [{ title: "25ヵ月目~", value: "10,780" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "0",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~6ヵ月", 
					value: "row2",
					total: "1,320",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "7~24ヵ月目", 
					value: "row3", 
					total: "8,250",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row4", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "660"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row5", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "apartment",
			step2: "1gbps",
			step3: "usb",
			type24: [{ title: "初月", value: "4,180" }, { title: "4~24ヵ月目", value: "5,280" }],
			type25: [{ title: "25ヵ~49ヵ月目", value: "7,810" }, { title: "50ヵ月目~", value: "8,030" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "4,180",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~24ヵ月目", 
					value: "row2",
					total: "5,280",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row3", 
					total: "7,810",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row4", 
					total: "8,030",
					list: [
						{
							title: "基本料金※11",
							bank: "4,180",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "family",
			step2: "1gbps",
			step3: "usb",
			type24: [{ title: "初月", value: "5,720" }, { title: "2~24ヵ月目", value: "6,820" }],
			type25: [{ title: "25ヵ~49ヵ月目", value: "9,350" }, { title: "50ヵ月目~", value: "9,570" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "5,720",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~24ヵ月目", 
					value: "row2",
					total: "6,820",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row3", 
					total: "9,350",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row4", 
					total: "9,570",
					list: [
						{
							title: "基本料金※11",
							bank: "5,720",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "apartment",
			step2: "10gbps",
			step3: "usb",
			type24: [{ title: "初月", value: "0" }, { title: "2~6ヵ月目", value: "1,100" }, { title: "7~24ヵ月目", value: "8,030" }],
			type25: [{ title: "25ヵ~49ヵ月目", value: "10,560" }, { title: "50ヵ月目~", value: "10,780" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "0",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~6ヵ月", 
					value: "row2",
					total: "1,100",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "7~24ヵ月目", 
					value: "row3", 
					total: "8,030",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row4", 
					total: "10,560",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row5", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		},
		{
			step1: "family",
			step2: "10gbps",
			step3: "usb",
			type24: [{ title: "初月", value: "0" }, { title: "2~6ヵ月目", value: "1,100" }, { title: "7~24ヵ月目", value: "8,030" }],
			type25: [{ title: "25ヵ~49ヵ月目", value: "10,560" }, { title: "50ヵ月目~", value: "10,780" }],
			priceTable: [
				{ 
					title: "初月", 
					value: "row1", 
					total: "0",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-3,850"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
				{ 
					title: "2~6ヵ月", 
					value: "row2",
					total: "1,100",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "-6,930",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "7~24ヵ月目", 
					value: "row3", 
					total: "8,030",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "-2,530"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "25~49ヵ月目", 
					value: "row4", 
					total: "10,560",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "-660"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "440"
						},
					]
				},
				{ 
					title: "50ヵ月目~", 
					value: "row5", 
					total: "10,780",
					list: [
						{
							title: "基本料金※11",
							bank: "6,930",
							mobile: "3,850"
						},
						{
							title: "超おトク割（24回）※12",
							bank: "0",
							mobile: "0"
						},
						{
							title: "10ギガ もっとめちゃトク割（6回）※13",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末購入応援割（48回）",
							bank: "0",
							mobile: "0"
						},
						{
							title: "端末代金（48回）",
							bank: "0",
							mobile: "0"
						},
					]
				},
			]
		}
	];

	let responseItems = "";
	let simulationType = 24;
	let simulationResultData = simulationResult?.[4];

	const handleRenderSimulationResult = () => {
		let newTags = "";

		const modal = document.querySelector('.js-modal-price');
		modal.setAttribute('data-speed', simulationResultData?.step2);

		simulationResultData?.priceTable?.forEach((item ) => {
			const newTag = `
				<button class="js-price-modal-tag" data-type="${item?.value}">
					${item?.title}
					<img src="./assets/icon/faq/arrow-right.svg" alt="arrow" class="arrow arrow-unactive" />
					<img src="./assets/icon/faq/arrow-down.svg" alt="arrow" class="arrow arrow-active" />
				</button>
			`;
			newTags += newTag;
		});

		priceModalTagWrapper.innerHTML = newTags;

		const priceModalTags = priceModalTagWrapper.querySelectorAll('.js-price-modal-tag');

		priceModalTags.forEach((item) => {
			item.addEventListener('click', function () {
				let listRow = "";

				const type = item?.dataset?.type;
				const data = simulationResultData?.priceTable?.find((item) => item?.value === type);
				priceModalTags.forEach((tag) => tag.classList.remove('active'));
				this.classList.add('active');

				data?.list?.forEach((item) => {
					const newRow = `
						<div class="row">
							<p>${item?.title}</p>
							<p class="value">${item?.bank}</p>
							<p class="value">${item?.mobile}</p>
						</div>
					`;
					listRow += newRow;
				});

				priceModalTableList.innerHTML = listRow;
				priceModalTotal.innerText = data?.total;
			});
		});

		priceModalTags?.[0]?.click();
	}

	const handleShowModal = (type, status) => {
		const modal = document.querySelector(`.js-modal-${type}`);

		if (status === "open") {
			if (type === "price") {
				handleRenderSimulationResult();
			}

			modal.classList.add('show');
			document.body.classList.add('overflow-hidden');
		} else {
			modal.classList.remove('show');
			document.body.classList.remove('overflow-hidden');
		}
	}

	faqTags.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;

			faqTags.forEach((tag) => tag.classList.remove('active'));

			this.classList.add('active');
			faqContent.setAttribute('data-type', type);
		});
	});

	faqItemHeader.forEach((item) => {
		item.addEventListener('click', function (event) {
			const target = event.target;
			const parent = target.parentElement;
			const itemBody = parent.querySelector('.js-faq-item-body');

			if (parent.classList.contains('active')) {
				parent.classList?.remove('active');
				itemBody.style.height = 0;
			} else {
				parent.classList?.add('active');
				itemBody.style.height = itemBody?.scrollHeight + 'px';
			}
		});
	});

	openModals.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;
			handleShowModal(type, 'open');
		})
	})

	closeModals.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;
			handleShowModal(type, 'close');
		})
	})

	customerResponses?.forEach((item, index) => {
		const newItem = `<div class="swiper-slide item">
							<div class="item-header">
								<img src="${item?.img}" alt="avatar" class="item-header__avatar" />
								<div class="item-header__info">
									<p class="title">満足度</p>
									<div class="star">
										<p>${item?.stars}</p>
										<img src="${item?.imgStar}" alt="star" />
									</div>
									<div class="general">
										<p>${item?.age}代</p>
										<p>／</p>
										<p>${item?.gender}</p>
									</div>
								</div>
							</div>
							<p class="item-body">
								${item?.review}
							</p>
						</div>`;

		if (window.innerWidth > 1024 || index <= 12) {
			responseItems += newItem;
		}
	})

	responseSwiperWrapper.innerHTML = responseItems;

	const responseSwiperInit = new Swiper('.response-swiper', {
		direction: 'horizontal',
		slidesPerView: 1.525,
  		spaceBetween: 18,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		on: {
			init: function () {
				this.autoplay.stop();
			},
		},
		breakpoints: {
			600: {
				slidesPerView: 1.9,
  				spaceBetween: 24,
			},
			744: {
				slidesPerView: 2.8,
  				spaceBetween: 24,
			},
			834: {
				slidesPerView: 2.9,
  				spaceBetween: 24,
			},
			991: {
				slidesPerView: 3,
  				spaceBetween: 24,
			},
			1204: {
				slidesPerView: 4.04,
  				spaceBetween: 24,
			},
		}
	});

	const campaignSwiperInit = new Swiper('.campaign-swiper', {
		direction: 'horizontal',
		slidesPerView: 1.24,
		spaceBetween: 18,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 1.5,
  				spaceBetween: 18,
			},
			600: {
				slidesPerView: 1.9,
  				spaceBetween: 18,
			},
			768: {
				slidesPerView: 2.2,
  				spaceBetween: 18,
			},
			834: {
				slidesPerView: 2.5,
  				spaceBetween: 18,
			},
			1204: {
				slidesPerView: 3.278,
				spaceBetween: 24,
			},
		}
	});

	if (window?.innerWidth <= 1024) {
		const simulationSwiperInit = new Swiper('.simulation-swiper', {
			direction: 'horizontal',
			slidesPerView: 1.22,
			spaceBetween: 15,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
		});
	}

	stepTags.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;
			step.setAttribute('data-type', type);

			stepTags.forEach((tag) => tag.classList.remove('active'));
			this.classList.add('active');
		});
	});

	const handleChangeSimulationResult = () => {
		const formData = new FormData(simulationForm);
		const formValues = Object.fromEntries(formData.entries());

		const data = simulationResult?.find((item) => item?.step1 === formValues?.step1 &&  item?.step2 === formValues?.step2 && item?.step3 === formValues?.step3);
		simulationResultData = data;
		const dataType = simulationType == 24 ? data?.type24 : data?.type25;

		let newItemList = "";

		dataType?.forEach((item, index) => {
			const newItem = `	
				<div class="item">
					<p class="item-title">${item?.title}</p>
					<div class="item-price">
						<p class="medium">${item?.value}</p>
						<p class="small">円</p>
					</div>
				</div>
				${
					(dataType?.length > 1 && index < dataType?.length - 1) ? "<span></span>" : ""
				}
			`;

			newItemList += newItem;
			simulationResultBody.innerHTML = newItemList;
		})
	}

	simulationResultTags.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;

			simulationResultTags.forEach((tag) => tag.classList.remove('active'));
			this.classList.add('active');
			simulationType = type;
			handleChangeSimulationResult();
		});
	});

	simulationForm.addEventListener('change', function (e) {
		const changedElement = e.target;
		const nameTarget = changedElement.name;

		simulationResultWrapper.classList.remove('show');

		const formData = new FormData(e.currentTarget);
		const formValues = Object.fromEntries(formData.entries());

		const dataStep1 = simulationStepMethodList?.step1?.find((item) => item?.value === formValues?.step1);
		const dataStep2 = simulationStepMethodList?.step2?.find((item) => item?.value === formValues?.step2);
		const dataStep3 = simulationStepMethodList?.step3?.find((item) => item?.value === formValues?.step3);

		simulationHeaderStep1.innerText = dataStep1?.label;
		simulationHeaderStep2.innerText = dataStep2?.label;
		simulationHeaderStep3.innerText = dataStep3?.label;

		handleChangeSimulationResult();

		if (nameTarget === "step3") {
			const elementPosition = simulationResultWrapper.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - 100;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}

		setTimeout(() => {
			simulationResultWrapper.classList.add('show');
		})
	})

	const observerOptions = {
		threshold: 0.4
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observer.unobserve(entry.target);

				if (entry.target.classList?.contains('js-response-swiper')) {
					responseSwiperInit?.autoplay?.start();

					setTimeout(() => {
						entry.target.classList.remove('show');
						entry.target.classList.add('response-swiper-show');
					}, 700)
				}

				if (entry.target.classList?.contains('js-campaign-swiper')) {
					setTimeout(() => {
						entry.target.classList.remove('show');
						entry.target.classList.add('campaign-swiper-show');
					}, 700)
				}

				if (entry.target.classList?.contains('js-step')) {
					setTimeout(() => {
						entry.target.classList.add('show-slower');
					}, 450)
				}

				if (entry.target.classList?.contains('js-faq-content')) {
					setTimeout(() => {
						entry.target.classList.add('show-slower');
					}, 450)
				}
			}
		});
	}, observerOptions);

	document.querySelectorAll('.js-el-scroll').forEach((el) => {
		observer.observe(el);
	});

	scrollTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	const handleCheckScrollTop = () => {
		if (window.scrollY > window.innerHeight / 2) {
			scrollTopButton.style.display = "block";
		} else {
			scrollTopButton.style.display = "none";
		}
	}

	const handleCheckScrollHeader = () => {
		if (window.scrollY > 0) {
			header.classList.add("header-scroll");
		} else {
			header.classList.remove("header-scroll");
		}
	}

	window.addEventListener('scroll', () => {
		handleCheckScrollTop();
		handleCheckScrollHeader();
	});

	handleCheckScrollTop();
	handleCheckScrollHeader();
})
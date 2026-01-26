document.addEventListener("DOMContentLoaded", function () {
	// FAQ
	const faqTags = document.querySelectorAll('.js-faq-tag');
	const faqContent = document.querySelector('.js-faq-content');
	const faqItemHeader = document.querySelectorAll('.js-faq-item-header');

	// MODAL
	const openModals = document.querySelectorAll('.js-open-modal');
	const closeModals = document.querySelectorAll('.js-close-modal');

	// RESPONSE
	const responseSwiperWrapper = document.querySelector('.js-response-swiper-wrapper');
	const campaignSwiperWrapper = document.querySelector('.js-campaign-swiper-wrapper');

	// STEP
	const stepTags = document.querySelectorAll('.js-step-tag');
	const step1Title = document.querySelector('.js-step-1-title');
	const step1Des = document.querySelector('.js-step-1-des');
	const step2Title = document.querySelector('.js-step-2-title');
	const step2Des = document.querySelector('.js-step-2-des');
	const step3Title = document.querySelector('.js-step-3-title');
	const step3Des = document.querySelector('.js-step-3-des');
	const step4Title = document.querySelector('.js-step-4-title');
	const step4Des = document.querySelector('.js-step-4-des');
	const step5Title = document.querySelector('.js-step-5-title');
	const step5Des = document.querySelector('.js-step-5-des');
	const stepDetail = document.querySelector('.js-step-detail');


	// SIMULATION
	const simulationForm = document.querySelector('.js-simulation-form');
	const simulationResultBody = document.querySelector('.js-simulation-result-body');
	const simulationResultTags = document.querySelectorAll('.js-simulation-result-tag');
	const simulationHeaderStep1 = document.querySelector('.js-simulation-header-step-1');
	const simulationHeaderStep2 = document.querySelector('.js-simulation-header-step-2');
	const simulationHeaderStep3 = document.querySelector('.js-simulation-header-step-3');

	// PRICE MODAL
	const priceModalTagWrapper = document.querySelector('.js-price-modal-tag-wrapper');
	const priceModalFeeBank = document.querySelector('.js-price-modal-fee-bank');
	const priceModalFeeMobile = document.querySelector('.js-price-modal-fee-mobile');
	const priceModalSaveBank = document.querySelector('.js-price-modal-save-bank');
	const priceModalSaveMobile = document.querySelector('.js-price-modal-save-mobile');
	const priceModalDiscountBank = document.querySelector('.js-price-modal-discount-bank');
	const priceModalDiscountMobile = document.querySelector('.js-price-modal-discount-mobile');
	const priceModalPriceBank = document.querySelector('.js-price-modal-price-bank');
	const priceModalPriceMobile = document.querySelector('.js-price-modal-price-mobile');
	const priceModalTotal = document.querySelector('.js-price-modal-total');

	const customerResponses = [
		{ gender: "女性", genderEn: "female", age: "30", stars: 5, review: "簡単に接続できる" },
		{ gender: "女性", genderEn: "female", age: "30", stars: 5, review: "価格" },
		{ gender: "男性", genderEn: "male", age: "30", stars: 5, review: "料金が安い" },
		{ gender: "男性", genderEn: "male", age: "30", stars: 5, review: "回線が安定している" },
		{ gender: "女性", genderEn: "female", age: "50", stars: 4, review: "通信が安定している" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 5, review: "電池時間が短い" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 5, review: "とても満足しています。" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 5, review: "5Gが使える" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "家と外どちらでも" },
		{ gender: "女性", genderEn: "female", age: "20", stars: 5, review: "どこにいても" },
		{ gender: "女性", genderEn: "female", age: "50", stars: 4, review: "100GBあると" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 5, review: "通信速度" },
		{ gender: "女性", genderEn: "female", age: "30", stars: 4, review: "外でも、使える" },
		{ gender: "女性", genderEn: "female", age: "30", stars: 5, review: "ワイファイの" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 4, review: "主に外で使用" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 4, review: "ポケットwifi" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "ホームルーター" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "長時間の外出" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 4, review: "データ通信量" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "価格" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "家でも外でも" },
		{ gender: "男性", genderEn: "male", age: "40", stars: 5, review: "とても満足しています。" },
		{ gender: "女性", genderEn: "female", age: "50", stars: 5, review: "工事不要" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 5, review: "速度がはやい" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 4, review: "とても満足しています。" },
		{ gender: "男性", genderEn: "male", age: "50", stars: 4, review: "設置が簡単" },
		{ gender: "女性", genderEn: "female", age: "30", stars: 5, review: "外出時のネット環境" },
		{ gender: "男性", genderEn: "male", age: "30", stars: 5, review: "とても満足しています。" }
	];

	const stepList = [
		{
			type: "feature",
			detail: "新規契約の場合、開通工事が必要です。モバイルWi-Fiの到着時期は審査状況により前後する場合があります。",
			titleStep1: "Web申込",
			desStep1: "フォームから簡単入力",
			titleStep2: "電話確認",
			desStep2: "SMSまた郵送にて、本人確認書類、支払方法のご登録等",
			titleStep3: "モバイルWi-Fi到着",
			desStep3: "最短1週間でお届け！<br/>ネット利用開始",
			titleStep4: "光工事",
			desStep4: "立ち会い工事実施",
			titleStep5: "光開通",
			desStep5: "家は超高速、<br/>外はモバイルWi-Fi",
		},
		{
			type: "move1",
			detail: "フレッツ光からの転用の場合、原則工事不要です（品目変更がある場合を除く）。承諾番号の有効期限にご注意ください。",
			titleStep1: "承諾番号取",
			desStep1: "NTTから転用承諾番号を取得",
			titleStep2: "Web申込",
			desStep2: "フォームから簡単に入力",
			titleStep3: "モバイルWi-Fi到着",
			desStep3: "最短1週間でお届け！<br/>ネット利用開始",
			titleStep4: "書類提出・工事日調整",
			desStep4: "SMSまたは郵送にて、本人確認書類、支払方法のご登録等",
			titleStep5: "自動切替",
			desStep5: "工事不要で切り替え完了",
		},
		{
			type: "move2",
			detail: "他社光コラボからの事業者変更の場合、原則工事不要です。承諾番号の有効期限にご注意ください。",
			titleStep1: "承諾番号取",
			desStep1: "契約中の事業者から取得",
			titleStep2: "Web申込",
			desStep2: "フォームから簡単に入力",
			titleStep3: "モバイルWi-Fi到着",
			desStep3: "最短1週間でお届け！<br/>ネット利用開始",
			titleStep4: "書類提出・工事日調整",
			desStep4: "SMSまたは郵送にて、本人確認書類、支払方法のご登録等",
			titleStep5: "自動切替",
			desStep5: "工事不要で切り替え完了",
		},
	]

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
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,320"
				},
				{
					title: "4~24ヵ月目",
					value : "5,500"
				},
			],
			type25: [
				{
					title: "25ヵ月目~",
					value : "8,030"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "-4,180",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヶ月目",
					value: "row2",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-4,180",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,320"
				},
				{
					title: "4~24ヶ月目",
					value: "row3",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "5,500"
				},
				{
					title: "25~48ヶ月目",
					value: "row4",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "8,030"
				},
				{
					title: "49ヶ月目~",
					value: "row5",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "8,030"
				}
			]
		},
		{
			step1: "family",
			step2: "1gbps",
			step3: "mobile",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,320"
				},
				{
					title: "4~24ヵ月目",
					value : "7,040"
				},
			],
			type25: [
				{
					title: "25ヵ月目~",
					value : "9,570"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヵ月",
					value: "row2",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-5,720",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,320"
				},
				{
					title: "4~24ヵ月目",
					value: "row3",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "7,040"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				}
			]
		},
		{
			step1: "apartment",
			step2: "10gbps",
			step3: "mobile",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~6ヵ月目",
					value : "1,320"
				},
				{
					title: "7~24ヵ月目",
					value : "8,250"
				},
			],
			type25: [
				{
					title: "25ヵ月目~",
					value : "10,780"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヵ月",
					value: "row2",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-5,720",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,320"
				},
				{
					title: "4~24ヵ月目",
					value: "row3",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "7,040"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				}
			]
		},
		{
			step1: "family",
			step2: "10gbps",
			step3: "mobile",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~6ヵ月目",
					value : "1,320"
				},
				{
					title: "7~24ヵ月目",
					value : "8,250"
				},
			],
			type25: [
				{
					title: "25ヵ月目~",
					value : "10,780"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヵ月",
					value: "row2",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-5,720",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,320"
				},
				{
					title: "4~24ヵ月目",
					value: "row3",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "7,040"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				}
			]
		},
		{
			step1: "apartment",
			step2: "1gbps",
			step3: "usb",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,100"
				},
				{
					title: "2~24ヵ月目",
					value : "5,280"
				},
			],
			type25: [
				{
					title: "25ヵ~49ヵ月目",
					value : "7,810"
				},
				{
					title: "50ヵ月目~",
					value : "8,030"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "-4,180",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヵ月",
					value: "row2",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-4,180",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,100"
				},
				{
					title: "4~24ヵ月目",
					value: "row3",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "5,280"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "7,810"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "4,180",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "8,030"
				}
			]
		},
		{
			step1: "family",
			step2: "1gbps",
			step3: "usb",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,100"
				},
				{
					title: "2~24ヵ月目",
					value : "6,820"
				},
			],
			type25: [
				{
					title: "25ヵ~49ヵ月目",
					value : "9,350"
				},
				{
					title: "50ヵ月目~",
					value : "9,570"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "-5,720",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~3ヵ月",
					value: "row2",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-5,720",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,100"
				},
				{
					title: "4~24ヵ月目",
					value: "row3",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "6,820"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,350"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "5,720",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "9,570"
				}
			]
		},
		{
			step1: "apartment",
			step2: "10gbps",
			step3: "usb",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,100"
				},
				{
					title: "2~24ヵ月目",
					value : "8,030"
				},
			],
			type25: [
				{
					title: "25ヵ~49ヵ月目",
					value : "10,560"
				},
				{
					title: "50ヵ月目~",
					value : "10,780"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "-6,930",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~6ヵ月",
					value: "row2",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-6,930",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,100"
				},
				{
					title: "7~24ヵ月目",
					value: "row3",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "8,250"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "10,780"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "10,780"
				}
			]
		},
		{
			step1: "family",
			step2: "10gbps",
			step3: "usb",
			type24: [
				{
					title: "初月",
					value : "0"
				},
				{
					title: "2~3ヵ月目",
					value : "1,100"
				},
				{
					title: "2~24ヵ月目",
					value : "8,030"
				},
			],
			type25: [
				{
					title: "25ヵ~49ヵ月目",
					value : "10,560"
				},
				{
					title: "50ヵ月目~",
					value : "10,780"
				},
			],
			priceTable: [
				{
					title: "初月",
					value: "row1",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-3,850",
					discountBank: "-6,930",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "0"
				},
				{
					title: "2~6ヵ月",
					value: "row2",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "-6,930",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "1,100"
				},
				{
					title: "7~24ヵ月目",
					value: "row3",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "-2,530",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "8,030"
				},
				{
					title: "25~49ヵ月目",
					value: "row4",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "10,560"
				},
				{
					title: "50ヵ月目~",
					value: "row5",
					feeBank: "6,930",
					feeMobile: "3,850",
					saveBank: "0",
					saveMobile: "0",
					discountBank: "0",
					discountMobile: "0",
					priceBank: "0",
					priceMobile: "0",
					total: "10,780"
				}
			]
		},
	];

	let responseItems = "";
	let simulationType = 24;
	let simulationResultData = simulationResult?.[4];

	const handleRenderSimulationResult = () => {
		let newTags = "";

		simulationResultData?.priceTable?.forEach((item ) => {
			const newTag = `
				<button class="js-price-modal-tag" data-type="${item?.value}">${item?.title}</button>
			`;
			newTags += newTag;
		});

		priceModalTagWrapper.innerHTML = newTags;

		const priceModalTags = priceModalTagWrapper.querySelectorAll('.js-price-modal-tag');

		priceModalTags.forEach((item) => {
			item.addEventListener('click', function () {
				console.log(1);
				const type = item?.dataset?.type;
				const data = simulationResultData?.priceTable?.find((item) => item?.value === type);
				priceModalTags.forEach((tag) => tag.classList.remove('active'));
				this.classList.add('active');

				priceModalFeeBank.innerText = data?.feeBank;
				priceModalFeeMobile.innerText = data?.feeMobile;
				priceModalSaveBank.innerText = data?.saveBank;
				priceModalSaveMobile.innerText = data?.saveMobile;
				priceModalDiscountBank.innerText = data?.discountBank;
				priceModalDiscountMobile.innerText = data?.discountMobile;
				priceModalPriceBank.innerText = data?.priceBank;
				priceModalPriceMobile.innerText = data?.priceMobile;
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

	customerResponses.forEach((item) => {
		const newItem = `<div class="swiper-slide item">
							<div class="item-header">
								<img src="./assets/icon/response/${item?.genderEn}-${item?.age}.svg" alt="avatar" class="item-header__avatar" />
								<div class="item-header__info">
									<p class="title">満足度</p>
									<div class="star">
										<p>${item?.stars}</p>
										<img src="./assets/icon/response/star-${item?.stars}.svg" alt="star" />
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
		responseItems += newItem;
	})

	responseSwiperWrapper.innerHTML = responseItems;

	const responseSwiper = new Swiper('.response-swiper', {
		direction: 'horizontal',
		slidesPerView: 4.04,
  		spaceBetween: 24,
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

				responseSwiperWrapper.classList.add('show');

				setTimeout(() => {
					this.autoplay.start();
				}, 1000);
			},
		},
	});

	const campaignSwiper = new Swiper('.campaign-swiper', {
		direction: 'horizontal',
		slidesPerView: 3.278,
		spaceBetween: 24,
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
		on: {
			init: function () {
				campaignSwiperWrapper.classList.add('show');
			},
		},
	});

	stepTags.forEach((item) => {
		item.addEventListener('click', function () {
			const type = item?.dataset?.type;

			stepTags.forEach((tag) => tag.classList.remove('active'));
			this.classList.add('active');
			const data = stepList.find((item) => item?.type === type);

			step1Title.innerHTML = data?.titleStep1;
			step1Des.innerHTML = data?.desStep1;
			step2Title.innerHTML = data?.titleStep2;
			step2Des.innerHTML = data?.desStep2;
			step3Title.innerHTML = data?.titleStep3;
			step3Des.innerHTML = data?.desStep3;
			step4Title.innerHTML = data?.titleStep4;
			step4Des.innerHTML = data?.desStep4;
			step5Title.innerHTML = data?.titleStep5;
			step5Des.innerHTML = data?.desStep5;
			stepDetail.innerHTML = data?.detail;
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
		console.log(dataType);
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
		const formData = new FormData(e.currentTarget);
		const formValues = Object.fromEntries(formData.entries());

		const dataStep1 = simulationStepMethodList?.step1?.find((item) => item?.value === formValues?.step1);
		const dataStep2 = simulationStepMethodList?.step2?.find((item) => item?.value === formValues?.step2);
		const dataStep3 = simulationStepMethodList?.step3?.find((item) => item?.value === formValues?.step3);

		simulationHeaderStep1.innerText = dataStep1?.label;
		simulationHeaderStep2.innerText = dataStep2?.label;
		simulationHeaderStep3.innerText = dataStep3?.label;

		handleChangeSimulationResult();
	})

	const observerOptions = {
		threshold: 0.3
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	document.querySelectorAll('.js-el-scroll').forEach((el) => {
		observer.observe(el);
	});
})
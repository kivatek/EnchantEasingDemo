enchant();

var core;
var ball;

// ボールスプライト
var Ball = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.call(this, 20, 20);
		this.x = x;
		this.y = y;
		this.image = core.assets['images/ball.png'];
	}
});

// ボールの動きがわかりやすいように表示する四角形
var Square = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.call(this, 160, 160);
		this.x = x;
		this.y = y;
		this.opacity = 0.5;
		this.image = core.assets['images/square.png'];
	}
});

// 動きの種類一覧に表示するアイテム
var Starter = Class.create(Label, {
	initialize: function(x, y, text, easeFunc) {
		Label.call(this);
		this.x = x;
		this.y = y;
		this.text = text;
		this.easeFunc = easeFunc;
	},
	ontouchstart: function() {
		hilightLabel(this.text);
		startDemo(this.easeFunc);
	}
});

// 一覧から選ばれたアイテムを色分け表示する
function hilightLabel(text) {
	var array = starterGroup.childNodes;
	for (var key in array) {
		var starter = array[key];
		if (starter.text === text) {
			starter.color = 'red';
		} else {
			starter.color = 'black';
		}
	}
}

// 動作デモ開始
function startDemo(easeFunc) {
	if (ball) {
		spriteGroup.removeChild(ball);
		ball = null;
	}
	
	ball = new Ball(224-10, 80-10);
	ball.tl.moveTo(224-10, 240-10, 48, easeFunc);

	spriteGroup.addChild(ball);
}

window.onload = function() {
	core = new Core(320, 320);
	core.fps = 24;
	core.touched = false;
	core.preload([
		'images/ball.png',
		'images/square.png'
	]);


	core.onload = function() {
		core.currentScene.backgroundColor = 'rgb(239, 228, 202)';

		spriteGroup = new Group();
		core.currentScene.addChild(spriteGroup);

		starterGroup = new Group();
		starterGroup.y = 24;
		core.currentScene.addChild(starterGroup);
		
		var square = new Square(144, 80);
		spriteGroup.addChild(square);
		
		var caption = new Label();
		caption.x = 4;
		caption.y = 4;
		caption.text = '一覧から動きの種類を選んでください。';
		caption.color = 'blue';
		core.currentScene.addChild(caption);

		caption = new Label();
		caption.x = 4;
		caption.y = 280;
		caption.text = 'enchant.jsにはこの一覧にある以外にも多くのEasingが用意されています。';
		caption.color = 'blue';
		core.currentScene.addChild(caption);

		starterGroup.addChild(new Starter(4, 16*0, 'BACK_EASEIN', enchant.Easing.BACK_EASEIN));
		starterGroup.addChild(new Starter(4, 16*1, 'BACK_EASEINOUT', enchant.Easing.BACK_EASEINOUT));
		starterGroup.addChild(new Starter(4, 16*2, 'BACK_EASEOUT', enchant.Easing.BACK_EASEOUT));

		starterGroup.addChild(new Starter(4, 16*3, 'BOUNCE_EASEIN', enchant.Easing.BOUNCE_EASEIN));
		starterGroup.addChild(new Starter(4, 16*4, 'BOUNCE_EASEINOUT', enchant.Easing.BOUNCE_EASEINOUT));
		starterGroup.addChild(new Starter(4, 16*5, 'BOUNCE_EASEOUT', enchant.Easing.BOUNCE_EASEOUT));
		
		starterGroup.addChild(new Starter(4, 16*6, 'ELASTIC_EASEIN', enchant.Easing.ELASTIC_EASEIN));
		starterGroup.addChild(new Starter(4, 16*7, 'ELASTIC_EASEINOUT', enchant.Easing.ELASTIC_EASEINOUT));
		starterGroup.addChild(new Starter(4, 16*8, 'ELASTIC_EASEOUT', enchant.Easing.ELASTIC_EASEOUT));

		starterGroup.addChild(new Starter(4, 16*9, 'EXPO_EASEIN', enchant.Easing.EXPO_EASEIN));
		starterGroup.addChild(new Starter(4, 16*10, 'EXPO_EASEINOUT', enchant.Easing.EXPO_EASEINOUT));
		starterGroup.addChild(new Starter(4, 16*11, 'EXPO_EASEOUT', enchant.Easing.EXPO_EASEOUT));

	};

	core.start();
};

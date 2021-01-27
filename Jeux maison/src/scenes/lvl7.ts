
// You can write more code here

/* START OF COMPILED CODE */

class lvl7 extends Phaser.Scene {
	
	constructor() {
		super("lvl7");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_red
		const bg_icebergs_red = this.add.image(608, 384, "bg-icebergs-red");
		bg_icebergs_red.scaleX = 1.014;
		bg_icebergs_red.scaleY = 0.96;
		
		// object_snowflake
		this.add.image(176, 144, "object_snowflake");
		
		// object_snowflake_1
		this.add.image(432, 176, "object_snowflake");
		
		// object_snowflake_2
		this.add.image(576, 80, "object_snowflake");
		
		// object_snowflake_3
		this.add.image(752, 176, "object_snowflake");
		
		// object_snowflake_4
		this.add.image(928, 64, "object_snowflake");
		
		// object_snowflake_5
		this.add.image(1120, 176, "object_snowflake");
		
		// object_snowflake_6
		this.add.image(320, 48, "object_snowflake");
		
		// object_snowflake_7
		this.add.image(80, 112, "object_snowflake");
		
		// object_snowflake_8
		this.add.image(80, 32, "object_snowflake");
		
		// object_snowflake_9
		this.add.image(336, 144, "object_snowflake");
		
		// object_snowflake_10
		this.add.image(544, 272, "object_snowflake");
		
		// object_snowflake_11
		this.add.image(656, 160, "object_snowflake");
		
		// object_snowflake_12
		this.add.image(784, 64, "object_snowflake");
		
		// object_snowflake_13
		this.add.image(528, 48, "object_snowflake");
		
		// object_snowflake_14
		this.add.image(960, 160, "object_snowflake");
		
		// object_snowflake_15
		this.add.image(1152, 64, "object_snowflake");
		
		// block_ice_01a_png_1
		this.add.image(32, 736, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_3
		this.add.image(288, 672, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_4
		this.add.image(352, 608, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_5
		this.add.image(416, 560, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_6
		this.add.image(480, 560, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_7
		this.add.image(608, 560, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_8
		this.add.image(672, 560, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_9
		this.add.image(224, 736, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_8_3
		this.add.image(848, 624, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_8_3_1
		this.add.image(960, 592, "plateform", "block_ice_01a.png");
		
		// block_ice_01a_png_8_3_2
		this.add.image(1120, 544, "plateform", "block_ice_01a.png");
		
		// object_04_star_png
		const object_04_star_png = this.add.image(1120, 480, "collectible", "object_04_star.png");
		object_04_star_png.scaleX = 0.1;
		object_04_star_png.scaleY = 0.1;
		
		// object_03_gem_red_png
		const object_03_gem_red_png = this.add.image(1040, 496, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png.scaleX = 0.1;
		object_03_gem_red_png.scaleY = 0.1;
		
		// object_02_gem_green_png
		const object_02_gem_green_png = this.add.image(128, 624, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png.scaleX = 0.1;
		object_02_gem_green_png.scaleY = 0.1;
		
		// object_06_coin_png
		const object_06_coin_png = this.add.image(224, 672, "collectible", "object_06_coin.png");
		object_06_coin_png.scaleX = 0.1;
		object_06_coin_png.scaleY = 0.1;
		
		// object_06_coin_png_1
		const object_06_coin_png_1 = this.add.image(288, 608, "collectible", "object_06_coin.png");
		object_06_coin_png_1.scaleX = 0.1;
		object_06_coin_png_1.scaleY = 0.1;
		
		// object_06_coin_png_2
		const object_06_coin_png_2 = this.add.image(352, 544, "collectible", "object_06_coin.png");
		object_06_coin_png_2.scaleX = 0.1;
		object_06_coin_png_2.scaleY = 0.1;
		
		// object_06_coin_png_3
		const object_06_coin_png_3 = this.add.image(448, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_3.scaleX = 0.1;
		object_06_coin_png_3.scaleY = 0.1;
		
		// object_06_coin_png_4
		const object_06_coin_png_4 = this.add.image(544, 464, "collectible", "object_06_coin.png");
		object_06_coin_png_4.scaleX = 0.1;
		object_06_coin_png_4.scaleY = 0.1;
		
		// object_06_coin_png_5
		const object_06_coin_png_5 = this.add.image(640, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_5.scaleX = 0.1;
		object_06_coin_png_5.scaleY = 0.1;
		
		// object_06_coin_png_6
		const object_06_coin_png_6 = this.add.image(848, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_6.scaleX = 0.1;
		object_06_coin_png_6.scaleY = 0.1;
		
		// object_06_coin_png_7
		const object_06_coin_png_7 = this.add.image(960, 528, "collectible", "object_06_coin.png");
		object_06_coin_png_7.scaleX = 0.1;
		object_06_coin_png_7.scaleY = 0.1;
		
		// object_06_coin_png_8
		const object_06_coin_png_8 = this.add.image(704, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_8.scaleX = 0.1;
		object_06_coin_png_8.scaleY = 0.1;
		
		// object_06_coin_png_4_1
		const object_06_coin_png_4_1 = this.add.image(384, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_4_1.scaleX = 0.1;
		object_06_coin_png_4_1.scaleY = 0.1;
		
		// pinguin3
		this.add.image(64, 544, "pinguin", 3);
		
		// pinguin3_1
		this.add.image(272, 544, "pinguin", 3);
		
		// pinguin3_2
		this.add.image(544, 544, "pinguin", 3);
		
		// pinguin3_3
		this.add.image(784, 544, "pinguin", 3);
		
		// object_01_gem_blue_png_1
		const object_01_gem_blue_png_1 = this.add.image(784, 560, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png_1.scaleX = 0.1;
		object_01_gem_blue_png_1.scaleY = 0.1;
		
		// pinguin3_3_1
		this.add.image(1024, 544, "pinguin", 3);
		
		// pinguin3_3_2
		this.add.image(1184, 544, "pinguin", 3);
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
